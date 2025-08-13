# Frontend Deployment Guide - Vercel

## Quick Deploy Steps

### 1. Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### 2. Deploy from Frontend Directory
```bash
cd frontend
vercel --prod
```

### 3. Manual Deployment via Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Import your Git repository** (GitHub/GitLab/Bitbucket)
4. **Configure the project:**
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm ci`

### 4. Environment Variables Setup

Add these environment variables in Vercel dashboard:

| Variable | Value | Description |
|----------|--------|-------------|
| `REACT_APP_API_URL` | `https://foodiespaw.onrender.com/api` | Backend API URL |
| `REACT_APP_PAYPAL_CLIENT_ID` | `your-paypal-client-id` | PayPal Client ID |

### 5. Build Settings Configuration

**Build & Development Settings:**
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm ci`

### 6. Custom Domain (Optional)

1. Go to project settings in Vercel dashboard
2. Navigate to "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed

## Troubleshooting

### Common Issues:

1. **Build fails with "Module not found"**
   - Ensure all dependencies are listed in `package.json`
   - Run `npm install` locally to verify

2. **API calls failing**
   - Check `REACT_APP_API_URL` environment variable
   - Ensure CORS is enabled on backend

3. **PayPal buttons not loading**
   - Verify `REACT_APP_PAYPAL_CLIENT_ID` is set correctly

### Local Testing Before Deploy:
```bash
cd frontend
npm install
npm run build
npm start
```

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify API calls work
- [ ] Check PayPal integration
- [ ] Test responsive design
- [ ] Verify images load properly
