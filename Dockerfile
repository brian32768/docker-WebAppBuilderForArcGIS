FROM node:11
LABEL MAINTAINER="Brian H Wilson brian@wildsong.biz"

RUN apt-get update && apt-get -y install unzip

# The node server will run as user 1000
# so it will need permissions to write into /srv
RUN chown 1000:1000 /srv
WORKDIR /srv
USER 1000:1000

# Unzip WABDE into /srv
ADD arcgis-web-appbuilder-2.20.zip .
RUN unzip -q arcgis-web-appbuilder-2.20.zip && \
    rm arcgis-web-appbuilder-2.20.zip && \
    mv ArcGISWebAppBuilder/* .

# Just a convenient shortcut,"/srv/widgets".
RUN ln -s /srv/client/stemapp/widgets

VOLUME /srv/server/apps
VOLUME /srv/server/db
VOLUME /srv/client/stemapp/widgets

EXPOSE 3344/tcp 3345/tcp 3346/tcp

# Server will not start unless current directory is "server".
WORKDIR /srv/server
CMD [ "node", "server.js" ]
