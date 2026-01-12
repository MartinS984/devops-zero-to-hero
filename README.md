# 🚀 DevOps Zero to Hero: The Ultimate Lab

**Status:** ✅ Completed
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
4. **GitOps:** ArgoCD (Automated Sync)
5. **CI/CD:** GitHub Actions (Automated Testing)
6. **Observability:** Prometheus & Grafana (Monitoring)

---

## 🛠️ Tech Stack

* **Code:** JavaScript (React, Node.js), SQL
* **Containerization:** Docker, Multi-stage builds
* **Orchestration:** Kubernetes (Minikube), Docker Compose
* **Package Management:** Helm
* **GitOps:** ArgoCD
* **CI/CD:** GitHub Actions
* **Observability:** Prometheus, Grafana
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
### Method 3: The "GitOps Master" Way (ArgoCD)

Automates the deployment. ArgoCD watches this repo and syncs changes automatically.

```bash
# 1. Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# 2. Get Admin Password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo

# 3. Access UI (Keep terminal open)
kubectl port-forward svc/argocd-server -n argocd 8080:443
# -> Open https://localhost:8080 (User: admin)

# 4. Connect the App
kubectl apply -f argocd/application.yaml
```

### Method 4: The "SRE" Way (Monitoring)

View the health of the cluster.

```bash
# 1. Install Prometheus Stack
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring --create-namespace

# 2. Get Grafana Password
kubectl get secret --namespace monitoring monitoring-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

# 3. Access Dashboard
kubectl port-forward svc/monitoring-grafana 3000:80 -n monitoring
# -> Open http://localhost:3000 (User: admin)
```

## 🗺️ Project Roadmap

| Chapter | Topic                                            | Status   |
|---------|--------------------------------------------------|----------|
| 01      | Source Code (React/Node/Postgres setup)          | ✅ Done  |
| 02      | Containerization (Dockerfiles & Compose)         | ✅ Done  |
| 03      | Orchestration (Raw Kubernetes Manifests)         | ✅ Done  |
| 04      | Package Management (Helm Charts)                 | ✅ Done  |
| 05      | GitOps (ArgoCD & Sync Automation)                | ✅ Done  |
| 06      | CI Pipeline (GitHub Actions)                     | ✅ Done  |
| 07      | Observability (Prometheus & Grafana)             | ✅ Done  |

## 📂 Repository Structure

```
├── .github/        # CI Pipelines (GitHub Actions)
├── argocd/         # ArgoCD Application Manifests
├── backend/        # Express API + Dockerfile
├── frontend/       # React App + Nginx Dockerfile
├── database/       # SQL Initialization scripts
├── helm-charts/    # Kubernetes Helm Templates
├── k8s/            # (Legacy) Raw Manifests for reference
└── docker-compose.yaml
```