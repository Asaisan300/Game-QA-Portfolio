# BUG-004 - Inventory Close Leaves Incorrect Input State

## Description

After right-clicking an inventory item and closing the inventory without selecting an available action, the mouse cursor remains visible and camera controls become unavailable.

Character movement remains functional, but the player cannot control the camera until the input state is restored.

## Steps to Reproduce

1. Launch build V.0.0.4.2.
2. Open the inventory.
3. Right-click an available inventory item.
4. Do not select any of the available item actions.
5. Press `Esc` to close the inventory.
6. Observe the mouse cursor and camera controls.

## Expected Result

Closing the inventory should return the game to its normal gameplay input state. The mouse cursor should no longer remain visible, and the player should be able to control both the character and camera normally.

## Actual Result

The mouse cursor remains visible after closing the inventory, and camera controls become unavailable. Character movement remains functional.

## Repro Rate

100%

## Severity

High

## Attachments

* Video: [BUG-004-Inventory-Cursor-Input-State.mp4](../Evidence/BUG-004-Inventory-Cursor-Input-State.mp4)
