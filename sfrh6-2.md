# SFHR6 To Do List!!!

The link to my group's design document is listed below

[PDF version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/CS4320_Group13_Design_F19.pdf)

[Markdown version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/design.md)

## Here is a starting list of some of the classes that would be implemented in this system

### 1. **User class**

##### _Class fields_(add field types)

* firstName : string

* lastName : string

* email : string

* password : strng

##### _Class methods_

* Login(string username, stirng password)
	> Create web server
	> Create database for users of the system
	> Set up workflow for 2 factor authentication using either a users phone number or email
	> Create a UI with text fields for password and username and a login button

* Logout()

### 2. **Student Class extends User**

###### _Class fields_(add field types)

* pawprint

* studentID

* courseList

* assignmentList

###### _Class methods_

* UploadFile()

### 3. **TeachingAssistant extends User**

##### _Class fields_(add field types)

* pawprint

* studentID

* courseList

* professorList

##### _Class methods_

* ViewSubmission()

* GradeSubmission()

* SearchStudent()

* ListStudents()

* CollectSubmissions()

### 4. **Course**

##### _Class fields_(add field types)

* courseCode

* courseName

* assignmentList

* studentList

##### _Class methods(empty)_

### 5. **Assignment**

##### _Class fields_(add field types)

* assignmentNumber

* assignmentName

* assignmentDetails

##### _Class methods_

* ViewAssignment()

### 6. **Professor : User**

##### _Class fields_(add field types)

* teachingAssitantList

* courseList

##### _Class methods_

* ViewTAs()

* RemoveTA()

* AddTA()

* CreateAssignment
	> Set up web server
	> Set up database for holding assignments
	> Add restrictions to server regarding who can and can't edit/add/remove assignments
	> Create workflow for removing an assignment
	> Add alert when removing assignment to confirm this action is the proposed action
	> Create UI for editing an exisiting assignment; this includes making edit and delete buttons for an assignment
	> Define stored procedures for when an assignment is removed or updated so students and TAs are notified and the changes show in their list of assignments
	> Create subsystem for creating a new assignment
	> Define a stored procedure to notify students and TAs when a new assignment has been created
	> Set up UI for adding a new assignment, where the assignment name, details, accepted file types, etc. are properly defined

* DeleteAssignment

* EditAssignment

* EditCourse

* AddCourse

* RemoveCourse

* ViewCourse

* ListCourses

* RemoveStudent

* AddStudent

* SearchStudent

* ListStudents

### 7. **Submission**

##### _Class fields_(add field types)

* submissionID

* pawprint

* dateTime

* comments

##### _Class Methods(empty)_

### 8. **Administrator extends User**

##### _Class fields_(add field types)

* adminID

##### _Class methods_

* RemoveProfessor

* AddProfessor

* SearchProfessor

* ListProfessors

