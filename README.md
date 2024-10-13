# Gemini Clone App

## Project Description
The Gemini Clone App is a web application that mimics the functionalities of the Gemini app. It allows users to interact with a chatbot, view recent prompts, and see detailed responses with a typing effect.

## Figma Design
https://www.figma.com/design/PkNIChq8DbzwGAh3KHRSqK/Gemini-Clone?node-id=0-1&node-type=canvas&t=8zJSh9qHf7CRZd1b-0

## Features
- **Chatbot Interaction:** Users can enter prompts and receive detailed responses from the chatbot.
- **Recent Prompts:** The app displays a list of recent prompts for easy access.
- **Typing Effect:** The responses from the chatbot are displayed with a typing effect for a more interactive experience.
- **Loading Indicators:** Loading animations are shown while waiting for responses.

## Technologies Used

### Frontend:
- **React:** Frontend library for building the user interface.
- **TypeScript:** JavaScript with type definitions for better code quality and maintainability.
- **React Hook Form:** Library for managing form state in React.
- **Custom Hooks:** Encapsulate logic in reusable hooks (useGemini).
- **CSS:** Styling the application.

### Backend:
- **Express:** Web framework for Node.js.
- **Google Generative AI:** API for generating responses using generative models.

### Deployment:
- **Heroku:** Platform as a service (PaaS) for deploying the backend.
- **Docker:** Containerization for consistent deployment environments.

## Installation

### Prerequisites
- **Node.js:** Ensure you have Node.js installed.
- **Docker:** Install Docker if you plan to use it for deployment.
- **Heroku CLI:** Install the Heroku CLI if you plan to deploy to Heroku.

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/fnuadnan/gemini-clone-app.git
    cd gemini-clone-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables for your configuration.

4. Run the application:
    ```sh
    npm start
    ```

5. To deploy using Docker:
    - Build the Docker image:
        ```sh
        docker build -t gemini-clone-app .
        ```
    - Run the Docker container:
        ```sh
        docker run -p 3000:3000 gemini-clone-app
        ```

6. To deploy to Heroku:
    - Login to Heroku:
        ```sh
        heroku login
        ```
    - Create a new Heroku app:
        ```sh
        heroku create
        ```
    - Push the code to Heroku:
        ```sh
        git push heroku main
        ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Interact with the chatbot by entering prompts.
3. View the recent prompts and observe the typing effect in the responses.

## Contributing
If you wish to contribute to the project, please fork the repository and create a pull request with your changes.

