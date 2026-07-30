# AST-FUN-003 — Character Health and Equipment

**Type:** Functional  
**Priority:** Critical  
**Status:** Tested


## Objective

Verify that character health and equipment-related stat changes function correctly during normal gameplay.

## Preconditions

- The game is running.
- The player has access to equipment that modifies a character stat related to health.
- The player can take damage.
- The player has access to a health recovery item.

## Test Steps

1. Record the character's current and maximum health.
2. Take damage and record the resulting current health.
3. Equip an item that modifies a character stat related to health.
4. Observe the character's current and maximum health.
5. Unequip the item.
6. Observe the character's current and maximum health again.
7. Take damage again if necessary.
8. Use a health recovery item.
9. Observe the character's current and maximum health after recovery.

## Expected Result

- Character health values are displayed and updated correctly.
- Taking damage decreases current health without incorrectly modifying maximum health.
- Equipment modifies the appropriate character stats.
- Maximum health changes consistently with equipment stat modifiers.
- Equipping or removing equipment does not unexpectedly alter current health.
- Health recovery correctly restores current health.
- Health values remain consistent after changing equipment.

## Actual Result

Character health and equipment stat changes functioned as expected.

## Test Result

**Pass**
