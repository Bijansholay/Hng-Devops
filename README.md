# HNG Stage 1: Backend API & DevOps Task

This repository contains a simple, production-ready API built for the HNG Stage 1 DevOps track. The project demonstrates the ability to build a backend service, deploy it to a Cloud VPS, and configure it using professional DevOps tools like Nginx and PM2.

## 🔗 Live Deployment
- **Public API URL:** `http://34.224.82.211`
- **GitHub Repository:** `https://github.com/Bijansholay/Hng-Devops`

## 🛠 Tech Stack
- **Backend:** Node.js (Express)
- **Reverse Proxy:** Nginx
- **Process Manager:** PM2 (ensures 100% uptime)
- **Infrastructure:** AWS EC2 Instance (Ubuntu 22.04)

## 📌 API Endpoints

All endpoints return `Content-Type: application/json` and an HTTP `200 OK` status.

### 1. Root Status
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "message": "API is running"
  }

### 2. Health check                                               - **URL:** `/health`
- **Method:** `GET`
- **Response:**                                                    ```json                                                          {
    "message": "healthy"
  }

### 3. User information                                          - **URL:** `/me`
- **Method:** `GET`
- **Response:**                                                    ```json                                                          {
    "name" : "sholadoye najib adebisi",
     "email" : "najibsholadoye04@gmail.com"
    "github" : "https://github.com/Bijansholay/Hng-Devops
  }
