#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function usage() {
  console.error("Usage: node check_inputs.mjs <workspace-root> <YYYY.MM>");
  process.exit(64);
}

const [, , rootArg, period] = process.argv;
if (!rootArg || !period) usage();

const root = path.resolve(rootArg);
const inputDir = path.join(root, "01-原始数据", period);
if (!fs.existsSync(inputDir)) {
  console.log(JSON.stringify({ ready: false, inputDir, issues: ["monthly input folder not found"] }, null, 2));
  process.exit(2);
}

const files = fs.readdirSync(inputDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name);

const lower = (name) => name.toLowerCase();
const match = (predicate) => files.filter((name) => predicate(lower(name)));
const categories = {
  shared_collection: match((n) => n.includes("汇总") && n.includes("培训")),
  oa_execution: match((n) => n.includes("培训数据导出") || n.includes("培训执行")),
  online_personal: match((n) => n.includes("个人维度")),
  online_department_ignored: match((n) => n.includes("部门维度")),
  expense: match((n) => n.includes("itss") || n.includes("部门预算费用")),
  course_count_notes: match((n) => n.endsWith(".txt") || n.includes("数据说明")),
  lecturer: match((n) => n.includes("讲师")),
};

const required = ["shared_collection", "oa_execution", "online_personal", "expense"];
const issues = [];
for (const key of required) {
  if (categories[key].length === 0) issues.push(`missing required category: ${key}`);
  if (categories[key].length > 1) issues.push(`multiple candidates for ${key}: ${categories[key].join(", ")}`);
}

const report = {
  ready: issues.length === 0,
  workspace: root,
  period,
  inputDir,
  categories,
  issues,
};
console.log(JSON.stringify(report, null, 2));
process.exit(report.ready ? 0 : 2);


