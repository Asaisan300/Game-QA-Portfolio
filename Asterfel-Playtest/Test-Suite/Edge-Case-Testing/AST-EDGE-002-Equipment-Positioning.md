# AST-EDGE-002 — Character Positioning With Equipment

**Type:** Edge Case  
**Priority:** High  
**Status:** Tested

## Objective

Verify that equipping different types of armor and equipment does not cause unexpected changes to the character's position or visual alignment with the environment.

## Preconditions

- The game is running.
- The player has access to multiple pieces of equipment.
- The player can equip and unequip equipment.
- The player is standing on a flat surface.

## Test Steps

1. Stand on a flat surface.
2. Observe the character's position relative to the ground.
3. Equip a piece of armor or equipment.
4. Observe the character's position relative to the ground.
5. Move the character around and observe its position during movement.
6. Unequip the item.
7. Observe the character's position again.
8. Repeat the process with different available equipment.
9. Inspect the character from different camera angles after equipping the items.

## Expected Result

- The character remains correctly positioned relative to the ground.
- Equipping equipment does not cause the character to float, sink, or otherwise become incorrectly positioned.
- Character positioning remains consistent during movement.
- Unequipping equipment restores the expected character position.
- Different equipment pieces do not introduce unexpected visual positioning issues.

## Actual Result

Equipping any available boots causes the character to float slightly above the ground, regardless of the terrain.

## Test Result

**Fail**

## Bug Reference

[BUG-005](../../Bug-Reports/BUG-005-Character-Floats-When-Equipping-Boots.md)