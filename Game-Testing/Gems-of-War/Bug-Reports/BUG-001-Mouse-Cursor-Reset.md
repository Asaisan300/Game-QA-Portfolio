# BUG-001 - Mouse Cursor Resets When Movement Key Is Held

## Description

While using the mouse, holding any movement key (W, A, S, D) or any Arrow Key causes the mouse cursor to repeatedly snap back to the center of the screen.

This prevents normal mouse interaction while the movement key is being held.

## Steps to Reproduce

1. Launch build 9.2.0r82677.
2. Navigate to any menu where the mouse cursor is visible.
3. Hold W, A, S, D, or any Arrow Key.
4. Move the mouse while continuing to hold the key.

## Expected Result

The mouse cursor should remain under the player's control regardless of keyboard input.

## Actual Result

The cursor repeatedly snaps back to the center of the screen while the movement key is held, making mouse interaction difficult or impossible.

## Repro Rate

100%

## Severity

Medium

## Attachments

- Video: [BUG-001-CursorReset.mp4](../Evidence/BUG-001-CursorReset.mp4)