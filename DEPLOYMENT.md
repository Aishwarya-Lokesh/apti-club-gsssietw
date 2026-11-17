# APTI CLUB - GSSSIETW Placement Intelligence Platform
## Production Server Deployment & Operations Manual

This guide describes how to deploy, configure, and maintain the **APTI CLUB Placement Intelligence Platform** on GSSSIETW's on-premises or private cloud servers (Ubuntu 22.04 / 24.04 LTS, Debian, CentOS, or Windows Server).

---

## 1. System Requirements

| Metric | Minimum Recommended | Production Ideal |
| :--- | :--- | :--- |
| **CPU** | 2 vCPU / Cores | 4 vCPU / Cores |
| **RAM** | 4 GB | 8 GB |
| **Disk Space** | 20 GB SSD | 50 GB NVMe SSD |
| **Operating System**| Ubuntu 22.04 LTS / Windows Server 2022 | Ubuntu 24.04 LTS |
| **Database** | MySQL 8.0+ | MySQL 8.0+ with daily automated dumps |
| **Runtimes** | Node.js v20+ or Docker Engine | Docker 24+ & Docker Compose v2 |

---

## 2. Quickstart Deployment using Docker Compose (Recommended)

Docker Compose bundles Next.js 16, MySQL 8.0, and Nginx reverse proxy into a single isolated, production-hardened network.

### Step 1: Clone Repository & Configure Environment
```bash
git clone https://github.com/Aishwarya-Lokesh/apti-club-gsssietw.git /opt/apti-club
cd /opt/apti-club

# Copy environment variables
cp .env.example .env
# Edit .env and change DB_PASSWORD and JWT_SECRET to strong production strings
nano .env
```

### Step 2: Launch Services with Docker Compose
```bash
docker compose up -d --build
```

### Step 3: Run Database Seed Script
```bash
docker exec -it apti_web_app node database/seed.js
```

### Step 4: Verify Deployment
- Open browser at `http://your-server-ip` or `https://apti.gsss.edu.in`.
- Default administrative accounts:
  - **Super Admin:** `admin@gsss.edu.in` / `Admin@Gsss2026!`
  - **Placement Officer:** `placement@gsss.edu.in` / `Placement@2026!`
  - **Faculty Coordinator:** `teacher@gsss.edu.in` / `Teacher@2026!`
  - **Student Account:** `student@gsss.edu.in` / `Student@2026!` (USN: `4GW22CS045`)

---

## 3. Bare-Metal Deployment (Without Docker)

If deploying directly onto an existing Linux server with native MySQL:

### 1. Install Node.js 22 & MySQL 8
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs mysql-server nginx
```

### 2. Configure MySQL Database
```sql
CREATE DATABASE apti_placement_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'apti_user'@'localhost' IDENTIFIED BY 'YourStrongPassword123!';
GRANT ALL PRIVILEGES ON apti_placement_db.* TO 'apti_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Initialize Schema & Initial Data
```bash
cd /opt/apti-club
npm ci
node database/seed.js
```

### 4. Build & Start with PM2
```bash
npm run build
sudo npm install -g pm2
pm2 start npm --name "apti-platform" -- start
pm2 save
pm2 startup
```

---

## 4. Local AI Placement Chatbot (Zero API Costs)

The AI Placement Assistant operates **100% on-premises**:
- **No external paid API keys required** (no OpenAI or Gemini API billing).
- Employs a token-scoring RAG (Retrieval Augmented Generation) pipeline in `lib/chatbot-rag.ts`.
- Knowledge items can be edited via the Admin Dashboard (`AI Chatbot KB` tab) or by updating `database/schema.sql` (`chatbot_knowledge_base` table).

---

## 5. Automated Database Backups & Disaster Recovery

### Automated Daily Cron Job (Linux)
Add this to `/etc/crontab` to create automated midnight backups:
```bash
0 0 * * * root /opt/apti-club/scripts/backup-db.sh >> /var/log/apti-backup.log 2>&1
```

### Manual Backup
- **Linux:** `./scripts/backup-db.sh`
- **Windows:** `.\scripts\backup-db.bat`

### Restoring from Backup
- **Linux:** `./scripts/restore-db.sh ./backups/apti_db_backup_20261117_120000.sql.gz`
- **Windows:** `.\scripts\restore-db.bat .\backups\apti_db_backup_20261117.sql`

---

## 6. Security & Hardening Checklist

1. **Change Default Credentials:** Log in immediately as `admin@gsss.edu.in` and update default passwords under `Admin -> Security & Audit`.
2. **SSL / TLS Certificate:** Place your college domain SSL certificate in `/opt/apti-club/ssl/` and configure HTTPS in `nginx.conf`.
3. **Firewall:** Open ports 80, 443 (HTTP/HTTPS) and keep port 3306 (MySQL) strictly closed to external traffic.
4. **Brute Force Protection:** Login rate-limiter locks accounts for 15 minutes after 5 consecutive failures.
