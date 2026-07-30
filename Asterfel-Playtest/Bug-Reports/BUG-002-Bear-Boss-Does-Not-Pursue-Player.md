# BUG-002 - Bear Boss Does Not Pursue Player

## Description

The bear boss can detect, track, and attack the player, but does not move from its original position when the player moves out of attack range.

Other observed enemies pursue the player when the player moves away from them.

## Steps to Reproduce

1. Launch build V.0.0.4.0.
2. Locate the bear boss during exploration.
3. Approach the bear until it detects and attacks the player.
4. Move away from the bear and leave its attack range.
5. Observe the bear's behavior.

## Expected Result

The bear boss should move toward the player when the player leaves its attack range, consistent with the movement behavior of other enemies.

## Actual Result

The bear boss remains in its original position when the player moves out of attack range. It continues to track the player's position and can attack when the player returns to range, but does not pursue the player.

## Repro Rate

100%

## Severity

High

## Attachments

* Video: [BUG-002-BearBossNoPursuit.mp4](../Evidence/BUG-002-BearBossNoPursuit.mp4)
