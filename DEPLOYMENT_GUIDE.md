# Deployment Guide

## Quick Start Deployment

### Option 1: Vercel (Recommended)

1. **Connect GitHub**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Follow prompts** and connect your GitHub repo

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Connect Git**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub & authorize
   - Choose `Jordandaniel2/feed-children-today`

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Click Deploy

### Option 3: GitHub Pages

1. **Update vite.config.ts**
   ```typescript
   export default {
     base: '/feed-children-today/',
     // ... rest of config
   }
   ```

2. **Push and enable Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, /root

## Environment Variables

Create `.env.local` (not committed):
```
VITE_API_URL=https://api.example.com
```

## Custom Domain Setup

1. **Register Domain**
   - GoDaddy, Namecheap, etc.

2. **Point DNS**
   - A Record: `185.199.108.153`
   - A Record: `185.199.109.153`
   - A Record: `185.199.110.153`
   - A Record: `185.199.111.153`
   - CNAME: `www.yourdomain.com` → GitHub/Vercel/Netlify CNAME

3. **Configure in Platform**
   - Add custom domain in settings
   - Enable HTTPS/SSL

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Test responsive design on mobile
- [ ] Test donation form (demo)
- [ ] Test smooth scroll navigation
- [ ] Check animations work
- [ ] Verify meta tags for SEO
- [ ] Add Google Analytics
- [ ] Set up contact form backend
- [ ] Add SSL certificate
- [ ] Test performance with Lighthouse

## Performance Optimization

```bash
npm run build
# Check dist/ folder size
```

**Expected bundle size**: ~150-200KB (gzipped)

## Next Steps

1. ✅ Repository is ready
2. 🚀 Deploy to Vercel/Netlify
3. 🔗 Add custom domain
4. 📊 Set up analytics
5. 💬 Enable contact form
6. 🔄 Integrate payment APIs
