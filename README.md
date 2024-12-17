Features
User authentication: Login with OTP.
Create Quotes: Users can create new quotes with optional image upload.
View Quotes: View a list of quotes along with images.
Pagination: Navigate through quotes in a paginated manner.
Technologies Used
React: JavaScript library for building the user interface.
React Router: For handling page navigation.
Tailwind CSS: Utility-first CSS framework for styling.
Fetch API: For making HTTP requests to the backend.
Local Storage: For storing authentication token.

Step-by-Step Guide
1. Clone the Repository
Start by cloning the repository to your local machine.

git clone <git-URL>
cd crafto-frontend
2. Install Dependencies
Before you can run the app, you need to install the necessary dependencies. Run the following command:

npm install
This will install all the dependencies specified in package.json.

3. Dependencies Used
Here is a list of dependencies used in this project:

react: The core library used for building the UI.
react-dom: For rendering React components into the DOM.
react-router-dom: For handling routing between different pages (Login, Quote List, and Create Quote).
tailwindcss: A utility-first CSS framework used for styling the app.
autoprefixer: Automatically adds vendor prefixes to CSS for better compatibility.
postcss: CSS tool for transforming styles with JavaScript plugins.
gh-pages: For deploying the React app to GitHub Pages (optional, if required for deployment).
4. Start the Development Server
Once you have installed all the dependencies, you can start the development server. Run:

npm start
This will start the React app on http://localhost:3000. You can now open this URL in your browser to see the app in action.

5. App Structure
The basic structure of the app is as follows:

Login Page (LoginPage.js): Allows users to log in using their username and OTP.
Quote List Page (QuoteListPage.js): Displays a list of quotes with images, including pagination for navigation.
Create Quote Page (QuoteCreationPage.js): Allows users to create new quotes with optional image upload.
6. Creating a Quote
Go to the Create Quote page where you can enter the quote text and upload an image (optional).
Once the quote is created, it will be posted to the backend and displayed on the Quote List page.
7. Pagination
The quotes are displayed in a paginated manner. You can navigate between pages using the Next and Previous buttons.

8. Authentication
The app uses localStorage to save the authentication token once the user logs in. This token is sent in the headers of API requests to the backend.

Running the App
1. Login
To login, input your username and OTP.
Upon successful login, you will be redirected to the Quote List page.
2. Create a Quote
After login, click on the Create Quote button to submit a new quote.
Enter your quote text and optionally upload an image.
3. View Quotes
On the Quote List page, you will see all the quotes displayed with images.
Quotes are displayed with pagination to navigate between multiple pages.
