# **Gems of War Test Report**



###### **Game Version:** 9.2.0r82677

###### **Platform:** PC

###### **Language:** Spanish (Español)



During testing I did not encounter any game-breaking issues or crashes, gameplay appears stable overall. However, I found several minor issues related to input handling and localization.



\------------------------------------------------------------------------------------------------------



##### **Keyboard Input Resets Mouse Cursor Position**



**Description:**

While using the mouse, pressing and holding any movement key (W, A, S, D) or any of the Arrow Keys causes the mouse cursor to continuously reset to the center of the screen.



This prevents normal mouse interaction while the key is being held.



**Steps to Reproduce:**

1. Launch the build v9.2.0r82677.
2. Navigate to any menu where the mouse cursor is visible.
3. Hold down W, A, S, D, or any Arrow Key.
4. Move the mouse.



**Expected Result:**

The mouse cursor should remain under the player's control regardless of keyboard input.



**Actual Result:**

The cursor repeatedly snaps back to the center of the screen while the key is held, making it difficult or impossible to use the mouse.



**Repro:**

100% during testing

**Severity:** 

Minor



**Attachments:**

Video file provided (CursorReset.mp4).



\------------------------------------------------------------------------------------------------------



##### **\[Localization] Combat Notifications Remain in English**



**Description:**

When the game language is set to Spanish, several combat notification pop-ups remain in English instead of being translated.



Observed examples include:



* "New Turn"
* "Extra Turn"
* "Mana Surge"



Additionally, when "Mana Surge" appears, the accompanying voice-over also says "Mana Surge" in English instead of Spanish.



**Steps to Reproduce:**

1. Launch the build v9.2.0r82677
2. Set the game language to Spanish.
3. Enter a battle.
4. Trigger the corresponding combat events.



**Expected Result:**

All combat notifications and their associated voice-over should match the selected language.



**Actual Result:**

The notifications and the "Mana Surge" voice-over remain in English.



**Repro:**

100% during testing.



**Severity:**

Minor



**Attachments:**

Screenshots and video file provided (ExtraSurge\_Popup.png),(NewTurn\_Popup.png),(ManaSurge\_Audio.mp4).



\------------------------------------------------------------------------------------------------------



##### **\[Localization] Tutorial Screen Contains Untranslated Text**



**Description:**

The tutorial selection screen is almost entirely translated into Spanish. However, the tagline displayed at the bottom remains in English.



Observed text:



* "The Greatest Journey Begins With Not One Step, But Three..."



This occurs across all three tutorial stages.



**Steps to Reproduce:**

1. Launch the build v9.2.0r82677
2. Set the language to Spanish.
3. Open the Tutorial menu.
4. View each of the three tutorial stages.



**Expected Result:**

All on-screen text should be displayed in Spanish.



**Actual Result:**

The bottom tagline remains in English while the rest of the interface is translated.



**Repro:**

100% during testing.



**Severity:**

Low



**Attachments:**

Screenshots provided (Tutorial\_Section1),(Tutorial\_Section2),(Tutorial\_Section3).



\------------------------------------------------------------------------------------------------------



##### **Overall Assessment**



No critical or game-breaking defects were encountered during testing. Gameplay was stable throughout the session. The issues found are primarily related to user input handling and incomplete localization, and they do not prevent progression, but they negatively affect usability and the consistency of the Spanish-language experience.

