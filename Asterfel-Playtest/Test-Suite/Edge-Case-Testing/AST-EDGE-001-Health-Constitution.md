# AST-EDGE-001 — Health State After Changing Constitution Equipment

**Type:** Edge Case  
**Priority:** Critical  
**Status:** Tested

## Objective

Verify that the character's current and maximum health remain consistent when changing Constitution-enhancing equipment before and after using a bed to restore health.

## Preconditions

- The game is running.
- The player has access to equipment that increases Constitution or maximum health.
- The player has access to a bed that restores health.
- The player can take damage.

## Test Scenario A

1. Take damage until the character's current health is below maximum health.
2. Record the current and maximum health values.
3. Equip armor that increases Constitution or maximum health.
4. Record the new current and maximum health values.
5. Use a bed to restore health.
6. Confirm that the character's health has been restored.
7. Unequip the Constitution-enhancing armor.
8. Observe the character's current and maximum health.

## Expected Result — Scenario A

- The bed restores the character's current health appropriately.
- Removing the Constitution-enhancing equipment adjusts maximum health accordingly.
- Current health remains consistent and does not unexpectedly revert to the value held before sleeping.

## Test Scenario B

1. Take damage until the character's current health is below maximum health.
2. Record the current and maximum health values.
3. Use a bed to restore health.
4. Confirm that the character's health has been restored.
5. Equip armor that increases Constitution or maximum health.
6. Observe the character's current and maximum health.

## Expected Result — Scenario B

- The bed restores the character's current health appropriately.
- Equipping Constitution-enhancing equipment increases maximum health accordingly.
- Current health remains fully restored and does not unexpectedly revert to the value held before sleeping.

## Actual Result

After sleeping, changing Constitution-enhancing equipment causes the character's current health to revert to the value held before sleeping.

## Test Result

**Fail**