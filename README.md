# Microservices
- Built a ticketing cloud service using microservice architecture with Node.js, React.js, Bull, MongoDB.
- Solved concurrency issues in a distributed systems by communicating data between services using NATS streaming server as an event bus.
- Designed the CI/CD workflow using Github Actions and deployed to Google Cloud and DigitalOcean with Docker, Kubernetes, and Skaffold;
- Implemented a countdown expiration service using a queue system via Bull and Redis
- Built a server-side rendered frontend using Next.js; Automated the testing process using Jest.

## Prerequisites
- skaffold [Installing Skaffold](https://skaffold.dev/docs/install/)
- docker [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- kubectl [Install and Set Up kubectl on Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- minikube [minikube start](https://minikube.sigs.k8s.io/docs/start/)
- ingress-nginx [Ingress Nginx Installation](https://kubernetes.github.io/ingress-nginx/deploy/#minikube)
- nodejs & npm `sudo apt install nodejs npm`
### Env
Ubuntu 20.04.4 LTS

## Getting started
### Docker 
```
sudo usermod -aG docker $USER
```
### Minikube
- 2 CPUs or more
- 2GB of free memory
- 20GB of free disk space
- Internet connection
- Container or virtual machine manager, such as: Docker, Hyperkit, Hyper-V, KVM, Parallels, Podman, VirtualBox, or VMware Fusion/Workstation

```bash
sudo service docker start
minikube start
```
### Install ingress
```bash
minikube addons enable ingress
```
### Check the service namspace
```bash
kubectl get namespace
kubectl get services -n ingress-nginx
```
### Change host file
```bash
vim /etc/hosts
# Add this line
192.168.49.2    ticketing.dev
```
### Create secrets to k8s
```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=sk_test_XXX
```

### Run
```bash=
git clone git@github.com:Holychung/ticketing.git
cd ticketing
skaffold dev
```
![](https://i.imgur.com/tNUpDvo.png)

## Thanks
