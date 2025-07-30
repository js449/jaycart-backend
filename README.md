# JayCart Backend

This is the backend for the JayCart eCommerce project, built using Node.js, Express, and PostgreSQL with plain SQL queries. The project follows a clean layered architecture(N-Tier) inspired by the MVC pattern to organize code for scalability and maintainability.

---

## Project Structure & Architecture

The backend is structured into logical layers to separate concerns:

/jaycart-Backend

├── data-access/ # Data layer: direct SQL queries here
│ ├── db.js # PostgreSQL connection setup with pg
│ └── repositories/ # SQL query functions for each entity
│ ├── productRepository.js
│ ├── userRepository.js
│ ├── cartRepository.js
│ └── orderRepository.js

├── domain/ # Business logic and validation
│ ├── productService.js
│ ├── userService.js
│ ├── cartService.js
│ └── orderService.js

├── presentation/ # API Layer (Express controllers + routes)
│ ├── controllers/
│ │ ├── productController.js
│ │ ├── userController.js
│ │ ├── cartController.js
│ │ └── orderController.js
│ └── routes/
│ ├── productRoutes.js
│ ├── userRoutes.js
│ ├── cartRoutes.js
│ └── orderRoutes.js

├── middlewares/ # Middleware (auth, error handling, validation)
│ ├── authMiddleware.js
│ ├── errorMiddleware.js
│ └── validateMiddleware.js

├── utils/ # Helper functions (e.g. token generation)
│ └── jwtHelper.js
| └── hash.js

├── app.js # Express app setup, middleware & routes registration

├── server.js # Server entry point

├── .env # Environment variables (DB creds, JWT secret, Stripe keys)

├── package.json
|
|-- tests/
| └── user.test.js
| └── product.test.js
|
|--jest.config.js
|--jsconfig.json

└── README.md

---

## How Layers Work Together

- **Data Access Layer**: Contains raw SQL queries to interact with the PostgreSQL database.
- **Domain Layer**: Contains business logic, validation, and application rules.
- **Presentation Layer**: Handles incoming HTTP requests, calls domain logic, and sends responses.

This separation helps keep the codebase clean, scalable, and easy to maintain.

## Setup & Running Locally

1. ## Clone the repository

   git clone <your-repo-url>
   cd jaycart-Backend

2. ## Install dependencies

   npm install

3. ## Create .env file
   Add your environment variables:

DATABASE_URL=postgresql://postgres:<password>@localhost:5432/jaycart_db
PORT=5000
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key

4. ## Start the backend server
   node server.js

keep track of logs indicating connection to PostgreSQL and server running on specified port on console.

## API Endpoints Implemented So Far

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| POST   | `/api/products`       | Create a new product     |
| GET    | `/api/products`       | List all products        |
| GET    | `/api/products/:id`   | Get product details      |
| POST   | `/api/users/register` | Register a new user      |
| POST   | `/api/users/login`    | User login (returns JWT) |

Cart and Order endpoints are under development.

## Example API Requests

Create a product

curl -X POST http://localhost:5000/api/products \
 -H "Content-Type: application/json" \
 -d '{"name": "Yoga Mat", "price": 20.99, "description": "High-quality mat"}'

User login

curl -X POST http://localhost:5000/api/users/login \
 -H "Content-Type: application/json" \
 -d '{"email": "user@example.com", "password": "password123"}'

## Notes

I'm currently using plain SQL queries with the pg library instead of ORM for greater control and simplicity.

Database schema is managed manually; migration scripts coming soon.

The backend follows a layered architecture inspired by MVC for clarity and maintainability.

## Next Steps

Complete full CRUD for products

Add input validation

Implement user authentication with JWT

Build shopping cart and order management

Integrate Stripe payments

Improve error handling and write tests

## (July 18, 2025)

Finalized and fixed unit/integration tests for User and Product APIs:

Implemented JWT-based authentication in tests

Fixed test expectations to match actual API responses

Properly handled DB teardown to avoid hanging tests

Adjusted DELETE product route test to expect HTTP 204 (No Content) status

Prepared the backend architecture for Cart and Order features by:

Adding new layers and files: cartRepository.js, orderRepository.js, cartService.js, orderService.js, cartController.js, orderController.js, cartRoutes.js, and orderRoutes.js

Defined necessary database tables and relationships for cart and order management

Planned RESTful API endpoints for cart management (add/update/remove items, get cart)

Planned RESTful API endpoints for orders (place order, list user orders, admin order management)

Established best practices for layered architecture, validation, and authentication

## Current Status

- Core backend architecture and product/user APIs are fully implemented and tested.
- JWT authentication fully functional.
- Cart and Order modules are scaffolded with repository, service, controller, and route layers created.
- Database schema for cart and order designed and ready.
- Cart and Order business logic implementation is in progress.
- Planned features include full CRUD for cart and orders, secure access control, and payment integration with Stripe.

I am actively developing these features and welcome feedback or collaboration!

---

### Next: Deployment
