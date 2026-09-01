# Local configuration

The public skill intentionally does not contain real organization names or mappings. Runtime-specific rules belong in the user's local `00-说明与口径` folder.

Maintain these local tables in a user-readable workbook:

## Exclusion list

| Source label | Match type | Active period | Reason |
|---|---|---|---|
| Local organization name | exact / contains | YYYY.MM onward | Already collected elsewhere / outside reporting scope |

## Organization mapping

| Raw organization path | Dashboard category | Approved by | Approved date |
|---|---|---|---|
| Local path | User-selected category | User | YYYY-MM-DD |

## External/customer classification

| Raw department/person type | Classification | Warning inclusion |
|---|---|---|
| Local label | customer / employee / other | include / exclude |

Unknown values remain unresolved until the user selects a category. Append approved choices locally so later months can reuse them.


