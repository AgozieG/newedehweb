# Render Deployment Guide

## Overview
This guide will help you deploy your Dr. Michael portfolio website and backend server on Render.

## Prerequisites
- Render account (free at https://render.com)
- GitHub account with this repository pushed

## Deployment Steps

### 1. **Push Code to GitHub**
Make sure all files are committed and pushed to your GitHub repository:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. **Create a New Web Service on Render**
1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `drmichael` (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node server.js`
   - **Plan**: Free tier is fine initially

### 3. **Set Environment Variables**
In the Render dashboard, add these environment variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `4000` |

- Leave `PORT` as `4000` - Render automatically maps it to the correct port

### 4. **Deploy**
Click "Create Web Service" and Render will automatically:
- Build your React app (`npm run build`)
- Install dependencies
- Start the server (`node server.js`)

Your app will be live at: `https://drmichael.onrender.com` (or your chosen name)

## What Changed
- ✅ Added `server.js` - Express backend to serve your React app
- ✅ Added `cors` and `express` dependencies for backend
- ✅ Added environment variable support with dotenv
- ✅ Created `render.yaml` for infrastructure configuration
- ✅ Updated npm scripts: `start`, `dev-full`
- ✅ Created `.env.example` and `.env.local` for configuration

## Running Locally

**Development (Frontend only):**
```bash
npm run dev
```

**Production (Full app with server):**
```bash
npm run build    # Build React app
npm start        # Start Express server
```

**Development (with full stack):**
```bash
npm run dev-full
```

## Important Notes

### Free Tier Limitations
- App spins down after 15 minutes of inactivity (takes a moment to wake up)
- Limited to 750 hours/month (~31 days of continuous running)

### Optional Upgrades
- If you need always-on availability, upgrade to paid plan ($7/month)
- Monitor usage in Render dashboard

## Troubleshooting

### Port Issues
The server reads `PORT` from environment variables. Render automatically sets this - don't hardcode ports!

### Build Fails
Check Render's build logs for errors. Common issues:
- Missing dependencies (run `npm install` locally first)
- Environment variables not set

### App Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check Render logs: Dashboard → Your App → Logs

## File Reference
- **server.js** - Main Express server
- **render.yaml** - Render deployment configuration
- **.env.example** - Template for environment variables
- **.env.local** - Local development variables (git ignored)

## Support
- Render docs: https://render.com/docs
- Express docs: https://expressjs.com/
- CORS issues: Check your frontend API calls point to the correct URL
