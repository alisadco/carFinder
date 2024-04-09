#!/bin/bash

# Clean and package the Maven project
./mvnw clean package

# Build the Docker image
docker build -t gcr.io/vast-science-417205/my-backend .

# Push the Docker image to Google Container Registry
docker push gcr.io/vast-science-417205/my-backend

# Deploy the Docker image to Google Cloud Run
gcloud run deploy backend --image gcr.io/vast-science-417205/my-backend --platform managed --allow-unauthenticated

echo "Press Ctrl+C to exit."
while true; do
    sleep 1
done