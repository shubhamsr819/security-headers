<!-- Security Headers -->

1. X-powered-By -> this tells you your aplication is built in what type of server

- you dont want to leak any of the information of your server

2. Referer-Policy -> need to send when necessary

- you dont want to leak extra information whenever you are having any referal redirection kind of things

3. X-Content-Type-options -> based on the content you dont decide your content type .

4. HSTS (Strict transport security headers) -> this ensure your application only accessible https not http (https://hstspreload.org/)


# Input validation and sanitization:- 

- Use framework library
- whitelist validation
- Regular expression
- Escape user input
- parametrized url
- validate data types
- length and size check 
- images and files
- add client side validation
- error handling 
- security headers
- regular updates and patch
- Security audits and testing 
- Education and training ( Educate and train people regarding security)
- Avoid using Third-party libraries 

# Server side request forgery (SSRF)

- unvalidated user input 
- Lack of whitelisting
- Insufficient access control
- XML External Entity


# Server side javascript injection :- (SSJI)

- Inadequate input validation
- Direct execution of user provided the code ( ex. codesandbox etc.)
- Using dangerous function
- Insecure deserialization 

Feature policy | permission policy:-






















