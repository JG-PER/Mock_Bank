# Mock-Bank Project: Avarice Financial Portal

**Author:** James Gengerke

## Project Overview

An example of a fake or mock banking website; Avarice is a client-side web application designed to simulate a basic financial and investment platform and is loosly based on and influenced by real banking software. Users can create a mock account (login/sign up), view their account details, simulate transferring funds, "invest" their funds (which are then humorously depicted as lost), view live market data, and sign up for a mock newsletter.

The application primarily uses HTML, CSS, and JavaScript, leveraging the browser's `localStorage` to persist user session data and account details. Financial data and news are displayed using embedded widgets from TradingView.

## File Structure

The project consists of the following main files:

* **HTML Files (`.html`):**
    * `login.html`: The entry point of the application. Handles user login and signup.
    * `index.html`: The main accounts dashboard displayed after successful login. Shows user information, total funds, and FAQs.
    * `transfer.html`: Allows users to simulate transferring funds into their account.
    * `investments.html`: Provides a section for simulated investments and general investment tips.
    * `stocks.html`: Displays various stock market data, indices, futures, bonds, and forex information using TradingView widgets.
    * `newsletter.html`: Features a newsletter signup form and a news feed widget.
* **Styling (`.css`):**
    * `style.css`: Contains all the CSS rules for styling the appearance of all HTML pages, including layout, fonts, and colors.
* **Client-Side Scripting (`.js`):**
    * `script.js`: Includes all the JavaScript functions for handling user interactions, login/logout logic, data storage in `localStorage`, account number generation, fund transfers, and the investment simulation.
* **Image Assets:**
    * `logo.jpg` (provided, HTML references `logo.png`): Site logo/favicon.
    * `long_text.png`: A branding image, likely displaying "AVARICE LIQUIDITY".
    * `short_text.png` (referenced in HTML, not provided): Another branding image, likely displaying "AVARICE".
    * Various external images are linked within the HTML for filler content (e.g., piggy bank on `index.html`, transfer illustration on `transfer.html`) and the newsletter image slideshow.

## Key Features

* **User Authentication (Simulated):** Users can "log in" or "sign up" using a simple form. Credentials (username, password) and session status (agreement to terms) are stored in the browser's `localStorage`.
* **Account Dashboard (`index.html`):** Displays the logged-in user's username, a randomly generated account number, and simulated total funds. Also includes a section for FAQs.
* **Fund Transfer Simulation (`transfer.html`):** Users can select mock accounts and simulate transferring funds, which updates the `totalFunds` in `localStorage`.
* **Investment Simulation (`investments.html`):** A feature where users can authorize Avarice to "invest" a portion of their funds. The script is designed to humorously show this money as being lost in various mock stock investments, with results appended to the page.
* **Market Data Display (`stocks.html`):** Integrates various TradingView widgets to show real-time market information, including primary indices, futures, bonds, forex, and stock screeners.
* **News Section (`newsletter.html`):** Includes a newsletter signup form (which attempts to send data via `mailto` to a mock email address) and a TradingView news timeline widget. Features an animated image slideshow.
* **Dynamic Content:** JavaScript is used extensively to dynamically display user data from `localStorage`, generate account numbers, provide random investment tips, and manage the image slideshow animation.
* **Logout Functionality:** A "Logout" link is present on most pages, which calls a JavaScript function to clear relevant user data from `localStorage` and typically redirects to `login.html`.
* **Protected Pages:** Most pages include JavaScript checks to see if a user is logged in (by verifying `localStorage` items like `storeUsername` or `storeExists`). If not authenticated, the user is redirected to `login.html`.

## Technologies Used

* HTML5
* CSS3
* JavaScript (including DOM manipulation, event handling, `localStorage` API)
* Browser `localStorage` API (for client-side data persistence)
* TradingView Widgets (for external financial data and news feeds)

## Setup and Usage

1.  **Download Files:** Ensure all the provided files (`.html`, `.css`, `.js`, and image assets like `logo.jpg` and `long_text.png`) are in the same directory.
    * **Image Naming Note:** The HTML files reference `logo.png` and `short_text.png`. You may need to rename `logo.jpg` to `logo.png` or update the HTML. You will also need to provide `short_text.png` if it's a critical branding element.
2.  **Open in Browser:** Open the `login.html` file in a modern web browser (e.g., Chrome, Firefox, Edge, Safari).
3.  **Login/Sign Up:**
    * Enter any desired username and password on the `login.html` page.
    * Check the "I agree to the Terms and Conditions applicable to my account" box.
    * Click the "Login or Sign Up" button. This will store your details in `localStorage` and redirect you to the `index.html` (Accounts) page.
4.  **Navigate:** Use the navigation bar at the top of the pages to explore different sections of the website (Accounts, Transfer In, Investments, Markets, News).
5.  **Interact:** Try transferring funds, "investing" money, and viewing the market data.

## Notes and Disclaimers

* **Simulation Only:** This project is for demonstration or educational purposes. All financial transactions, account balances, and investments are simulated and not real.
* **`localStorage` Security:** User credentials and data are stored directly in the browser's `localStorage`. This method is **not secure** for handling real sensitive information in a production environment.
* **Investment Feature:** The "invest" functionality in `investments.html` and `script.js` is intentionally designed to simulate losing the invested money for illustrative or humorous effect, as noted in the `script.js` comments ("this money will all be lost cynically").
* **TradingView Widgets:** The market data and news feeds rely on external widgets from TradingView. An active internet connection is required for these to load correctly. Adblockers might interfere with the display of these widgets, as noted on the `stocks.html` and `newsletter.html` pages.
* **Mailto Form:** The newsletter signup form uses a `mailto:` action, which will attempt to open the user's default email client. No server-side processing is implemented for this form.
* **Author:** The core HTML, CSS, and JavaScript were created by James Gengerke, with acknowledgments for external resources (like TradingView and some image sources) noted within the code comments or on the pages themselves.