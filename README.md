# AI Pair Programming: TaskQueue SRP and Scope Audit

## Objective

This project demonstrates the use of structured AI prompting to audit and
refactor a JavaScript TaskQueue class for Single Responsibility Principle,
scope, and closure issues.

## Files

- `task_queue_legacy.js` contains the original flawed implementation.
- `task_queue_clean.js` contains the refactored implementation.

## Key Issues Identified

### Scope and Closure

The `notify` function is defined inside `addTask`, so it has access to the
lexical environment of `addTask`. It closes over the `priority` parameter.

The original code also referenced `name`, but `name` belongs to the
constructor's parameter scope and is not available inside `addTask`.
Therefore, referencing `name` from `notify` can produce a ReferenceError.

### SRP Violations

The original `addTask` method handled several responsibilities:

1. Validating tasks
2. Adding tasks
3. Checking queue state
4. Logging
5. Starting processing
6. Sending high-priority notifications

The clean implementation separates task management from processing and
notification behavior.

## Reflection

The AI was used as a structural analysis tool rather than simply as a
code-fixing tool. Asking it to trace scope and closures helped identify the
problem with `name`, while the SRP analysis showed why task management,
logging, and processing should not all live inside `addTask`.
