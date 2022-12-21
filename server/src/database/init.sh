#!/bin/bash

echo "########### Loading data to Mongo DB ###########"

mongoimport --jsonArray --db it-profile --collection users --file /database/users.json && \
mongoimport --jsonArray --db it-profile --collection informations --file /database/informations.json && \
mongoimport --jsonArray --db it-profile --collection educations --file /database/educations.json && \
mongoimport --jsonArray --db it-profile --collection experiences --file /database/experiences.json