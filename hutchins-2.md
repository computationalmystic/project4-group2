# Individual Design Document 

#Link to design document: https://docs.google.com/document/d/1Tf8zA3OJEhPIM-b1sFIK_R_tGjI8CKY0N1BN0v5B7Ws/edit

Activity: Submit/Resubmit File
- Create an option on the UI for the User to select the desired assignment.
- Call the Upload File class to allow user to upload file
- Create a php file that takes the submitted file and check whether this is the first submission or a resubmission. If the file is the first
submission, then the file will be submitted. If the file is a resubmission, then the current submission stored on server will be deleted and
the new submission will be saved on the database.
- Create a method that informs the user whether or not the file was submitted successfully. If the file was submitted successfully, then 
the system time at which it was submitted and date will be display with a green check sign. If the file was not submitted, then an error
message describing the problem will be displayed.w
    
Activity: Upload File
- Create a class that can be called that creates a form on the webpage.
- Create a form in which the user will select the file they wish to upload and a button for submission.
- Create a method that checks the file type and file size based on defined requirements.
- Create a method that informs the user whether or not the file was uploaded succesfully.

Acitivity: Create whole System
- Create web server that will be the foundation of the Submission System. Web Server needs to be reponsive and efficient for users.
- Create database that stores the assignments created by instrcutors for a their courses. The memory needs to be allocated dynamically so 
that each course only uses as much space as needed.
- Create levels of permissions for Students, Instructors, and TAs. Allow students to view and interact with assignments for the classes
that they are in. Allow TAs to over see the section of students that they are responsible for. Allow the teacher to oversee the students 
and TAs for their courses.
- Create a UI that is user friendly. Be explicit in what is on the screen so that somone can understand how to operate the system on their
first try. If user makes a mistake, a descriptive, but easily understandable response needs to be displayed on the screen. 
