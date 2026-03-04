#!/bin/bash

# ------------------------
# Auto-deploy script for NehaS-Portfolio
# ------------------------

set -e  # Fail if any command fails

# Variables
REPO_URL="https://github.com/Neha0021/NehaS-Portfolio.git"
BRANCH="prod"
APP_DIR="$HOME/NehaS-Portfolio"

# ------------------------
# 1. Update & Upgrade Ubuntu
# ------------------------
echo "Updating system..."
sudo apt update -y && sudo apt upgrade -y

# ------------------------
# 2. Install required packages
# ------------------------
echo "Installing git, curl, Nginx..."
sudo apt install -y git curl nginx

# Start and enable Nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# ------------------------
# 3. Install Docker if not present
# ------------------------
if ! command -v docker &> /dev/null
then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    sudo usermod -aG docker $USER
fi

# ------------------------
# 4. Install Docker Compose v2 if not present
# ------------------------
if ! docker compose version &> /dev/null
then
    echo "Installing Docker Compose v2..."
    sudo apt install -y docker-compose-plugin
fi

# ------------------------
# 5. Clone or update repo
# ------------------------
if [ -d "$APP_DIR" ]; then
    echo "Repo exists. Pulling latest code..."
    cd "$APP_DIR"
    git fetch --all
    git reset --hard origin/$BRANCH
else
    echo "Cloning repo..."
    git clone -b $BRANCH $REPO_URL "$APP_DIR"
    cd "$APP_DIR"
fi

# ------------------------
# 6. Build & run Docker Compose
# ------------------------
echo "Stopping existing containers (if any)..."
docker compose down

echo "Building and starting containers..."
docker compose up -d --build

# ------------------------
# ✅ Done
# ------------------------
echo "✅ Deployment completed successfully!"
