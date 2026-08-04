# Gems of War - Playtest Report

## Playtest Overview

| Field            | Details                                      |
| ---------------- | -------------------------------------------- |
| **Game**         | Gems of War                                  |
| **Build**        | 9.2.0r82677                                  |
| **Platform**     | PC                                           |
| **Language**     | Spanish (Español)                            |
| **Testing Type** | Exploratory / Functional / Localization Testing |

## Bug Summary

| ID                                                            | Category                   | Severity | Repro Rate |
| ------------------------------------------------------------- | -------------------------- | -------- | ---------- |
| [BUG-001](Bug-Reports/BUG-001-Mouse-Cursor-Reset.md)          | Input / Cursor             | Medium   | 100%       |
| [BUG-002](Bug-Reports/BUG-002-Untranslated-Combat-Notifications.md) | Localization / Combat UI  | Low      | 100%       |
| [BUG-003](Bug-Reports/BUG-003-Untranslated-Tutorial-Text.md)  | Localization / Tutorial UI | Low      | 100%       |

## Testing Focus

During the playtest, testing focused primarily on:

* Keyboard and mouse input handling
* Mouse cursor behavior
* Combat notifications and feedback
* Spanish localization
* Tutorial interface and on-screen text
* Audio localization

## Key Findings

The playtest identified several issues related to input handling and incomplete localization.

The most significant issue affected mouse interaction, where holding movement keys caused the cursor to repeatedly reset to the center of the screen, making normal mouse interaction difficult or impossible while the key was held.

Several localization issues were also identified. Combat notifications remained in English despite Spanish being selected, and the "Mana Surge" voice-over also remained in English. Additionally, an untranslated tagline was found across all three tutorial stages.

No crashes, game-breaking issues, or progression-blocking defects were encountered during testing, and gameplay remained stable throughout the session.