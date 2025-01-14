# Ecommerce Add to Cart Functionality - By using Context API, useContext and useReducer Hooks and React-Router-DOM

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

---

## Overview

I build the Add to Cart and Remove from Cart functionality using Context API, useContext and useReducer Hooks. It has two pages: One is the Hokme Page having all products listing with beautiful cards build by me, Second Page is Cart Page where All cart added items will be list.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/AbuHuraira2129/ecommerce_cart_app_context_api
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce_cart_app_context_api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Ensure that `react-router-dom` is installed:

   ```bash
   npm install react-router-dom
   ```

2. Ensure that Material UI Icons are also Installed:

   ```bash
   npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   ```

3. Ensure the component is rendered inside a `Router` context. For example:

   ```javascript
   import { BrowserRouter as Router } from "react-router-dom";
   import App from "./App";

   function Root() {
     return (
       <Router>
         <App />
       </Router>
     );
   }

   export default Root;
   ```

### Key Functionality

- **State Management with `useReducer`:**
  - Maintains a global state for `products` and `cartItems`.
  - Actions include adding and removing items from the cart.
- **Add to Cart:**
  - Adds a product to the cart with an initial quantity of 1.
  - Updates the global state with the new cart item.
- **Remove from Cart:**
  - Removes a product from the cart based on its ID.
  - Filters out the product from the global state.
- **Global Context with `ProductContext`:**
  - Provides `products`, `cartItems`, and handler functions (`AddToCartButtonClick` and `RemoveFromCartButtonClick`) to child components.
  - Ensures shared state and functions are accessible throughout the component tree.
- **Console Logs for Debugging:**
  - Logs the current state of cart items for easy debugging during development.
- **`useNavigate` Hook**: Used to programmatically navigate through the app's history stack.
- **`navigate(-1)`**: Moves the user back by one step in the browser's history.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router DOM**: Routing library for managing navigation in React apps.

---

Happy coding! 🎉
Huraira
