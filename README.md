# 🛡️ ReguGuard Compliance Portal

![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Secure-black?style=for-the-badge&logo=jsonwebtokens)

ReguGuard is a secure risk-monitoring dashboard and compliance portal designed to demonstrate enterprise-grade application security. It tracks regulatory metrics, evaluates dynamic risk inputs in real-time, and ensures strictly authenticated and authorized API communication between the client and server. 

Built specifically to align with banking regulatory and business conduct standards, this project emphasizes secure coding practices, data integrity, and role-based access control.

## 🚀 Features

*   **Robust Authentication & Authorization:** Implements stateless JWT (JSON Web Token) authentication alongside Role-Based Access Control (RBAC) via Spring Security.
*   **Dynamic Risk Evaluation Engine:** A secure, server-side rules engine that evaluates incoming business metrics to assign dynamic risk scores (Low, Medium, High).
*   **Strict Security Posture:** Features strict CORS configurations, comprehensive input validation (`@Valid`), and global exception handling to prevent stack-trace exposure or data leakage.
*   **Secure Client Flow:** React frontend utilizes Axios interceptors for secure token attachment, automatic token refresh handling, and protected route guarding.

## 🛠️ Tech Stack

*   **Backend:** Java 17, Spring Boot 3.x, Spring Security, JWT, REST APIs, Hibernate/JPA
*   **Frontend:** React.js, TypeScript, React Router, Tailwind CSS, Axios
*   **Database:** PostgreSQL
*   **Security Practices:** RBAC, Input Sanitization, OWASP Top 10 Mitigation

## 🔒 Security Architecture Highlight

*   **Authentication:** Stateless JWT issued upon successful login, stored securely on the client side.
*   **Authorization:** Endpoints are protected using method-level security (`@PreAuthorize`). For example, the Risk Evaluation API is strictly limited to users with `ROLE_COMPLIANCE_OFFICER`.
*   **Data Integrity:** All incoming payloads are verified against strict DTO (Data Transfer Object) constraints before hitting the service layer.

## ⚙️ Local Setup & Installation

### Prerequisites
*   Java 17 JDK
*   Node.js 18+
*   PostgreSQL running locally (or via Docker)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
