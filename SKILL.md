---
name: monthly-training-data
description: Process recurring monthly corporate training data from OA exports, shared collection workbooks, online-learning details, expense exports, and prior-month templates; produce auditable intermediate workbooks, review exceptions, update the annual dashboard, and prepare the monthly presentation. Use only for this monthly training reporting workflow, not for general spreadsheet analysis.
---

# Monthly Training Data

Produce the monthly training report from the user's local `培训数据分析处理` workspace while preserving an auditable path from raw inputs to the approved final files.

## Start safely

1. Locate the user-provided workspace. Prefer `Desktop/培训数据分析处理`, but accept another explicit path.
2. Read [references/file-contract.md](references/file-contract.md) and run `scripts/check_inputs.mjs` before processing.
3. Read the local rules/configuration under `00-说明与口径`. Do not embed or infer confidential organization names from public skill files.
4. If a required input is missing, duplicated, or ambiguous, stop before calculations and report the exact issue.

## Process the month

Read [references/workflow.md](references/workflow.md) before transforming data. Use the spreadsheet and presentation workflows available in the environment for Excel and PowerPoint artifacts.

- Keep received/exported files unchanged in `01-原始数据/<period>`.
- Put conversions, cleaned tables, exception lists, formula checks, and draft outputs in `02-处理中间文件/<period>`.
- Use the prior month's approved files as templates; preserve their established styles, sheets, formulas, and slide design.
- Resolve new organization paths manually with the user. Record approved mappings locally for later months.
- Do not silently resolve an item that the workflow marks for review.

## Review and publish

Before publication, reconcile monthly totals to the source definitions, scan formula errors, render key ranges/slides, and prepare one review list.

Drafts stay in the intermediate folder. Only after the user explicitly approves the review results may the three approved deliverables be placed in `03-最终输出结果/<period>`:

- monthly/group training summary workbook;
- learning and training analysis dashboard workbook;
- two-page monthly training presentation.

The final folder should contain one approved final version of each deliverable. Do not delete or overwrite an existing approved final file without explicit authorization.

## Privacy

Read [references/privacy.md](references/privacy.md) before preparing files for GitHub, sharing, or packaging. Real employee data, expenses, OA records, organization mappings, and filled templates remain local.


