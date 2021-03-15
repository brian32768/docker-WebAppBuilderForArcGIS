# docker-ArcGISWebAppBuilder

Runs Esri "ArcGIS Web AppBuilder (Developer edition)" (aka WABDE) in a Docker container.
This version is based on version 2.19.

The main purpose of this Docker is to facilitate developing widgets and I describe my
workflow in this README. You can just use it to run WABDE and build apps, too.

I have tested this process with WABDE versions 2.13-2.19 on Debian Linux
and version 2.19 on Windows 10.

## Licenses

The github repo contains a complete unmodified copy of Esri "ArcGIS
Web AppBuilder (Developer edition)" in the file
arcgis-web-appbuilder-2.19.zip. The file will be unpacked into a
Docker image by the build process.

Per Esri licensing, Esri allows redistribution of this software
without modification.  For details, you can refer to these Esri
licenses as referenced in their code:
<http://js.arcgis.com/3.15/esri/copyright.txt> and
<http://www.arcgis.com/apps/webappbuilder/copyright.txt>.

Esri widgets - all the code in the widgets directory (inside
ArcGISWebAppBuilder) is covered by a permissive [Apache 2.0
license](http://www.apache.org/licenses/LICENSE-2.0).  You can change
it anyway you want but don't send pull requests to me because I will
be keeping the code in sync with Esri's. Send them to Esri. ;-)

The wildsong part of the project is covered under the permissive MIT
license as described in the file LICENSE in this repository.

## Prerequisites 

* A working ArcGIS Enterprise Portal with admin access or an ArcGIS Online "organizational" account.
* A computer that has Docker and Docker Compose installed.

Note that you can set up a developer account for free.

## Volumes for storage

I tried using 'bind' mounts but they don't work for widgets; 
only the Docker volumes work properly for that.

### apps and db volumes

The apps that are generated will be in apps/. There is a separate
folder that has to be kept in sync, db/.

I am trying to put the data that needs to be persisted into volumes
so that it can be upgraded across version updates from Esri, which happen
roughly quarterly I think.

Apps and db are empty at first run so they are pretty easy to deal with.
There's also "widgets".

### widgets volume

Widgets are stored in the "client" side of WABDE then copied to
"server" side into the apps folder when you create an app in WABDE.
Normally any widgets you see in apps/ folders started life in widgets/.

On first run, the container will copy the internal widgets folder
into a fresh new Docker volume called wabde_widgets.

Once that's happened then you can install third party widgets into it
and they will be visible in the app builder.

### logs 

You can create a separate logs folder if you want. I ignore it.

## Upgrades

When doing upgrades, I have found I can leave apps and db volumes
alone. To get widgets from the new version, it's easiest to delete the
old widgets volume and let Docker create and populate a new one.

```bash
docker volume rm wabde_widgets
```

If you have altered anything in there or added extra widgets, it's
up to you to preserve them.

## Running it

Just using docker commands, it's

```bash
docker build -t wildsong/wabde:2.19 .
docker run -d --name wabde \
   -v apps:/home/node/ArcGISWebAppBuilder/server/apps \
   -v db:/home/node/ArcGISWebAppBuilder/server/db \
   -v widgets:/home/node/ArcGISWebAppBuilder/client/stemapp/widgets \
   -p 3344:3344 wildsong/wabde:2.19

Run this if you use Docker Compose,

```bash
docker-compose up -d
```

If you use Docker Swarm,

```bash
    docker stack deploy -c docker-compose.yml wabde
```

### Setting the App Id from Portal

Once the container is up and running you still have to connect it to Portal (or ArcGIS Online)..
Connect to WABDE from a browser (e.g. <http://localhost:3344/webappbuilder/>) and
enter the URL of your Portal and an AppId (from Portal). On the Portal
side you have to set up a new App and get the AppId. Complete
relatively good instructions are on the ESRI web site under Quick Start.

In Portal,

* Content tab->My Content
* Add Item->Application
* Type of application: Web Mapping
* Purpose: Ready to use
* API: Javascript
* URL: https://yourdocker:3344/webappbuilder
* Title: whatever you like
* Tags: whatever...
Then you have to co into the settings for the new "Web Mapping Application"
and "register" to get an AppId. Under "App Registration",
* App Type: Browser
* Redirect URI: I wrestle with this everytime so I enter all variations, one of them works,
I have no idea which one, move along nothing to see here. Avoid stupid redirect errors.
http://name:3344/ \
https://name:3344/ \
http://name.domain:3344/ \
https://name.domain:3344/ \

That gets you the App Id which you can take back to the WAB web page in the "unsigned" step above,
using cut and paste to copy it into the browser.

### Saving the signin file

Once you have successfully connected you can copy the file out and put it back
after upgrades, if you want. Instead of re-entering the ID you copy the file.
Same amount of work, either way.

```bash
cp ArcGISWebAppBuilder/server/signininfo.json .
```

The file should look like signininfo.json.SAMPLE with the fields properly filled in.

### Force signing in WABDE again should you ever need to

If you can remove the file ArcGISWebAppBuilder/server/signininfo.json
and restart the container, it will disconnect WABDE from your Portal
and trigger the web page that prompts for the key again. This
basically takes the image back to the "unsigned state".

## Backups

If you want to back up your apps folder, make sure you also backup (and restore) the db/apps file. They
have to match. 

## Future enhancements 

I have played with adding a web-based file manager so that users could directly
transfer files but I have not found one that I like yet. Please send suggestions.

### Widget management

I am working out the best way to work with 3rd party widgets. They
need to be copied into clients/stemapp/widgets where the existing
widgets live. This is confusing, I don't know why they don't have 2
spaces. But that's life.

### Development workflow

I just started with this part today, stay tuned.

My idea is to create an app in WABDE,
then add my own widget into it by editing config.json,
and then using git to manage the code in apps/2/widgets/"MyCustomWidget".

I need to have write access to the volume.
I could break down and use a bind mount, it's just easier for this.

