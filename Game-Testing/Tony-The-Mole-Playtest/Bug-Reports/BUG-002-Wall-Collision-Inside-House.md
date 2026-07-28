### **BUG-002: Player Can Clip Through Wall Inside House**





##### **Description**



After completing the first level and spawning inside the house, the player can clip through the wall in the top-right area near the window and gain access to an unintended area of the map.



##### **Steps to Reproduce**



1. Launch build 24305160.
2. Complete the first level.
3. Inside the house, face the window.
4. Jump onto the bed.
5. Jump while moving forward towards the top-right corner of the window.



##### **Expected Result**



The wall should prevent the player from leaving the house and accessing unintended areas of the map.



##### **Actual Result**



The player clips through the wall and gains access to an unintended area of the map.



##### **Repro Rate**



5/5 attempts



##### **Severity**



Medium



##### **Attachments**



* Screenshot: \[BUG-002-HouseCollider.png](../Evidence/BUG-002-HouseCollider.png)
* Video: \[BUG-002-MissingColliderHouse.mp4](../Evidence/BUG-002-MissingColliderHouse.mp4)

