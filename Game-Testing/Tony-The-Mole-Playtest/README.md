# Tony the Mole - Playtest Report

## Playtest Overview

| Field            | Details                                                 |
| ---------------- | ------------------------------------------------------- |
| **Game**         | Tony the Mole                                           |
| **Build**        | 24305160                                                |
| **Platform**     | PC                                                      |
| **Language**     | English                                                 |
| **Testing Type** | Exploratory / Functional / Boundary & Collision Testing |

## Bug Summary

| ID                                                            | Category                   | Severity | Repro Rate |
| ------------------------------------------------------------- | -------------------------- | -------- | ---------- |
| [BUG-001](Bug-Reports/BUG-001-Infinite-Fall-Out-of-Bounds.md) | Out of Bounds / Collision  | Critical | 2/5        |
| [BUG-002](Bug-Reports/BUG-002-Wall-Collision-Inside-House.md) | Collision / Level Boundary | Medium   | 5/5        |
| [BUG-003](Bug-Reports/BUG-003-Digging-Gate-Bypass.md)         | Progression Bypass         | Medium   | 5/5        |
| [BUG-004](Bug-Reports/BUG-004-Rock-Collider-Locked-Area.md)   | Collision / Level Boundary | Medium   | 5/5        |
| [BUG-005](Bug-Reports/BUG-005-Language-Setting.md)            | Localization / Settings    | Low      | 5/5        |

## Testing Focus

During the playtest, testing focused primarily on:

* Player movement and traversal
* Collision and level boundaries
* Out-of-bounds areas
* Digging mechanic interactions
* Locked-area access and progression boundaries
* Settings and language functionality

## Key Findings

The playtest identified several collision and level-boundary issues, particularly involving the digging mechanic. Multiple issues allowed the player to access unintended or locked areas of the map.

The most severe issue caused the player to fall out of bounds indefinitely and remain stuck in the falling state after reloading the affected save, preventing further progression with that save.

A separate issue was also identified in the language settings, where the input produced visual and audio feedback but did not change the selected language.
