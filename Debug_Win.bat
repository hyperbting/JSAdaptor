docker build -t myapache2 .

docker rm -f xrspace-apiadaptor-test
docker run -dit --name xrspace-apiadaptor-test -p 8080:80 myapache2

start "" http://127.0.0.1:8080/index.html