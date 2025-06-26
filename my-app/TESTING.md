# Testing

All webpage testing was done on a Windows Laptop (Google Chrome, Microsoft Edge), a Samsung Tablet (Google Chrome and Samsung Internet) and a Samsung Phone (Google Chrome and Samsung Internet). This was to make sure all features worked on different operating systems and screen sizes.

The backend testing was done on a Windows laptop to make sure the database was

## Web Page Testing

### Nav Bar

**Nav bar links**

Expected - each link goes to the correct page (not including sign out)

Test - check the navbar links go to the correct pages

Result - the feature works as expected and displays the correct pages

**Nav bar links when signed in/signed out**

Expected - when the user is signed out, the nav bar should display Register and Login; when the user is signed in, the nav bar should display Logout and New Post.

Test - check the navbar links are correct when signed in and signed out

Result - the feature works as expected and displays the correct links when signed in and signed out

**Nav bar dropdown**

Expected - on smaller screens, a dropdown button is displayed instead of the full menu. When the user presses the dropdown button, the nav bar displays a drop-down menu. It should disappear when a link is clicked or the page is clicked.

Test - by viewing on a smaller screen and clicking the dropdown button, clicking links and the page when open

Result - result - the feature works as expected, the correct links show, and the menu closes with the right actions

### Post Links

Expected - when the users click a post's card, they would be presented with the correct post.

Test - clicked each post's card

Result - the feature worked normally, and each post was displayed correctly.

### Register Page

**Register a new user**

Expected - when the user fills out the registration form correctly, the user creates a new account, and is directed to Log In.

Test - fill the form correctly.

Result - the feature worked normally, and a new account was created, and the user was directed to Log in.

**Repeated Username**

Expected - an error message to be shown when a user tries to create an account with an existing username, and a new user is not created.

Test - fill out the register for with an existing username

Result - the feature works correctly, and an error message was shown when a username was repeated.

**Incorrectly repeated password**

Expected - an error message to be shown when a user tries to create an account but the password fields do not match, and a new user is not created.

Test - fill out the register form with a correct username but mismatching passwords

Result - the feature works correctly, and an error message is shown when the passwords do not match.

**No input in fields**

Expected - when a user tries to register an account with blank fields, an error message should show, and an account shouldn't be created.

Test - submit the form without fields filled in

Result - the form showed the correct error messages and did not allow a new account to be created.

### Log In

**Log In**

Expected - when the correct username and password pair is used, that user is logged in.

Test - use the correct username and password, and check if the user is logged in

Result - the correct user was logged in.

**Incorrect username and password**

Expected - when an incorrect username and/or password is used, the user is not logged in.

Test - attempt to log in with an incorrect username and/or password.

Result - the user was not logged in, and an error message was shown

**Blank Fields**

Expected - when a field is left blank, an error message is shown, and the user is not logged in.

Test - leave each field blank and attempt to log in

Result- the correct error message was shown, and the user was not logged in.

### Log Out

**Log out button**

Expected - when clicked, the user should be logged out.

Test - click the logout button.

Result - the user was logged out#

### New Post

**Creating a new post**

Expected - when logged in, a user should be able to create a new post when the form is filled correctly.

Test - fill in the new post form correctly and post it

Result - a new post was created.

**Leaving fields black**

Expected - a new post is not created when there a blank fields.

Test - attempt to create a new post with black fields

Result - a new post was not created.

### Editing and deleting posts

**Edit and delete buttons**

Expected - the edit and delete buttons should only show if a user is logged in **and** viewing their post.

Test - check:

- The edit and delete buttons show when logged in and the user is viewing their post
- The edit and delete buttons do not show when logged in and viewing another user's post
- The edit and delete buttons do not show when not logged in and viewing a post

Result - The edit and delete buttons show only when the correct user is logged in and viewing their post.

**Editing a post**

Expected - when editing a post, the fields should be updated.

Test - edit an already existing post and check that it has changed when submitted.

Result - when submitted, the post had the correct changes.

### Comments

**Comment form**

Expected - the comment form only shows when a user is logged in

Test - check:

- The comment form loads when a user is logged in
- The comment form does not show when a user is not logged in

Result - the comment form only shows when a user is logged in.

**Posting comments**

Expected -  a comment is posted when the comment form is filled in and shows under the correct post.

Test - post a comment under a post and check that the comment is only under that post.

Result - the comment was posted under the correct post

### Contact

**Submitting a contact request**

Expected - when a user fills the form correctly, the site owner can see the request.

Test - submit a contact request and check the database for any contact requests.

Result - the request was submitted to the correct place

## Back End testing

This testing was done before the front end was built, and was to test that everything was working before submitting requests to the database from the frontend.

### Register

**Register a new user**

Expected - when the user fills out the registration form correctly, the user creates a new account.

Test - fill the form correctly.

Result - the feature worked normally, and a new account was created.

**Repeated Username**

Expected - when a user tries to create an account with an existing username, a new user is not created.

Test - fill out the register for with an existing username

Result - the feature works correctly, and a new user was not created.

**Incorrectly repeated password**

Expected - when a user tries to create an account but the password fields do not match, a new user is not created.

Test - fill out the register form with a correct username but mismatching passwords

Result - the feature works correctly, and a new user was not created.

**No input in fields**

Expected - when a user tries to register an account with blank fields, an account shouldn't be created.

Test - submit the form without fields filled in

Result - the form did not allow a new account to be created.

## Log In

**Log In**

Expected - when the correct username and password pair is used, that user is logged in.

Test - use the correct username and password, and check if the user is logged in

Result - the correct user was logged in.

**Incorrect username and password**

Expected - when an incorrect username and/or password is used, the user is not logged in.

Test - attempt to log in with an incorrect username and/or password.

Result - the user was not logged in, and an error message was shown

### Log Out

**Log out**

Expected - when clicked, the user should be logged out.

Test - click the logout button.

Result - the user was logged out

### New Post

**Creating a new post**

Expected - when logged in, a user should be able to create a new post when the form is filled correctly.

Test - fill in the new post form correctly and post it

Result - a new post was created.

**Leaving fields black**

Expected - a new post is not created when there a blank fields.

Test - attempt to create a new post with black fields

Result - a new post was not created.

### Editing and deleting posts

**Edit and delete buttons**

Expected - the edit and delete buttons should only show when a user is logged in **and** viewing their post.

Test - check:

- The edit and delete buttons show when logged in and the user is viewing their post
- The edit and delete buttons do not show when logged in and viewing another user's post
- The edit and delete buttons do not show when not logged in and viewing a post

Result - The edit and delete buttons show only when the correct user is logged in, viewing their post.

**Editing a post**

Expected - when editing a post, the fields should be updated.

Test - edit an already existing post and check that it has changed when submitted.

Result - when submitted, the post had the correct changes.

### Comments

**Comment form**

Expected - the comment form only shows when a user is logged in

Test - check:

- The comment form loads when a user is logged in
- The comment form does not show when a user is not logged in

Result - the comment form only shows when a user is logged in.

**Posting comments**

Expected -  a comment is posted when the comment form is filled in and is linked to the correct post.

Test - post a comment linked to a post.

Result - the comment was linked to the correct.

### Contact

**Submitting a contact request**

Expected - when a contact form is submitted, it should be uploaded to the database.

Test - submit a contact request and check the database for any contact requests.

Result - the request was submitted and uploaded
