# 🛒 QuickBuy – Simple E-Commerce Store

An end-to-end e‑commerce web application built as part of CodeAlpha’s internship.  
QuickBuy lets users register/login, browse products by category, manage a shopping cart, and place orders (Cash on Delivery).

---

## 📌 Project Overview

**Tech Stack:**  
* Node.js & Express.js  
* EJS templating  
* MongoDB (via Mongoose)  
* Bootstrap + custom CSS  
* Passport.js & express-session  

**Developer:** Honoured OneByte  
**Duration:** Internship Task 1

---

## ✨ Features

* **User Authentication**  
  * Signup & Signin with flash messages  
  * Session‑based login  

* **Product Catalog**  
  * Categorical listings (Electronics, Books, Clothing)  
  * Home carousel and “Latest Products” slider  

* **Shopping Cart**  
  * Add/reduce/remove items  
  * Persist cart in session & DB for logged‑in users  

* **Order Processing**  
  * Checkout form collects address  
  * Save order snapshot (COD)  
  * “My Orders” under user profile  

---

## 🚦 Routes

| Method | Path                 | Description                     |
| ------ | -------------------- | ------------------------------- |
| GET    | `/`                  | Homepage with carousel & tiles  |
| GET    | `/add-to-cart/:id`   | Add product to cart             |
| GET    | `/shopping-cart`     | View cart                       |
| GET    | `/checkout`          | Checkout form (login required)  |
| POST   | `/checkout`          | Place order                     |
| GET    | `/user/signup`       | Signup form                     |
| POST   | `/user/signup`       | Handle registration             |
| GET    | `/user/signin`       | Signin form                     |
| POST   | `/user/signin`       | Handle login                    |
| GET    | `/user/profile`      | View past orders                |
| GET    | `/user/logout`       | Logout                          |

---

## 🛠️ Installation

```bash
# 1. Clone
git clone https://github.com/Honoured-1-byte/CodeAlpha_QuickBuy.git
cd CodeAlpha_QuickBuy

# 2. Install deps
npm install

# 3. Configure .env
cp .env.example .env
# fill DATABASE_URL, SESSION_SECRET, PORT

# 4. Seed DB
node insertCategories.js
node insertProducts.js

# 5. Start
npm start
