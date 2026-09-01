# 月度培训数据处理 Skill

一个面向 Codex 的月度培训数据处理 Skill，用于整理培训执行、在线学习、费用和共享收集数据，保留可审计的处理中间结果，并在人工复审后生成年度看板和月度汇报材料。

## 能做什么

- 检查当月输入文件是否齐全或重复；
- 识别共享收集表、OA培训执行导出、在线学习个人明细和费用导出；
- 按真实培训场次处理同一流程下的多门课程或多场培训；
- 生成OA异常、组织归属和人数冲突复审清单；
- 计算在线学习预警和月度费用；
- 复制上月已审核文件，更新年度累计看板与两页PPT；
- 通过公式检查、勾稽检查和视觉检查后输出最终版。

## 工作流程

```text
检查输入文件
→ 清洗OA、在线学习和费用数据
→ 输出异常与组织归属复审清单
→ 用户确认复审事项
→ 更新月度汇总和年度看板
→ 生成两页PPT
→ 用户审核
→ 输出唯一最终版
```

## 建议的本地目录

```text
培训数据分析处理/
├─ 00-说明与口径/
├─ 01-原始数据/<YYYY.MM>/
├─ 02-处理中间文件/<YYYY.MM>/
└─ 03-最终输出结果/<YYYY.MM>/
```

真实组织架构映射、排除范围和模板保存在本地 `00-说明与口径` 中，不提交到公开仓库。

## 安装

将仓库克隆或下载到 Codex Skills 目录，并确保最终目录名为 `monthly-training-data`：

```powershell
git clone https://github.com/msx-code/monthly-training-etl-skill.git "$env:USERPROFILE\.codex\skills\monthly-training-data"
```

安装后重新启动或刷新 Codex。

## 使用示例

```text
使用 $monthly-training-data 检查并处理2026年9月培训数据。
```

```text
使用 $monthly-training-data 先检查当月文件是否齐全，只生成异常复审清单，不要生成最终版。
```

## 仓库结构

```text
monthly-training-data/
├─ SKILL.md
├─ agents/openai.yaml
├─ references/
│  ├─ file-contract.md
│  ├─ local-config.md
│  ├─ privacy.md
│  └─ workflow.md
└─ scripts/check_inputs.mjs
```

## 隐私说明

本仓库不包含也不应提交：

- 员工姓名、个人学习记录或其他个人信息；
- OA流程、申请人和培训执行明细；
- 收入、费用和预算组织路径；
- 企业内部组织映射与排除清单；
- 已填写的Excel、PPT和处理中间结果。

公开仓库仅保存通用处理规则、输入检查脚本和脱敏说明。真实业务数据始终留在本地。

## 当前边界

- 未识别的组织路径必须由用户手动选择；
- 同一流程疑似包含多场培训时会标记复审；
- 只有用户明确审核通过后，才生成或替换最终输出文件。


