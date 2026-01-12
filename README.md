# 🚀 DevOps Zero to Hero: The Ultimate Lab

**Status:** 🚧 In Progress (Chapters 1-4 Complete)
**Author:** [Your Name]

A complete, "full-stack" DevOps journey building a three-tier application (React, Node.js, PostgreSQL) from source code to a fully automated GitOps deployment.

---

## 🏗️ Architecture
This project implements a standard **Microservices Architecture**:
* **Frontend:** React (Vite) - Served via Nginx
* **Backend:** Node.js (Express) API
* **Database:** PostgreSQL (v15)

The infrastructure evolves through the following stages:
1.  **Local Dev:** Docker Compose
2.  **Orchestration:** Kubernetes (Minikube)
3.  **Templating:** Helm Charts
4.  **GitOps:** ArgoCD (Coming Soon)

---

## 🛠️ Tech Stack
* **Code:** JavaScript (React, Node.js), SQL
* **Containerization:** Docker, Multi-stage builds
* **Orchestration:** Kubernetes (Minikube), Docker Compose
* **Package Management:** Helm
* **OS:** Ubuntu (WSL2), Alpine Linux

---

## 🚀 Getting Started

### Prerequisites
* Docker & Docker Compose
* Minikube & Kubectl
* Helm

### Method 1: The "Local Developer" Way (Docker Compose)
Ideal for testing code changes instantly without Kubernetes.

```bash
# 1. Start the stack
docker compose up -d --build

# 2. Access the App
# Frontend: http://localhost:3000
# Backend:  http://localhost:5000
# Database: Port 5432