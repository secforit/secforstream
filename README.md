# SECforSTREAM Landing Page

A modern, enterprise-grade landing page for SECforSTREAM by SECFORIT - livestream authenticity verification platform.

## 🚀 Quick Start

The development server is already running! Open your browser to:

**http://localhost:3000**

## 📋 What's Included

### Sections
1. **Hero** - Eye-catching introduction with gradient effects and CTAs
2. **Problem** - The deepfake crisis explained with statistics
3. **Solution** - How StreamProof works in 3 simple steps
4. **How It Works** - Benefits for Streamers, Viewers, and Brands
5. **Trust Score** - Interactive trust score visualization
6. **Token Economics** - Token distribution and utility
7. **Building in Public** - Live metrics and community engagement
8. **CTA** - Final call-to-action with social links
9. **Footer** - Complete navigation and legal links

### Features
✅ Fully responsive (mobile, tablet, desktop)
✅ Modern gradient design with red/rose/orange theme
✅ Smooth animations and hover effects
✅ Tailwind CSS for styling
✅ TypeScript for type safety
✅ SEO optimized with meta tags for SECFORIT brand
✅ Fast performance with Next.js 14

## 🛠️ Development Commands

```bash
# Start development server (already running!)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
secforstream-landing/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TrustScore.tsx
│   │   ├── TokenEconomics.tsx
│   │   ├── BuildingPublic.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
Current color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#dc2626",    // Red-600
  secondary: "#ef4444",  // Red-500
  accent: "#b91c1c",     // Red-700
}
```

Full palette includes red, rose, and orange gradients. See `BRANDING.md` for complete color guide.

### Content
All content is in the component files under `app/components/`. Each section is self-contained and easy to edit.

### Links
Update the social links and CTAs in:
- `Hero.tsx` - Main CTAs
- `BuildingPublic.tsx` - Discord and X links
- `CTA.tsx` - All action links
- `Footer.tsx` - All footer links

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

### Other Platforms
```bash
npm run build
npm start
```

## 📝 Next Steps

1. **Configure Subdomain**: Set up DNS for stream.secforit.com (or chosen subdomain)

2. **Update Links**: Replace all `#` placeholders with real links:
   - Discord invite link
   - X (Twitter) profile: @SECforSTREAM
   - Pump.fun token link
   - Whitepaper URL

3. **Add SECFORIT Logo**: Place your SECFORIT logo in `public/` folder

4. **Customize Metrics**: Update the numbers in `BuildingPublic.tsx` with real metrics

5. **Add Analytics**: Consider adding Google Analytics or similar

6. **Deploy to Vercel**:
   - Connect your repository
   - Add custom domain: stream.secforit.com
   - Configure environment variables if needed

## 💡 Tips

- The site uses a dark theme - perfect for crypto/web3 projects
- All animations are CSS-based for performance
- Mobile-first responsive design
- Optimized for fast loading

## 🐛 Issues?

If you encounter any issues:
1. Check that Node.js is installed (`node --version`)
2. Try deleting `node_modules` and `.next`, then run `npm install` again
3. Make sure port 3000 is available

## 📦 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

---

## 🔗 Deployment Info

**Recommended Subdomain**: stream.secforit.com
**Token Ticker**: $SECS
**Parent Brand**: SECFORIT

See `BRANDING.md` for complete brand guidelines.

---

**Built for the Pump Fund hackathon by SECFORIT** 🚀

SECforSTREAM - Security for Streaming. Verify Authenticity.
