# **Authentication, Authorization, and Role-Based Access Control (RBAC) System**

## **Overview**

This project implements **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** to ensure secure access to resources based on user roles. It allows users to register, log in, and access specific features or resources based on their assigned roles.

---

## **Video Walkthrough**

Watch the project in action:
[Video Walkthrough](https://drive.google.com/file/d/14jy-HB5uB36QEsTbAHxns-o9V9h4_pyt/view?usp=sharing)

---

## **Features**

1. **User Authentication**:

   - Users can register with a username, password and role.
   - Passwords are securely hashed using **bcrypt**.
   - Secure login with token-based authentication using **JWT**.

2. **Role-Based Authorization**:

   - Roles include `Admin`, `User`, and `Moderator`.
   - Role-based access to specific routes or resources.
   - Unauthorized access is restricted.

3. **Role-Based Access Control (RBAC)**:
   - Dynamic control of permissions based on user roles.
   - Fine-grained access control implemented at the endpoint level.

---

## **Technologies Used**

- **Node.js** with **Express** for the backend framework.
- **MongoDB** as the database.
- **Mongoose** for database schema and interaction.
- **bcrypt** for password hashing.
- **JWT (JSON Web Token)** for secure token-based authentication.

---

## **File Structure**

```
config/
   db.js                # MongoDB connection
controllers/
   authController.js    # Handles user registration and login
middleware/
   authenticate.js      # Authentication middleware
   authorize.js         # Authorization middleware
models/
   userModel.js         # User schema and model
routes/
   authRoutes.js        # Routes for authentication
   userRoutes.js        # Routes for user operations
.gitignore
index.js                # Entry point
package.json
package-lock.json
Readme.md
```

---

## **Core Functionalities**

### **1. Authentication**

- **Register**: Users can sign up with a unique username, password, and role.
- **Login**: Authenticated users receive a JWT for accessing protected resources.

### **2. Authorization**

- Role-specific access to endpoints:
  - Admin-only routes.
  - Shared access for multiple roles, such as `Admin` and `User`.

### **3. RBAC**

- Middleware checks user roles before granting access.
- Granular control over resources based on user roles.

---

## **Endpoints**

1. **User Routes**:

   - `POST /register`: Register a new user.
   - `POST /login`: Authenticate and obtain a token.

2. **Protected Routes**:
   - `GET /admin`: Accessible only by `Admin`.
   - `GET /moderator`: Accessible by `Moderator` and `Admin`.
   - `GET /user`: Accessible by `User` and `Admin`.

---

## **Setup Instructions**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/thissudhir/Role-based-access-control ./
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file with the following variables:

   ```
   MONGODB_URL=<your-mongo-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the Server**:

   ```bash
   npm start
   ```

5. **Testing**:
   - Use **Postman** or a similar tool to test endpoints.
   - Ensure the database is running and the `.env` file is configured.

---

## **Extension**

- To read the highlighted comment install `Better Comments` extension from VS code extension.
- And add open `setting.json` .
- Paste `"better-comments.tags": [
{
  "tag": "INFO:",
  "color": "#fff",
  "strikethrough": false,
  "backgroundColor": "#0EA5E9"
},
]`

---

## **License**

This project is open-source and available under the MIT License.

---
