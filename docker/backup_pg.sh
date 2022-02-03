#!/bin/bash
AHORA=`date +%d-%m-%Y"_"%H_%M_%S`
FNAME="dump_${AHORA}.sql"
echo "Generando ${FNAME}"
docker exec -it superset_db pg_dumpall -c -U superset > ~/backups/${FNAME}
echo "Listo"
