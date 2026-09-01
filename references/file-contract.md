# File and folder contract

## Workspace

Expected local structure:

```text
培训数据分析处理/
├─ 00-说明与口径/
├─ 01-原始数据/<YYYY.MM>/
├─ 02-处理中间文件/<YYYY.MM>/
└─ 03-最终输出结果/<YYYY.MM>/
```

The names may vary slightly. Detect input files by keywords and workbook content rather than requiring an exact filename.

## Input categories

Required:

| Category | Filename signals | Notes |
|---|---|---|
| Shared collection | `汇总`, `集团培训数据` | User-maintained monthly collection workbook |
| OA execution | `培训数据导出`, `培训执行` | Export may be `.xls` or `.xlsx` |
| Online personal detail | `个人维度` | The formal source for online-learning warnings |
| Expense export | `itss`, `部门预算费用` | Use the reimbursement/write-off amount field |

Optional or separately supplied:

| Category | Filename signals | Notes |
|---|---|---|
| Course counts | `.txt`, `数据说明`, platform names | May contain counts from multiple platforms |
| Lecturer roster | `讲师` | If absent and the user confirms no update, carry forward the prior approved count |
| Department-dimension learning | `部门维度` | Never use as the formal online-learning source |

If more than one file matches a required category, do not guess. Present the candidates to the user.

## Output naming

Use period-specific names and an explicit final marker, for example:

```text
2026年8月_集团培训数据汇总_最终版.xlsx
2026年8月_学习培训分析平台数据_最终版.xlsx
2026年8月_集团培训数据_最终版.pptx
```

Intermediate files should state their purpose, such as `OA_项目复核.xlsx` or `ITSS_费用清洗.xlsx`.


