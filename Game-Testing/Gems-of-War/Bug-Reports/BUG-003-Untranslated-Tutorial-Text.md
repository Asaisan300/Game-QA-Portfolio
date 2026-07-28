# BUG-003 - Tutorial Selection Screen Contains Untranslated Text

## Description

When the game language is set to Spanish, the tutorial selection screen is almost entirely translated. However, the tagline displayed at the bottom of each tutorial stage remains in English.

Observed text: "The Greatest Journey Begins With Not One Step, But Three..."

The untranslated tagline is present across all three tutorial stages.

## Steps to Reproduce

1. Launch build 9.2.0r82677.
2. Set the game language to Spanish.
3. Open the Tutorial menu.
4. View each of the three tutorial stages.

## Expected Result

All on-screen text should be displayed in the selected language.

## Actual Result

The tagline at the bottom of each tutorial stage remains in English while the rest of the interface is displayed in Spanish.

## Repro Rate

100%

## Severity

Low

## Attachments

- Screenshot: [BUG-003-TutorialSection1.png](../Evidence/BUG-003-TutorialSection1.png)
- Screenshot: [BUG-003-TutorialSection2.png](../Evidence/BUG-003-TutorialSection2.png)
- Screenshot: [BUG-003-TutorialSection3.png](../Evidence/BUG-003-TutorialSection3.png)