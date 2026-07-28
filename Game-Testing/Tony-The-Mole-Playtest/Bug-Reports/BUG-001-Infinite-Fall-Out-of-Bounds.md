\# BUG-001: Player Can Fall Out of Bounds and Become Stuck in Infinite Fall



\## Description



In the first level, near the rock section of the tutorial, the player can use the digging mechanic to emerge inside a rock. Moving forward from this position causes the player to clip through the environment and fall out of bounds indefinitely.



Reloading the affected save does not recover the player's position, as the player continues falling after loading the save. This prevents the player from continuing the game using that save file.



\## Steps to Reproduce



1\. Launch build 24305160.

2\. Create a new game save.

3\. Reach the tutorial section with the rocks.

4\. Use the Dig feature to dig and emerge inside the rock.

5\. Move forward towards the wall.



\## Expected Result



The player should remain within the playable area and should not be able to move through the rock collision or fall out of bounds.



\## Actual Result



The player clips through the rock, falls out of bounds indefinitely, and remains stuck in the falling state after reloading the affected save.



\## Repro Rate



2/5 attempts



\## Severity



Critical



\## Attachments



\* Video: \[BUG-001-OutOfMap.mp4](../Evidence/BUG-001-OutOfMap.mp4)



