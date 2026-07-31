# BUG-001 - Current Health Reverts After Changing Constitution Equipment Following Bed Recovery

## Description

When the player restores health by sleeping in a bed, changing equipment that modifies Constitution causes the character's current health to revert to the value it had before sleeping.

The issue occurs when changing the Constitution-enhancing equipment either before or after using the bed to restore health.

## Steps to Reproduce

1. Launch build V.0.0.4.2.
2. Take damage until the character's current health is below maximum health.
3. Equip armor that increases Constitution.
4. Sleep in a bed and allow the character's health to fully regenerate.
5. Unequip the Constitution-enhancing armor.
6. Observe the character's current health.
7. Repeat the test by sleeping first and equipping the Constitution-enhancing armor after health has been restored.

## Expected Result

The character's current health should remain fully restored after sleeping, regardless of changes to Constitution-enhancing equipment.

## Actual Result

Changing Constitution-enhancing equipment after sleeping causes the character's current health to revert to the value it had before sleeping.

The same behavior occurs when Constitution-enhancing equipment is changed before sleeping and then removed afterward.

## Repro Rate

100%

## Severity

High

## Attachments

* Video: [BUG-001-HealthRevertsAfterBedRecovery.mp4](../Evidence/BUG-001-HealthRevertsAfterBedRecovery.mp4)
