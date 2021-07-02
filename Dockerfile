#!/bin/bash

#Uncomment for build using docker. Instead I am building in gitlab build agent.
# #Stage 1 
# FROM node:latest as node
# LABEL author="Kevin Broadbridge"
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm install -g @angular/cli
# RUN ng build --prod
# #For testing, uncomment the following
# #ENTRYPOINT [ "/bin/bash" ]


# Stage 2
FROM nginx:latest

EXPOSE 80

RUN echo "deb http://security.debian.org/debian-security stretch/updates main" > /etc/apt/sources.security.only.list
RUN apt-get -y update -o Dir::Etc::SourceList=/etc/apt/sources.security.only.list -o Dir::Etc::Parts=/dev/null
RUN apt-get -y upgrade -o Dir::Etc::SourceList=/etc/apt/sources.security.only.list -o Dir::Etc::Parts=/dev/nulld

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY scripts/docker/start-nginx.sh /usr/share/nginx/start-nginx.sh

# Use the following line if building source with docker (above)
#COPY --from=node /app/dist/sb-clean-blog-angular /usr/share/nginx/html
# Use this line for local
COPY dist/sb-clean-blog-angular /usr/share/nginx/html

COPY version /usr/share/nginx/html/assets/version

ENTRYPOINT ["/usr/share/nginx/start-nginx.sh"]
