# Prajapati ERP Pro Upload Guide

## Upload Location
Upload ALL files and folders to the GitHub repository root.

Correct root files:
- package.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- app/
- components/
- lib/
- supabase/
- docs/

## Do Not Upload Inside Another Folder
Wrong:
- prajapati-advertising-erp-pro-nextjs/package.json

Correct:
- package.json should be directly visible in GitHub root.

## Vercel Settings
Framework: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: leave blank

## Environment Variables
Add in Vercel:
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY

## Supabase
Run:
supabase/schema.sql

## URLs
Dashboard:
/
Orders:
/orders
Operations:
/operations
Expenses:
/expenses
Client Portal:
/client-portal
Reports:
/reports
Documents:
/documents
