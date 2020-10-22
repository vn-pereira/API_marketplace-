# MarketPlaceAPI

Module 3 project - Resilia Educação - WebDev.

# Objective

Build a REST API with the routes of a Marketplace.

## Features:

- Register suppliers
- Register customers
- Make purchases of products registered by suppliers

# Libraries used

## Dependencies

- **Express:** Web framework that creates route abstractions, middleware and many other functions to facilitate  the creation of API's;<br>
- **Bcrypt:** A library for hashing passwords;<br>
- **Dotenv:** Module that loads environment variables from an .env file to process.env. Store information in the  environment separate from the code itself;<br>
- **Mongoose:** An object modeling tool, targeted to MONGODB, designed to work in asynchronous environments.  <br>
- **Body-parser:** Module for converting the requisition body to various formats.<br>

## Development Dependencies

- **Nodemon:** Tool that drops and raises the server again in the air whenever any changes are applied to the code; <br>
- **Mocha:** Test development framework for NodeJS applications; <br>
- **Chai:** A library for testing through affirmations; <br>
- **Chai-http:** A library for conducting HTTP tests focused on integration; <br>

# Entities

### **Client:**
- _Username:_ Username to access the account;
- _Full name:_ Name associated with the user in the API; <br>
- _CPF:_ Document associated with the user in the API; <br>
- _Email:_ Email associated with the user in the API; <br>
- _Telephone:_ Telephone associated with the user in the API; <br>
- _Address:_ Address associated with the user in the API; <br>
- _Password:_ Password encrypted using a hash function; <br>
- _Active:_ User account status, true for active and false for inactive; <br>
- _Date of inactivation of the account:_ This property is only activated in case of deletion of the account, storing the moment when the user canceled the account; <br>
- _Salto:_ Unique identifier of the method used during the hash function. <br> <br>

### **Provider:**
- _Name:_ Name associated with the supplier in the API;<br> 
- _Corporate name:_ Corporate name associated with the supplier in the API; <br> 
- _CNPJ:_ Document associated with the supplier in the API; <br> 
- _Email:_ Email associated with the supplier in the API; <br> 
- _Telephone:_ Telephone associated with the supplier in the API; <br> 
- _Address:_ Address associated with the supplier in the API; <br> 
- _Password:_ Password encrypted using a hash function; <br> 
- _Active:_ Status of the supplier's account, true for active and false for inactive; <br> - _Date of inactivation of the account:_ This property is only activated in case of deletion of the account, storing the moment when the supplier canceled the account; <br> 
- _Salto:_ Unique identifier of the method used during the hash function. <br> <br>

### **Product:**
- _ID of the supplier:_ For location of the supplier's registration; <br> 
- _Name:_ Name associated with the product in the API; <br> 
- _Description:_ Product description; <br> 
- _Assessment:_ Evaluation of the product by customers; <br> 
- _Price:_ Price associated with the respective product; <br> 
- _Stock:_ Quantity of the product supplied for sale; <br> 
- _Active:_ Product status, being true for active and false for inactive; <br> 
- _Date of inactivation of the product:_ This property is only activated in case of inactivation, storing the moment when the supplier canceled the exhibition; <br>

### **Purchase:**

- _ID of the customer:_ To locate the customer's registration; 
- _Product ID:_ To locate the product registration; <br> 
- _ID of the supplier:_ For location of the supplier's registration; <br> 
- _Value of purchase:_ Product description; <br> 
- _dataCompra:_ Product evaluation by customers; <br> 
- _Active:_ Status of the purchase, being true for active and false for inactive; 
- _Cancellation date:_ This property is only activated in case of inactivation, storing the moment when the customer / supplier canceled the purchase; <br> <br>

# Routes

    GET = READ | POST = CREATE | PUT = EDIT | DELETE = DELETE

## Client

- **GET _/user/list_:** Returns as an answer all active customers registered in the API bank; <br> 
- **GET(single user) _/user/:id_:** Returns as a response a single customer whose id is passed as a parameter in the URI (replacing the id); <br> 
- **POST _/new-user_:** Adds a new user to the API bank, the user's attributes must be sent through the request body in JSON format; <br> 
- **DELETE _/user/delete/:id_:** Inactivates the user account in the database whose id is passed as a parameter in the URI (replacing the id); <br> 
- **PUT _/update-user/:id_:** Changes the customer data, whose id was passed as a parameter in the URI (replacing the id). Changes must be passed through the request body in JSON format. <br> <br>

**Provider:**

- _Name:_ Name associated with the supplier in the API; <br>
- _Corporate name:_ Corporate name associated with the supplier in the API; <br>
- _CNPJ:_ Document associated with the supplier in the API; <br>
- _Email:_ Email associated with the supplier in the API; <br
- _Telephone:_ Telephone associated with the supplier in the API; <br>
- _Address:_ Address associated with the supplier in the API; <br>
- _Password:_ Password encrypted using a hash function; <br>
- _Active:_ Status of the supplier's account, true for active and false for inactive; <br>
- _Date of inactivation of the account: _ This property is only activated in case of deletion of the account, storing the moment when the supplier canceled the account; <br>
- _Jump:_ Unique identifier of the method used during the hash function. <br> <br>

**Product:**

- _ID of the supplier:_ For location of the supplier's registration; <br>
- _Name:_ Name associated with the product in the API; <br>
- _Description:_ Product description; <br
- _Assessment:_ Evaluation of the product by customers; <br>
- _Price:_ Price associated with the respective product; <br>
- _Stock:_ Quantity of the product supplied for sale; <br>
- _Active:_ Product status, being true for active and false for inactive; <br>
- _Date of inactivation of the product:_ This property is only activated in case of inactivation, storing the moment when the supplier canceled the exhibition; <br>

**Purchase:**
- _ID of the customer:_ To locate the customer's registration;
- _Product ID:_ To locate the product registration; <br>
- _ID of the supplier:_ For location of the supplier's registration; <br>
- _Value of purchase:_ Product description; <br>
- _dataCompra:_ Product evaluation by customers; <br>
- _Active:_ Status of the purchase, being true for active and false for inactive;
- _Cancellation date:_ This property is only activated in case of inactivation, storing the moment when the customer / supplier canceled the purchase; <br> <br>

# Routes

    GET = READ | POST = CREATE | PUT = EDIT | DELETE = DELETE

## Client

- **GET _/user/list_:** Returns as an answer all active customers registered in the API bank; <br>
- **GET (single user) _/user/:id_:** Returns as a response a single customer whose id is passed as a parameter in the URI (replacing the id); <br>
- **POST _/new-user_:** Adds a new user to the API bank, the user's attributes must be sent through the request body in JSON format; <br>
- **DELETE _/user/delete /:id_:** Inactivates the user account in the database whose id is passed as a parameter in the URI (replacing the id); <br>
- **PUT _/updateuser/:id_:** Changes the customer data, whose id was passed as a parameter in the URI (replacing the id). Changes must be passed through the request body in JSON format. <br> <br>

## Providers

- **GET _/providers_:** Returns as an answer all active suppliers registered in the API bank; <br>
- **GET (single supplier) _/providers/:id_:** Returns as a response a single supplier whose id is passed as a parameter in the URI (replacing the id); <br>
- **POST _/new-provider_:** Adds a new supplier to the API bank, the supplier's attributes must be sent through the request body in JSON format; <br>
- **DELETE _/providers/:id_:** Inactivates the supplier's account in the database whose id is passed as a parameter in the URI (replacing the id); <br>
- **PUT _/providers/:id_:** Changes the data of the supplier, whose id was passed as a parameter in the URI (replacing the id). Changes must be passed through the request body in JSON format. <br> <br>

## Product

- **GET _/products_:** Returns as an answer all active products registered in the API bank; <br>
- **GET (by supplier) _/products/:providerID_:** Returns the products registered by the supplier, whose id is passed as a parameter in the URI (replacing the id);
- **GET (single product) _/products/:providerID /:productID_:** Returns as a response the product registered by the supplier, whose id of both are passed as a parameter in the URI; <br>
- **POST _/products/new-product_:** Add a new product in the API bank, the product attributes must be sent through the request body in JSON format; <br>
- **DELETE _/products/:id_:** Make inactive the product whose id is passed as a parameter in the URI; <br>
- **PUT _/products/:id_:** Changes the product data, whose id was passed as a parameter in the URI (replacing the id). Changes must be passed through the request body in JSON format. <br> <br>

## Purchase

- **GET _/purchases/list_:** Returns as an answer all active purchases registered in the API bank; <br>
- **GET (single purchase) _/purchases/product /:id_:** Returns as a response a single purchase whose associated product id is passed as a parameter in the URI (replacing the id); <br>
- **GET (single purchase) _/purchases/user /:id_:** Returns as a response a single purchase whose associated customer id is passed as a parameter in the URI (replacing the id); <br>
- **POST _/new-purchase_:** Adds a new purchase in the API bank, the product attributes must be sent through the request body in JSON format (must be informed, the id of the customer who is making the purchase , product supplier id and product id);
- **PUT _/purchase/:id_:** Disables the purchase whose id was passed as a parameter in the URI (replacing the id). <br> <br>

## LIVE DEMO

You can run tests in our demo hosted on Heroku.
To do this, simply place the routes at the end of the link: **https://limitless-cove-49173.herokuapp.com/**
