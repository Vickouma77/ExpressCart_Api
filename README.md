<p align="center">
    <img src="https://img.shields.io/github/languages/count/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/repo-size/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/license/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/last-commit/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/issues/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/forks/Vickouma77/ExpressCart_Api" />
    <img src="https://img.shields.io/github/stars/Vickouma77/ExpressCart_Api" />
</p>

<h1 align="center" style="border-bottom: none;" >ExpressCart_API</h1>

ExpressCart_API is a Node.js and Express-based API for building a robust E-commerce platform. It utilizes MongoDB as the database for seamless data management.

## Features 

* User authentication and authorization.
* Product management, including creation, editing, and deletion.
* User profile management.
* Shopping cart functionality.
* Order processing.
* Payment processing using Stripe.
* Email notifications.
* Pagination.
* Admin dashboard.
* User dashboard.
* Product reviews and ratings.
* Product search, filtering, and sorting.
* Secure and efficient data storage using MongoDB.

## API Endpoints 

### User Endpoints

| Endpoint | Functionality | Access |
| --- | --- | --- |
| POST /api/login | Logs a user in | Public |
| POST /api/register | Registers a new user | Public |
| GET /api/profile | Gets a user's profile | Private |
| PUT /api/users/profile | Updates a user's profile | Private |
| GET /api/users | Gets all users | Private/Admin |
| DELETE /api/users/:id | Deletes a user | Private/Admin |
| GET /api/users/:id | Gets a single user | Private/Admin |
| PUT /api/users/:id | Updates a user | Private/Admin |

### Product Endpoints

| Endpoint | Functionality | Access |
| --- | --- | --- |
| GET /api/products | Gets all products | Public |
| GET /api/products/:id | Gets a single product | Public |
| POST /api/products | Creates a new product | Private/Admin |
| PUT /api/products/:id | Updates a product | Private/Admin |
| DELETE /api/products/:id | Deletes a product | Private/Admin |
| POST /api/products/:id/reviews | Creates a new review | Private |

### Order Endpoints

| Endpoint | Functionality | Access |
| --- | --- | --- |
| GET /api/orders | Gets all orders | Private/Admin |
| GET /api/orders/:id | Gets a single order | Private |
| POST /api/orders | Creates a new order | Private |
| PUT /api/orders/:id/pay | Updates an order's payment status | Private |
| PUT /api/orders/:id/deliver | Updates an order's delivery status | Private |

### Upload Endpoints

| Endpoint | Functionality | Access |
| --- | --- | --- |
| POST /api/upload | Uploads an image | Private |

### Stripe Endpoints

| Endpoint | Functionality | Access |
| --- | --- | --- |
| POST /api/config/stripe | Gets Stripe API key | Private |

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Running the Server

```sh
$ npm run dev
```

### Running the Tests
    
    ```sh
    $ npm run test
    ```

### License

This project is free to use for anyone feel free to clone it and use it as you like.

### Author

* [Vickouma77]()
