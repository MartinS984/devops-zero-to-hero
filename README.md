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
1. **Local Dev:** Docker Compose
2. **Orchestration:** Kubernetes (Minikube)
3. **Templating:** Helm Charts
4. **GitOps:** ArgoCD (Coming Soon)

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
```

### Method 2: The "DevOps Engineer" Way (Kubernetes + Helm)
Deploys the application into a local cluster using production-grade templates.

# 1. Start Minikube & Connect Docker
```bash
minikube start
eval $(minikube docker-env) # (Or Windows equivalent)
```

# 2. Build Images (Inside Cluster)
```bash
docker build -t devops-backend:v1 ./backend
docker build -t devops-frontend:v1 ./frontend
```

# 3. Deploy with Helm
```bash
helm install my-app ./helm-charts/three-tier-app
```

# 4. Access via Tunnel (for LoadBalancer)
```bash
minikube tunnel
# -> Open http://127.0.0.1
```

## 🗺️ Project Roadmap

| Chapter | Topic | Status |
|---------|-------|--------|
| 01 | Source Code (React/Node/Postgres setup) | ✅ Done |
| 02 | Containerization (Dockerfiles & Compose) | ✅ Done |
| 03 | Orchestration (Raw Kubernetes Manifests) | ✅ Done |
| 04 | Package Management (Helm Charts) | ✅ Done |
| 05 | GitOps (ArgoCD & Sync Automation) | ⏳ Next |
| 06 | CI Pipeline (GitHub Actions) | ⏳ Pending |
| 07 | Observability (Prometheus & Grafana) | ⏳ Pending |

## 📂 Repository Structure

```
├── backend/        # Express API + Dockerfile
├── frontend/       # React App + Nginx Dockerfile
├── database/       # SQL Initialization scripts
├── helm-charts/    # Kubernetes Helm Templates
├── k8s/            # (Legacy) Raw Manifests for reference
└── docker-compose.yaml
```