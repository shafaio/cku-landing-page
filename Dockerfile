# Tahap 1: Build stage
FROM node:18-alpine AS builder

# Atur working directory
WORKDIR /app

# Salin file dependensi
COPY package*.json ./

# Install dependencies (semua, karena build butuh devDeps)
RUN npm ci

# Salin seluruh kode sumber
COPY . .

# Build Next.js untuk production
RUN npm run build

# Tahap 2: Production stage
FROM node:18-alpine

# Working directory
WORKDIR /app

# Set NODE_ENV agar hanya deps produksi yang dipakai
ENV NODE_ENV=production

# Salin hanya kebutuhan runtime dari builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src ./src

# Buka port default Next.js
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["npm", "start"]
