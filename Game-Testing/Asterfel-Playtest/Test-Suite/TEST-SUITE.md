# Asterfel — Test Suite

## Overview

This test suite was created for the Asterfel playtest as part of a personal Game QA portfolio.

The purpose of this suite is to evaluate a representative selection of the game's core systems and identify functional, visual, environmental, and gameplay issues.

Testing was initially guided by exploratory gameplay and then organized into structured test cases based on the systems available in the tested build.

> **Note:** This is a focused portfolio test suite and is not intended to provide complete coverage of the game.

---

## Test Cases

| ID                                                                                | Test Case                                          | Type        | Priority | Status     |
| --------------------------------------------------------------------------------- | -------------------------------------------------- | ----------- | -------- | ---------- |
| [AST-FUN-001](./Functional-Testing/AST-FUN-001-Character-Movement.md)             | Character Movement and Exploration                 | Functional  | High     | Pass |
| [AST-FUN-002](./Functional-Testing/AST-FUN-002-Core-Combat.md)                    | Core Combat                                        | Functional  | Critical | Pass |
| [AST-FUN-003](./Functional-Testing/AST-FUN-003-Character-Health-Equipment.md)     | Character Health and Equipment                     | Functional  | Critical | Pass |
| [AST-FUN-004](./Functional-Testing/AST-FUN-004-Quest-Progression.md)              | Quest Progression                                  | Functional  | High     | Pass |
| [AST-FUN-005](./Functional-Testing/AST-FUN-005-Crafting-Resources.md)             | Crafting and Resource Systems                      | Functional  | High     | Pass |
| [AST-EXP-001](./Exploratory-Testing/AST-EXP-001-Combat-Enemy-Behavior.md)         | Combat and Enemy Behavior                          | Exploratory | High     | Fail |
| [AST-EXP-002](./Exploratory-Testing/AST-EXP-002-World-Environment.md)             | World and Environmental Interaction                | Exploratory | High     | Fail |
| [AST-EXP-003](./Exploratory-Testing/AST-EXP-003-Equipment-Visual-Presentation.md) | Character Equipment and Visual Presentation        | Exploratory | Medium   | Fail |
| [AST-EDGE-001](./Edge-Case-Testing/AST-EDGE-001-Health-Constitution.md)           | Health State After Changing Constitution Equipment | Edge Case   | Critical | Fail |
| [AST-EDGE-002](./Edge-Case-Testing/AST-EDGE-002-Equipment-Positioning.md)         | Character Positioning With Equipment               | Edge Case   | High     | Fail |

---

## Status Definitions

| Status         | Definition                                                          |
| -------------- | ------------------------------------------------------------------- |
| **Pass**       | Expected behavior was observed.                                     |
| **Fail**       | Actual behavior differed from the expected result.                  |
| **Blocked**    | The test could not be completed due to another issue or limitation. |
| **N/A**        | The test does not apply to the tested build or available features.  |
| **Not Tested** | The test has not yet been formally executed.                        |