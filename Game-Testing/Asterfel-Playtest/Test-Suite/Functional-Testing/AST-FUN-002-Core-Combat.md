# AST-FUN-002 — Core Combat

**Type:** Functional  
**Priority:** Critical  
**Status:** Tested

## Objective

Verify that the core combat system functions correctly when engaging hostile enemies.

## Preconditions

* The game is running.
* The player has access to at least one combat method.
* A hostile enemy is available.
* The player can engage the enemy in combat.

## Test Steps

1. Approach a hostile enemy.
2. Initiate combat using an available attack.
3. Perform multiple attacks against the enemy.
4. Observe whether attacks connect with the enemy.
5. Observe the enemy's health and reactions to successful attacks.
6. Allow the enemy to attack the player.
7. Observe the player's health after receiving damage.
8. Continue the encounter until the enemy is defeated or the player is defeated.
9. If additional combat methods are available, repeat the test using another method.

## Expected Result

* Combat actions respond correctly to player input.
* Player attacks execute consistently.
* Successful attacks register damage against the intended enemy.
* Enemy health decreases appropriately when damage is dealt.
* Enemies react appropriately when taking damage.
* Enemy attacks can damage the player as intended.
* Player health updates correctly after receiving damage.
* Combat encounters can be completed without unexpected behavior.
* Different available combat methods function according to their intended mechanics.

## Actual Result

All tested core combat behaviors functioned as expected.

## Test Result

**Pass**
