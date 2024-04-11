#!/bin/bash

# Build the Docker image
docker build -t gcr.io/vast-science-417205/my-frontend .

# Push the Docker image to Google Container Registry
docker push gcr.io/vast-science-417205/my-frontend

# Deploy the Docker image to Google Cloud Run
gcloud run deploy frontend --image gcr.io/vast-science-417205/my-frontend --platform managed --allow-unauthenticated

echo "Press Ctrl+C to exit."
while true; do
    sleep 1
done