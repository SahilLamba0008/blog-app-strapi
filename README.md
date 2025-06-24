# Strapi Blog App

Welcome to the Strapi Blog App! This project uses Strapi as the backend CMS and Next.js as the frontend framework to create a dynamic blog application.

## Project Structure

The project is organized into two main folders:

- `backend`: Contains the Strapi CMS setup and configuration.
- `frontend`: Contains the Next.js application for the frontend.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.0 is preferred)
- [npm](https://www.npmjs.com/)

## Getting Started

### Backend (Strapi)

1. **Navigate to the `backend` folder:**

   ```bash
   cd backend

2. **Install dependencies:**
    ```bash
   npm install

3. **Setup Enviroment variables :**
    ```bash
   cp .env.example .env

4. **Start Strapi server:**
    ```bash
   npm run start

### Frontend (NextJs + TailwindCSS)

1. **Navigate to the `Frontend` folder:**

   ```bash
   cd frontend

2. **Install dependencies:**
    ```bash
   npm install

3. **Setup Enviroment variables :**
    ```bash
   cp .env.example .env.local

   In case of error try using this key in .env.local :
    NEXT_PUBLIC_STRAPI_API_URL=http://127.0.0.1:1337

4. **Get you Strapi API Token :**
    - go to Strapi Admin Panel
    - Settings > API Tokens > (generate your own) 

5. **Start NextJS server:**
    ```bash
   npm run dev

### Project Screenshots : 
##### Auth Route :
![Screenshot 2025-06-24 210611](https://github.com/user-attachments/assets/cfa7118b-1524-4e61-8f90-c940368df630)
![Screenshot 2025-06-24 210556](https://github.com/user-attachments/assets/541718b0-dd8f-4fcc-a4b7-0bd0d914c91c)

##### Blogs Route :
![Screenshot 2025-06-24 220621](https://github.com/user-attachments/assets/916fcaa7-0086-455f-b8aa-10856f55abdf)

##### Home Route :
![Screenshot 2025-06-24 220740](https://github.com/user-attachments/assets/5b9f7104-12d0-470f-8328-e8a1a4d36762)

##### Post a Blog Page : 
![image](https://github.com/user-attachments/assets/a8ced70b-a211-4ca0-8463-4784a5f56f1a)

##### Read a Blog : 
![image](https://github.com/user-attachments/assets/06881e41-70fb-4b7b-bf50-d2c5986a5b9e)

