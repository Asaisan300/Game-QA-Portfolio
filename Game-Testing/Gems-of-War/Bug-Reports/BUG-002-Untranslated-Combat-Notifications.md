# BUG-002 - Combat Notifications Remain in English

## Description

When the game language is set to Spanish, several combat notification pop-ups remain in English instead of being translated.

Observed examples include:

- "New Turn"
- "Extra Turn"
- "Mana Surge"

Additionally, when "Mana Surge" occurs, the accompanying voice-over also remains in English.

## Steps to Reproduce

1. Launch build 9.2.0r82677.
2. Set the game language to Spanish.
3. Enter a battle.
4. Trigger the corresponding combat events.

## Expected Result

All combat notifications and their associated voice-over should be displayed and played in the selected language.

## Actual Result

The combat notifications remain in English, and the "Mana Surge" voice-over also remains in English despite Spanish being selected.

## Repro Rate

100%

## Severity

Low

## Attachments

- Screenshot: [BUG-002-ExtraTurnPopup.png](../Evidence/BUG-002-ExtraTurnPopup.png)
- Screenshot: [BUG-002-NewTurnPopup.png](../Evidence/BUG-002-NewTurnPopup.png)
- Video: [BUG-002-ManaSurgeAudio.mp4](../Evidence/BUG-002-ManaSurgeAudio.mp4)