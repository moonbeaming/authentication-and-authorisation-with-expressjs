# What is this application?

This application is built upon Stackup's quest [here](https://earn.stackup.dev/campaigns/authentication-and-authorisation-with-expressjs) and has added functionality to fulfil a new requirement: "This delete user functionality can be done after authentication".

Upon successfully completing the authentication process, any user can delete any user, even themselves, just by providing a username, making this an undoubtedly **bad idea**.

## Authentication vs Authorisation

| Authentication                                              | Authorisation                                                                                                         |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Verifying if users are really who they state they are       | Verifying if users are of a certain role in order to access to certain features                                       |
| Usually carried out first (i.e. login)                      | Usually carried out after authentication (i.e. checking for admin rights)                                             |
| All users must pass this in order to access the application | Some users will fail against checks for certain roles, and will still have access to the application's basic features |

Authentication is merely the first step in ensuring the security of all users' data. With the knowledge that the user is not passing off someone else's account as their own, the application can safely display the user's profile information, and allow them to edit said information. The next step, authorisation, is important for ensuring that higher application features, which would grant a user more control over other users' data, are only accessible by a select group of people. In this case, the ability to delete a users' account should only be accessible by an administrator, a person with the authority to control users' personal data.

If all users can simply access the delete user function after passing the authentication process anyone can have control over other users' account. This could easily lead to malicious behaviour, or accidents happening like deleting their own account. A user could even delete the administrator's account, who would then lose control over the entire database of users. While authentication is an important part of the verification process, something as important as deleting an account should require one to pass authorisation checks in order to have access to everyone's profiles.

Hence, the delete functionality being accessible to all users is a disastrous idea. Such a function should only be accessible to the admin, requiring a logged in user to rightfully pass authorisation.

# How to run the application

Before starting, please ensure you have the Live Server extension on VScode, or the equivalent for whichever IDE you use, as well as Node.js and npm.

### Backend Setup

1. Clone this repository and navigate to its folder in your terminal/prompt
2. Run `cd back-end`
3. Run `npm install`
4. Run `npm run`

### Frontend Setup

1. Navigate to web-front-end/pages/ and open index.html
2. - If you are using **VScode**: Click the 'Go Live' button at the bottom right of VScode
   - If you are using other IDEs: Please start your server from this file

Once you are done setting up the frontend and backend, if your IDE doesn't automatically open a browser tab for you, navigate to http://127.0.0.1:5500/web-front-end/pages/index.html to access the application. You will need to register for an account to get credentials for logging in. NOTE: the data will only be stored locally on your device, so no one actually has access to your registered account.
