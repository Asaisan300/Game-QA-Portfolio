# Asterfel - Playtest Report

## Playtest Overview

| Field            | Details                                      |
| ---------------- | -------------------------------------------- |
| **Game**         | Asterfel                                     |
| **Build**        | V.0.0.4.0                                    |
| **Platform**     | PC                                           |
| **Language**     | English                                      |
| **Testing Type** | Exploratory / Functional / Edge Case Testing |

## Bug Summary

| ID                                                                  | Category               | Severity | Repro Rate |
| ------------------------------------------------------------------- | ---------------------- | -------- | ---------- |
| [BUG-001](Bug-Reports/BUG-001-Health-Reverts-After-Bed-Recovery.md) | Health / Equipment     | High     | 100%       |
| [BUG-002](Bug-Reports/BUG-002-Bear-Boss-Does-Not-Pursue-Player.md)  | Enemy AI / Combat      | High     | 100%       |
| [BUG-003](Bug-Reports/BUG-003-Missing-Terrace-Floor-Geometry.md)    | Environment / Geometry | Medium   | 100%       |
| [BUG-004](Bug-Reports/BUG-004-Inventory-Close-Input-State.md)       | Input / Inventory UI   | High     | 100%       |

## Testing Focus

During the playtest, testing focused primarily on:

* Character movement and exploration
* Core combat and enemy behavior
* Character health and equipment systems
* Quest progression
* Crafting and resource systems
* Environmental geometry and collision
* Inventory and equipment presentation
* Edge cases involving equipment and character state

## Key Findings

The playtest identified several issues across gameplay systems, enemy AI, environmental geometry, and input handling.

The most significant issue involved the interaction between health recovery and Constitution-enhancing equipment. After restoring health by sleeping in a bed, changing equipment that modifies Constitution caused the character's current health to revert to the value held before sleeping. The issue was reproduced consistently in both equipment-change scenarios tested.

An enemy AI issue was also identified with the bear boss. While the boss could detect, track, and attack the player, it did not pursue the player when moving outside of its attack range, unlike other observed enemies.

An environmental geometry issue was found on a house terrace, where missing floor geometry was visible from below. Additionally, closing the inventory after right-clicking an item without selecting an action could leave the game in an incorrect input state, with the mouse cursor remaining visible and camera controls unavailable.

No crashes or progression-blocking issues were encountered during testing, and the tested core gameplay systems generally functioned as expected.
