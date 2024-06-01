Sure, here is the updated README file considering the new features added in version 2.

---

# E-Commerce Application with React and Vite

This is an e-commerce application built with React and Vite. The application allows users to browse products, view product details, add items to a shopping cart, and proceed to checkout. The products are fetched from the [Fake Store API](https://fakestoreapi.com/docs).

## Features

- Display a list of products with pagination.
- View detailed information about a product.
- Add products to the shopping cart.
- Adjust the quantity of items in the cart.
- Remove items from the cart.
- Proceed to checkout and view an order confirmation.
- Responsive design.
- Search functionality to find products based on the title.
- User authentication with Firebase (sign in, sign up, log out).

## Setup and Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a Firebase project and configure it. Add your Firebase configuration to a `firebase-config.js` file in the `src` directory.

   **src/firebase-config.js:**
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   export { auth };
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Project Structure

```
ecommerce-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ShoppingCart.jsx
│   │   ├── OrderConfirmation.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   ├── api/
│   │   └── api.js
│   ├── firebase-config.js
│   ├── styles.css
├── index.html
└── package.json
```

## Implementation Details

### Product List

The product list is displayed in a grid layout with each product showing an image, title, category, and price. The products are fetched from the Fake Store API and can be filtered by category or searched by title.

### Product Details

The product details page shows the product image, title, description, and price. Users can add the product to the cart or navigate to the next/previous product.

### Shopping Cart

The shopping cart allows users to adjust the quantity of items, remove items, and proceed to checkout.

### Order Confirmation

A simple page showing a summary of the purchase.

### Search Functionality

The shop page includes a search box that filters products based on the text in their titles.

### User Authentication

Users can sign in, sign up, and log out using Firebase Authentication. The authenticated user's state is managed using a context.

**Sign In:**
- Users can sign in with their email and password.

**Sign Up:**
- Users can create a new account with their email and password.

**Log Out:**
- Signed-in users can log out, and their name will be displayed in the navbar when authenticated.

### Context for User and Cart Management

The `UserContext` manages the authenticated user's state, while the `CartContext` manages the shopping cart state.

### Routing Setup

The application uses React Router for routing between different pages such as Home, Shop, Product Details, Cart, Sign In, Sign Up, and Order Confirmation.

## Styling

The application uses CSS for styling the components, ensuring a responsive and visually appealing design.

## License

This project is licensed under the MIT License.

---

This README file provides a comprehensive overview of the e-commerce application, including setup instructions, project structure, and implementation details, considering the new features added in version 2.