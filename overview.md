#Overview Document for Group 2

Core Objects
- ER Diagram
  -Front End
    - UI for users to login and logout
    - UI for professors to add, delete, edit assignments and courses
    - UI for professors and TAs to search students
    - UI for admins to delete and add professors to the database
    - UI for admins to search users within the database
    - UI for TAs to grade assignments
    - UI for students to submit assignments
    - UI for students, professors, and TAs to view assignments
  -Back End
    - Databases to hold the system's users, the assignments created, and submissions.
    - Create web server that will be the foundation of the Submission System. Web Server needs to be reponsive and efficient for users.
    - Create php scripts for each UI element that takes user actions and display desired results.
    - Create php scripts for Tas and Instructors to make administrative changes for students.
    - Create levels of permissions for Students, Instructors, and TAs. Allow students to view and interact with assignments for the classes
    that they are in. Allow TAs to over see the section of students that they are responsible for. Allow the teacher to oversee the students
    and TAs for their courses.
- Login 
  - Create method that displays a form on the user's screen.
  - Create php script that takes the username and password from the form and check values against database. If the username exisits, the 
  password should be checked to verify that it matches whats stored in database. If the username does not exist or the password is incorrect,
  an error message stating that the username does not exist or password is incoreect should be displayed for the user. If both fields are 
  correct, then the user's home page will be sent and displayed on their screen.

Description of Next Steps:
- If we where building this project as a team, the next step would be to formulate the team structure. We would need to assign roles and 
determine an overall leader who can keep the team on track. The group would then determine the parts of the system they would design based
on their coding assistance. We would set goals and shcedule out when we expect parts of the systems to be completed. Once these are completed,
we would meet after a set amount of time to determine everyone's progress.
