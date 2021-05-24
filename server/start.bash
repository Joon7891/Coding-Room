docker build -t server-test .
docker run -p 3001:3001 -it server-test