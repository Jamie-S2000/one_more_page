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
- Allow users to contact the site owners if they have any querys
- Give users CRUD usability

### Target audience

The target audience is active book readers and people who want to get into books.

### User Stories

- As a site user, I'd like to view all posts
- As a site user, I'd like to view individual posts
- As a site user, I'd like to comment on posts
- As a site user, I'd like to create, read, edit and delete posts
- As a site user, I'd like to have easy navigation of the site
- As a site user, I'd like to register an account to the site
- As a site user, I'd like to conact the site admin if i had any questions

### Themeing

The site is made to recreate the colour and text styles that would commonly be seen in books.
The secondary dark green was chosen to compliment this.

### Features

#### NavBar

The navbar shows across the entire site allowing users to navigate across the website.
When logged out it shows:

- Home
- Log In
- Register
- Contact

When logged out it shows:

- Home
- Log Out
- New Post
- Contact

It also features a dropdwon menu for smaller screens with a click outside toggle for better responsivness

#### Registration

The registration form allows users to register an account to the site. It requires:

- Username
- Password
- Password Confirmation

If it detects an error e.g. a blank field or non matching password, it will show the user an error message informing them of the issue.
The Registration from also has a link to the Log In page for if a user already has an account.

#### Log In

The Log in form allows users to log into their account. It requires:

- Username
- Password

If it detects an error e.g. a blank field or a mismatched username and password, it will show the user an error message informing them of the issue.
The Log In from also has a link to the Registration page for if a user doesn't have an account.

#### Sign out

The sign out button allows users to sign out of their account when they are finished on the site.

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

If a user is logged in they will be able to edit and delete any posts they have created.

#### New Post

The New Post page aallows users to post a new Reviw to the site. It requires:

- Book Title
- Author
- Quote
- Review content

It will show an error message if any fields are not filled in.

#### Comments

Comments are shown under their respective posts.

#### Comment Form

When a user is logged in, under a post they will have a comment form where they can leave a comment.

#### Contact

The contact form allows users to contact the sites owner with any querys they may have. It is sent to the site backend where the owner can view their questions. A user must be logged in to use this.

### Testing

TBC

#### Known bugs

TBC

