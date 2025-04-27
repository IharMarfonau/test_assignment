# Authentication System

## Description
The project is designed to implement an authentication system. Authentication is implemented using JWT.

## API
The controller processes requests for user authorization, logout, and token validation.  
Middleware is used to verify tokens in requests for all endpoints except authorization.

## Business Logic
Services handle logic related to authentication and tokens.

## Data Storage
MongoDB is used. User data is stored with password encryption using salt.  
A separate service with a data model is used.

## Explanations and Compromises

1. **Secrets and Security**  
   - A secret key (`JWT_SECRET`) is used for working with JWT.  
   - `bcryptjs` is used to protect user passwords, with salt added.  
   - Tokens include an expiration time.  
   - The system does not account for multiple sessions per client.  
   - A token-refresh mechanism is not implemented; refresh tokens could be used for this.

2. **Error Handling**  
   - For simplicity, all errors are caught by the controller, providing “centralized” error handling.  
   - Error logging and system monitoring are not implemented, aside from `console.log()`.

3. **Tokens**  
   - Token validation is implemented on the server; in a real application, this could be implemented in the web client.

4. **Testing**  
   - No tests are present in the code.