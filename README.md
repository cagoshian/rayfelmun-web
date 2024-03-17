# Talmun

## Docker with Jenkins Build and Publish

```
cd /tmp && \
ls -l | grep studentWeb | awk '{print $9}' | \
xargs -r rm -rf && \
docker ps -a | grep "talmun-web" | awk '{print $1}' | \
xargs -r docker stop && \
docker ps -a | grep "talmun-web" | awk '{print $1}' | \
xargs -r docker rm && \
docker images | grep "talmun-web" | awk '{print $3}' | \
xargs -r docker rmi && \
git clone https://github.com/doctormaster1/studentWeb.git && \
cp studentWeb/.env.temp studentWeb/.env && \
docker compose -f studentWeb/docker-compose.yml up -d --no-color
```
