# SFHR6 To Do List!!!

The link to my group's design document is listed below

[PDF version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/CS4320_Group13_Design_F19.pdf)

[Markdown version](https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/design.md)

## Here is a starting list of some of the classes that would be implemented in this system

### 1. **User class**

##### _Class fields_(add field types)

* firstName

* lastName

* email

* password

##### _Class methods_

* Login

* Logout

### 2. **Student Class extends User**

###### _Class fields_(add field types)

* pawprint

* studentID

* courseList

* assignmentList

###### _Class methods_

* UploadFile

### 3. **TeachingAssistant extends User**

##### _Class fields_(add field types)

* pawprint

* studentID

* courseList

* professorList

##### _Class methods_

* ViewSubmission

* GradeSubmission

* SearchStudent

* ListStudents

* CollectSubmissions

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

* ViewAssignment

### 6. **Professor extends User**

##### _Class fields_(add field types)

* teachingAssitantList

* courseList

##### _Class methods_

* ViewTAs

* RemoveTA

* AddTA

* CreateAssignment

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

