#!/bin/bash
# ==============================================================================
# APTI CLUB - Database Restoration Script (Linux / Docker)
# Usage: ./scripts/restore-db.sh ./backups/apti_db_backup_XXXX.sql.gz
# ==============================================================================

if [ -z "$1" ]; then
  echo "Usage: $0 <path-to-backup-file.sql.gz>"
  exit 1
fi

BACKUP_FILE="$1"
DB_CONTAINER="apti_mysql_db"
DB_NAME="${DB_NAME:-apti_placement_db}"
DB_USER="${DB_USER:-apti_user}"
DB_PASS="${DB_PASSWORD:-apti_secure_pass_2026!}"

echo "⚠️ Restoring database ${DB_NAME} from ${BACKUP_FILE}..."

if [[ "$BACKUP_FILE" == *.gz ]]; then
  gunzip -c "$BACKUP_FILE" | docker exec -i "$DB_CONTAINER" mysql -u"$DB_USER" -p"$DB_PASS" "$DB_NAME"
else
  docker exec -i "$DB_CONTAINER" mysql -u"$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$BACKUP_FILE"
fi

if [ $? -eq 0 ]; then
  echo "✅ Database restored successfully!"
else
  echo "❌ Database restoration failed."
  exit 1
fi
