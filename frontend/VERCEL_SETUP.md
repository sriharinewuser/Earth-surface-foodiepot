# Vercel Deployment Setup - Complete Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Prepare Your Project
```bash
# Ensure you're in the frontend directory
cd frontend

# Install dependencies
npm install

# Test build locally
npm run build
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel --prod
```

#### Option B: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

### Step 3: Environment Variables
Add these in Vercel dashboard:
- `REACT_APP_API_URL=https://foodiespaw.onrender.com/api`
- `REACT_APP_PAYPAL_CLIENT_ID=your-paypal-client-id`

## 📋 Build Settings Summary

| Setting | Value |
|---------|--------|
| **Framework** | Create React App |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm ci` |
| **Root Directory** | `frontend` |

## 🔧 Files Created

1. **`vercel.json`** - Vercel configuration
2. **`.env`** - Environment variables
3. **`DEPLOYMENT.md`** - Complete deployment guide
4. **`axiosConfig.js`** - Updated for production API URL

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Environment variables set
- [ ] Local build successful
- [ ] API endpoints tested
- [ ] Responsive design verified

## 🎯 After Deployment

1. **Test the live URL**
2. **Verify all features work**
3. **Set up custom domain (optional)**
4. **Configure monitoring**

## 🆘 Troubleshooting

If deployment fails:
1. Check `package.json` scripts
2. Verify environment variables
3. Check build logs in Vercel dashboard
4. Ensure all files are committed to git

## 📞 Support

For issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Review deployment logs in Vercel dashboard
- Test locally with `npm run build && serve -s build`
