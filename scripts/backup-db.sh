#!/bin/bash
# ==============================================================================
# APTI CLUB - GSSSIETW Placement Intelligence Platform
# Automated Database Backup Script (Linux / Docker)
# ==============================================================================

BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/apti_db_backup_${TIMESTAMP}.sql.gz"

mkdir -p "$BACKUP_DIR"

DB_CONTAINER="apti_mysql_db"
DB_NAME="${DB_NAME:-apti_placement_db}"
DB_USER="${DB_USER:-apti_user}"
DB_PASS="${DB_PASSWORD:-apti_secure_pass_2026!}"

echo "📦 Creating compressed MySQL backup for ${DB_NAME}..."

if docker ps | grep -q "$DB_CONTAINER"; then
  docker exec "$DB_CONTAINER" mysqldump -u"$DB_USER" -p"$DB_PASS" "$DB_NAME" | gzip > "$BACKUP_FILE"
else
  mysqldump -h "${DB_HOST:-127.0.0.1}" -P "${DB_PORT:-3306}" -u"$DB_USER" -p"$DB_PASS" "$DB_NAME" | gzip > "$BACKUP_FILE"
fi

if [ $? -eq 0 ]; then
  echo "✅ Backup successfully created at: ${BACKUP_FILE}"
  # Prune backups older than 30 days
  find "$BACKUP_DIR" -type f -name "*.sql.gz" -mtime +30 -delete
else
  echo "❌ Database backup failed!"
  exit 1
fi
