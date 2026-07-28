### **BUG-004: Player Can Dig Through Rock and Enter Locked Area**



##### **Description**



Near the gated sewer area, a section of the rock surrounding the gate does not properly prevent the player from digging through it. By using the digging mechanic at this location, the player can pass through the rock and enter the locked area.



##### **Steps to Reproduce**



1. Launch build 24305160.
2. Reach the gated sewer area.
3. Hold the Dig input.
4. Move towards the rock on the left side of the gate.
5. Continue moving towards the inside of the sewer.
6. Release the Dig input.



##### **Expected Result**



The player should not be able to dig through the rock or enter the locked area.



##### **Actual Result**



The player can dig through the rock and emerge inside the locked area.



##### **Repro Rate**



5/5 attempts



##### **Severity**



Medium



##### **Attachments**



* Screenshot: \[BUG-004-RockCollider.png](../Evidence/BUG-004-RockCollider.png)
* Video: \[BUG-004-MissingColliderRock.mp4](../Evidence/BUG-004-MissingColliderRock.mp4)

