# Start containers in foreground
docker-compose up

# Once you're done and have stopped the containers with Ctrl+C, clean up
# Remove stopped containers
docker-compose down -v

# Remove images used by the docker-compose.yml
# This step requires parsing the docker-compose file or knowing the images in advance
docker rmi mini-project-01-client mini-project-01-server postgres