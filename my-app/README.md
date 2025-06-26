# One More Page

<br>

One More Page is a book review site where users can share their thoughts on books they have read.

Live site: https://one-more-page-c2e67fd7e2bd.herokuapp.com/

Backend repository: https://github.com/Jamie-S2000/book_reviews_api

## Contents

- [Planning and Development](#planning-and-development)
- [Deployment](#deployment)
- [Languages and Frameworks](#languages-and-frameworks)
- [Credits](#credits)

## Planning and Development

### Site Objectives

- Allow users to write and display review posts
- Allow users to edit and delete posts
- Allow users to comment on posts
- Allow users to register, log in and log out
- Allow users to contact the site owners if they have any queries
- Give users CRUD usability

### Target audience

The target audience is active book readers and people who want to get into books.

### User Stories

- As a site user, I'd like to view all posts
- As a site user, I'd like to view individual posts
- As a site user, I'd like to comment on posts
- As a site user, I'd like to create, read, edit and delete posts
- As a site user, I'd like to have easy navigation of the site
- As a site user, I'd like to register for an account on the site
- As a site user, I'd like to contact the site admin if I have any questions

### Theming

The site is made to recreate the colour and text styles that would commonly be seen in books.
The secondary dark green was chosen to complement this.

### Features

#### NavBar

The navbar appears across the entire site, allowing users to navigate across the website.
When logged out, it shows:

- Home
- Log In
- Register
- Contact

When logged out, it shows:

- Home
- Log Out
- New Post
- Contact

It also features a drop-down menu for smaller screens, with a click outside toggle for better responsiveness.

#### Registration

The registration form allows users to register for an account on the site. It requires:

- Username
- Password
- Password Confirmation

If it detects an error, e.g. a blank field or non-matching password, it will show the user an error message informing them of the issue.
The Registration form also has a link to the Log In page if a user already has an account.

#### Log In

The login form allows users to log into their account. It requires:

- Username
- Password

If it detects an error, e.g. a blank field or a mismatched username and password, it will show the user an error message informing them of the issue.
The Log In also has a link to the Registration page if a user doesn't have an account.

#### Sign out

The sign-out button allows users to sign out of their account when they are finished on the site.

#### Post List and Cards

The site features a post list with infinite scroll functionality. The posts are represented as cards and show:

- Book title
- Book Author
- Quote

#### Posts

The post page shows the user the desired post. It shows:

- Title
- Author
- Quote
- Review content
- The user author

If a user is logged in, they will be able to edit and delete any posts they have created.

#### New Post

The New Post page allows users to post a new review to the site. It requires:

- Book Title
- Author
- Quote
- Review content

It will show an error message if any fields are not filled in.

#### Comments

Comments are shown under their respective posts.

#### Comment Form

When a user is logged in, under a post, they will have a comment form where they can leave a comment.

#### Contact

The contact form allows users to contact the site's owner with any queries they may have. It is sent to the site backend, where the owner can view their questions. A user must be logged in to use this.

### Testing

The project has been through extensive testing, which is documented here:

[Testing](./TESTING.md)

#### Known bugs

There are currently no known bugs.

## Deployment

### Database

The database host is the CodeInstitute SQL database provided

### Heroku

- Click "New" then "Create new app".
- Create a unique app name, select the correct region and create app.
- This will direct you to the deploy tab.
- Navigate to settings.
- Go to the Config Vars section, click add and add with:
- config var named 'SECRET_KEY' and create a secret key for this
- config var names 'DATABASE_URL', this will use the CodeInstitute SQL database URL
- Once this is done, navigate to deploy.
- Select GitHub as your deployment method.
- Search for the repository and select it to connect.
- Select the deployment type you would like to use and deploy.

### env.py

In the project, create an env.py file in the root directory.
The CodeInstitute SQL database URL should be used as the DATABASE_URL
A secret key should be pasted as the SECRET_KEY value; this does not need to be the same as the Heroku one.

### New Database

A new database host has been deployed on the project. The steps taken to make this change were:

- A new env.py file was created within the project with the new database URL
- The categories for the database were migrated over using:
  ```
  python3 manage.py migrate
  ```
  In the terminal
- Heroku's config vars were updated to use the new database URL

### settings.py

In settings.py, add:

```
from pathlib import Path
import os
import dj_database_url
if os.path.isfile('env.py'):
    import env
```

### Final Steps

- Link the file to the templates directory in Heroku, place it under BASE_DIR:

```
BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
```

- Change the template directory to TEMPLATES_DIR and place it in the templates array:

```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

- Add heroku to the ALLOWED_HOSTS:

```
ALLOWED_HOSTS ["project_name.herokuapp.com", "localhost"]
```

- Create static and template files at the top level of the directory

- Create a Procfile and add:

```
web: gunicorn project_name.wsgi
```

### Final Heroku deployment

- **Make sure debug is set to 'False'**
- click deploy
- deploy the branch

### Front end

- Click "New" then "Create new app".
- Create a unique app name, select the correct region and create app.
- This will direct you to the deploy tab.
- Navigate to settings.
- Select GitHub as your deployment method.
- Search for the repository and select it to connect.
- Select the deployment type you would like to use and deploy.

## Languages and frameworks
The languages and frameworks used are:
- HTML
- CSS
- Python
- Django
- Django-rest-framework
- Bootstrap
- React
