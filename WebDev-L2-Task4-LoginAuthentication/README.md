# Login Authentication System

## Project Overview

This project is a simple **Login Authentication System** developed using HTML, CSS, and JavaScript.

The system allows a new user to register with a username and password, log in using the registered credentials, access a protected dashboard, and log out securely from the current session.

User credentials and login status are stored using the browser's **Local Storage**.

## Task Details

* **Track:** Web Development and Designing
* **Level:** Level 2
* **Task:** Task 4 – Login Authentication System
* **Project:** Login Authentication System

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Browser Local Storage

## Features

* User registration
* Username and password input
* Login authentication
* Empty field validation
* Invalid username/password validation
* Local Storage for storing user credentials
* Protected dashboard
* Personalized welcome message
* Logout functionality
* Login and registration navigation
* Simple and responsive user interface

## Project Structure

```text
WebDev-L2-Task4-LoginAuthentication/
│
├── index.html
├── register.html
├── dashboard.html
├── style.css
├── script.js
└── README.md
```

## How the System Works

### 1. Registration

A new user can open the **Register** page and enter a username and password.

After clicking the **Register** button:

* The system checks whether all fields are filled.
* The username and password are stored in the browser's Local Storage.
* A registration success message is displayed.
* The user is redirected to the Login page.

### 2. Login

The user enters the registered username and password.

The system compares the entered credentials with the credentials stored in Local Storage.

If the credentials are correct:

* Login status is stored.
* The user is redirected to the Dashboard.

If the credentials are incorrect:

* An "Invalid Username or Password" message is displayed.

### 3. Dashboard

After successful login, the user can access the Dashboard.

The dashboard displays a personalized welcome message using the registered username.

Users who are not logged in are automatically redirected back to the Login page.

### 4. Logout

Clicking the **Logout** button removes the login status from Local Storage and redirects the user to the Login page.

## Local Storage

This project uses browser Local Storage to store:

* `username`
* `password`
* `loggedIn` status

This approach is suitable for a frontend demonstration project. It is **not suitable for storing real user passwords in a production application**, where secure backend authentication and password hashing should be used.

## How to Run the Project

1. Download or clone the repository.
2. Open the `WebDev-L2-Task4-LoginAuthentication` folder.
3. Make sure all HTML, CSS, and JavaScript files are in the same folder.
4. Open `index.html` in a web browser.
5. Click **Register** to create an account.
6. Enter your username and password.
7. Return to the Login page and enter the registered credentials.
8. After successful login, the Dashboard will open.
9. Click **Logout** to end the login session.

## Learning Outcomes

Through this project, I practiced:

* Creating multiple HTML pages
* Designing forms using CSS
* Handling form input with JavaScript
* Implementing basic authentication logic
* Using Local Storage
* Managing login sessions
* Redirecting users between pages
* Protecting a dashboard from unauthorized access
* Creating interactive web applications

## Future Improvements

* Backend authentication
* Database integration
* Password hashing and encryption
* Forgot password functionality
* Email verification
* User profile management
* Secure session management

## Credits

This project was created as part of the **Oasis Infobyte Web Development and Designing Internship**.

## Author

**Shubhangi Sapkale**

**Web Development and Designing – Level 2 Task 4**
