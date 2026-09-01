# Monthly processing workflow

## 1. OA execution data

Use only rows retained after the user's organization-scope review. The actual exclusion list is local configuration and must not be inferred from this public skill.

Group rows by execution/process number, then determine real sessions:

1. Different training dates are different sessions.
2. If the date is the same but time, location, or training audience differs, treat the records as different sessions and flag them for review.
3. If only the course differs and the records describe one continuous event, count one session.
4. Add the hours of consecutive courses in the same session.
5. Deduplicate an exactly repeated course record before adding hours.
6. For multiple real sessions submitted under one process, calculate each session separately and add their participant counts.
7. For one session with multiple course rows, do not add repeated participant counts; use the best-supported unique session count and flag conflicting values.

The user must review:

- same process with inconsistent participant counts;
- same-date records split by time, location, or audience;
- missing date, time, participant count, or hours;
- implausible satisfaction values or mixed percentage scales.

Aggregation rules:

- project/session satisfaction: direct average of valid course satisfaction records;
- session is offline when any constituent course is offline;
- assign the session to the month in which execution was completed.

## 2. Online learning

Use the personal-dimension file only.

1. Group by person plus department.
2. Sum all course learning minutes for that person-department key.
3. Convert minutes to hours.
4. Include zero-hour people in the denominator and warning counts.
5. Exclude customer/external people from internal warnings according to the local configuration.
6. Report total people, average hours, people below 2 hours, people below 12 hours, and people at or above 40 hours.

This section is monthly, not an annual cumulative measure.

## 3. ITSS expenses

Use the reimbursement/write-off amount, not the application amount.

- Keep every positive line, including multiple lines with the same process number.
- Treat negative values as internal reversals and ignore them in the month's expense total.
- Map budget organization paths using the local organization mapping.
- Send unknown paths to manual selection; do not guess.
- Income comes from the user-maintained monthly shared collection file unless another approved source is provided.

## 4. Dashboard and annual calculations

- Sessions, participants, hours, income, and expenses: sum approved monthly results.
- Satisfaction: simple average of approved monthly satisfaction results.
- Offline ratio: weight each month's ratio by its approved session count.
- Online-learning warnings: replace with the current month; do not accumulate.
- Course count: combine the approved platform counts for the current cumulative period.
- Lecturer count: use the updated roster or carry forward the last approved count after user confirmation.

The left summary area of the analysis platform is annual-to-date; the month-labeled blocks are monthly source blocks.

## 5. Quality checks

Before requesting approval:

- reconcile monthly total sessions/people/hours to the source tables;
- reconcile annual totals to the monthly blocks;
- verify satisfaction and percentage scales;
- verify ignored negative expenses are documented;
- scan formulas for `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, and `#N/A`;
- visually render and inspect every edited worksheet and both presentation slides;
- list every manual decision and its effect on totals.


