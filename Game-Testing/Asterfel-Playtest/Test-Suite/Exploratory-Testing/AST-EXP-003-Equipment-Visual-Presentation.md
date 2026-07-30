# AST-EXP-003 — Equipment Visual Presentation

**Type:** Exploratory  
**Priority:** Medium  
**Status:** Tested

## Objective

Explore the visual presentation of character equipment and inventory items to identify inconsistencies, missing visuals, or issues affecting item identification and input behavior.

## Preconditions

- The game is running.
- The player has access to multiple weapons or armor pieces.
- The inventory and equipment interfaces are accessible.

## Exploration Charter

Explore different weapons and armor pieces while observing their icons, character models, and visual presentation in the inventory and equipment interfaces. Also observe input behavior when interacting with inventory items and closing the inventory.

## Areas to Explore

- Weapon icons
- Armor icons
- Item visual differentiation
- Equipped item appearance
- Inventory presentation
- Equipment interface
- Item model and icon consistency
- Mouse and camera input behavior

## Exploration Tasks

1. Open the inventory.
2. Review the icons of available weapons.
3. Compare icons between weapons of different types or tiers.
4. Review the icons of available armor pieces.
5. Compare icons between armor pieces of different types or tiers.
6. Equip different weapons and armor pieces.
7. Observe how equipped items appear on the character.
8. Compare the visual representation of equipped items with their inventory icons.
9. Right-click an inventory item and observe the available actions.
10. Close the inventory after interacting with an item.
11. Observe whether mouse and camera controls return to their normal state.
12. Repeat the interaction without selecting an available item action before closing the inventory.

## Expected Behavior

- Items have appropriate visual representations.
- Different item types are visually distinguishable where intended.
- Inventory icons correctly represent their associated items.
- Equipped weapons and armor display correctly on the character.
- Item visuals remain consistent between the inventory, equipment interface, and character model.
- Closing the inventory restores normal player and camera controls.
- The mouse cursor is correctly hidden or locked when returning to normal gameplay.

## Findings

Different weapons and armor pieces use identical inventory icons, which appears to be placeholder artwork rather than a functional issue.

A separate input issue was observed when right-clicking an inventory item and closing the inventory without selecting an available action. The mouse cursor remains visible and the player's camera cannot be controlled, although character movement remains functional.

## Test Result

**Fail**

## Notes

The repeated item icons appear to be placeholder assets and were not treated as a bug.