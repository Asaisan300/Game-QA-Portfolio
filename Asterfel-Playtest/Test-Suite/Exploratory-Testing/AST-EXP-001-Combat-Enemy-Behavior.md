# AST-EXP-001 — Combat and Enemy Behavior

**Type:** Exploratory  
**Priority:** High  
**Status:** Tested

## Objective

Explore enemy behavior and combat interactions under different distances, positions, and combat situations to identify unexpected behavior.

## Preconditions

- The game is running.
- The player has access to combat.
- Multiple enemy types or encounters are accessible.

## Exploration Charter

Explore combat encounters with different enemies and observe how enemies respond to the player's actions and positioning.

## Areas to Explore

- Enemy movement and navigation
- Enemy targeting
- Enemy attack behavior
- Enemy reactions to damage
- Combat at different distances
- Player positioning
- Multiple enemies
- Boss encounters
- Enemy behavior during and after combat

## Exploration Tasks

1. Engage different types of enemies when available.
2. Observe how enemies approach and track the player.
3. Move around enemies during combat and observe their responses.
4. Change the distance between the player and the enemy.
5. Observe enemy attack behavior at different distances.
6. Attack enemies from different positions.
7. Observe enemy reactions to damage.
8. Engage multiple enemies when possible.
9. Explore at least one boss or stronger enemy encounter if available.
10. Observe whether enemies behave consistently throughout the encounter.

## Expected Behavior

- Enemies appropriately detect and respond to the player's presence.
- Enemies navigate toward the player when their behavior requires movement.
- Enemy attacks behave consistently with their intended range and positioning.
- Enemies react appropriately when receiving damage.
- Enemy targeting remains consistent during combat.
- Enemy behavior remains stable when the player changes position or distance.
- Multiple enemies behave independently and respond appropriately to the player.
- Boss or stronger enemy behavior remains consistent with its intended combat design.

## Findings

The bear boss can detect, track, and attack the player, but does not move from its original position when the player moves out of attack range. Other observed enemies pursue the player when they move away.

## Test Result

**Fail**

## Notes

The bear can rotate freely to track the player's position and can successfully deal and receive damage. However, unlike other observed enemies, it does not move toward the player when the player leaves its attack range.

## Bug Reference

[BUG-002](../../Bug-Reports/BUG-002-Bear-Boss-Does-Not-Pursue-Player.md)