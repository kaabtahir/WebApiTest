# Web API Test

This project is an automated testing framework for the web application at [https://practice.automationtesting.in/](https://practice.automationtesting.in/) using Playwright and the Page Object Model (POM) design pattern. The framework is designed to be scalable, maintainable, and capable of executing tests in parallel across different browsers.


## Setup Instructions

1. **Clone the Repository**
   ```
   git clone

   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Configure Environment**
   You may need to adjust the `testConfig.ts` file for any environment-specific settings.

## How to Execute Tests

1. **Run Tests in Parallel**
   You can run the tests in parallel across Chrome and Firefox by executing:
   ```
   npx playwright test
   ```

2. **View Test Reports**
   After running the tests, an HTML report will be generated in the `test-report` directory. Open `index.html` to view the results.

## Dockerization

To run the tests in a Docker container, follow these steps:

1. **Build the Docker Image**
   ```
   docker build -t webapitest .
   ```

2. **Run the Docker Container**
   ```
   docker run -it webapitest
   ```

This will execute the tests inside the container, ensuring a consistent environment.
