# SFHR6 To Do List!!!

The link to my group's design document is listed below

[PDF version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/CS4320_Group13_Design_F19.pdf)

[Markdown version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/design.md)

## Here is a starting list of some of the classes that would be implemented in this system

#### For the Entity Relationship Diagram

        > Databases to hold the system's users, the assignments created, and submissions

        > Create stored procedure for notifying students when an assignment has been graded

        > Create stored procedure for notifying students and TAs when a change has been made to a course or assignment

        > Create a stored procedure for notifying students and TAs when an assignment has been created

        > Need a web server

        > UI for users to login and logout

        > UI for professors to add, delete, edit assignments and courses

        > UI for professors and TAs to search students

        > UI for admins to delete and add professors to the database

        > UI for admins to search users within the database

        > UI for TAs to grade assignments

        > UI for students to submit assignments

        > UI for students, professors, and TAs to view assignments

### 1. **User class**

###### _Class fields_

* firstName : string

* lastName : string

* email : string

* password : string

###### _Class methods_

* Login()
	> Create web server

	> Create database for users of the system

	> Set up workflow for 2 factor authentication using either a users phone number or email

	> Create a UI with text fields for password and username and a login button

* Logout()
	> Create logout button

### 2. **Student Class : User**

###### _Class fields_

* pawprint : string

* studentID : int

* courseList : List<Course>

* assignmentList : List<Assignment>

###### _Class methods_

* UploadFile()

### 3. **TeachingAssistant : User**

###### _Class fields_

* pawprint : string

* studentID : int

* courseList : List<Course>

* professorList : List<Professor>

###### _Class methods_

* ViewSubmission()

* GradeSubmission()

* SearchStudent()

* ListStudents()

* CollectSubmissions()

### 4. **Course**

###### _Class fields_

* courseCode : string

* courseName : string

* assignmentList List<Assignment>

* studentList : List<Student>

###### _Class methods(empty)_

### 5. **Assignment**

###### _Class fields_

* assignmentNumber : int

* assignmentName : string

* assignmentDetails : string

###### _Class methods_

* ViewAssignment()

### 6. **Professor : User**

###### _Class fields_

* teachingAssitantList : List<TeachingAssistant>

* courseList : List<Course>

###### _Class methods_

* ViewTAs()

* RemoveTA()

* AddTA()

* CreateAssignment()
	> Set up web server

	> Set up database for holding assignments

	> Add restrictions regarding who can and can't add assignments

	> Create subsystem for creating a new assignment

	> Define a stored procedure to notify students and TAs when a new assignment has been created

	> Set up UI for adding a new assignment; need elements where the assignment name, details, accepted file types, etc. can be properly defined

* DeleteAssignment()
	> Add restrictions regarding who can and can't remove assignments

	> Create a stored procedure to notify students and TAs when an assignment has been removed

* EditAssignment()
	> Add restrictions regarding who and who can't edit an assignment

	> Create an edit button that is present for users with editing capablities
	
	> Create a stored procedure that will notify students and TAs when a change to an assignment has been made

* EditCourse()

* AddCourse()

* RemoveCourse()

* ViewCourse()

* ListCourses()

* RemoveStudent()

* AddStudent()

* SearchStudent()

* ListStudents()

### 7. **Submission**

###### _Class fields_

* submissionID : int

* student : User

* dateTime : Date

* comments : string

###### _Class Methods(empty)_

### 8. **Administrator extends User**

###### _Class fields_

* adminID : int

###### _Class methods_

* RemoveProfessor()

* AddProfessor()

* SearchProfessor()

* ListProfessors()

