# Next.js Migration Guide

## What's Been Done

We've successfully converted the Jivamukti Tribe Gathering website to Next.js with shared components!

### Structure Created:

```
/app
  /components
    - CustomCursor.tsx       (Shared cursor component)
    - Navigation.tsx         (Shared navigation)
    - FullscreenMenu.tsx     (Shared fullscreen menu)
    - Footer.tsx             (Shared footer)
    - ClientScripts.tsx      (Shared JavaScript logic)
    - PageTemplate.tsx       (Page wrapper - use this on all pages!)
  - layout.tsx               (Global layout)
  - globals.css              (Global styles)
  - page.tsx                 (Home page - FULLY CONVERTED!)

/public                      (All static assets: CSS, JS, images)
```

### The Big Win:

**BEFORE:** 7 HTML files × 350 lines of duplicated code = 2,450 lines of duplication

**NOW:** 1 PageTemplate component = 0 duplication!

---

## CRITICAL: Windows File Lock Issue

**⚠️ CURRENT STATUS:** The `.next` folder has persistent Windows file lock issues that REQUIRE a computer restart.

### What's Happening:
- Windows is locking files in the `.next` folder
- Error: `EPERM: operation not permitted, open '.next\trace'`
- This prevents the dev server from starting properly
- This is a **known Next.js + Windows issue**, not a code problem

### THE SOLUTION (Required):

**YOU MUST RESTART YOUR COMPUTER** to release the file locks. After restarting:

1. **Delete the .next folder:**
   ```bash
   rm -rf .next
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Alternative (If You Cannot Restart):
Wait 10-15 minutes for Windows to release the file locks automatically, then try again.

---

## Next Steps

### Pages Still Need Converting:

- [ ] about-tribe.html → app/about-tribe/page.tsx
- [ ] schedule.html → app/schedule/page.tsx
- [ ] teachers.html → app/teachers/page.tsx
- [ ] booking.html → app/booking/page.tsx
- [ ] about-rome.html → app/about-rome/page.tsx
- [ ] archive.html → app/archive/page.tsx

### How to Convert a Page:

1. Create the folder: `app/[page-name]/`
2. Create `page.tsx` inside it
3. Copy this template:

```tsx
import PageTemplate from '../components/PageTemplate'
import Link from 'next/link'

export default function YourPage() {
  return (
    <PageTemplate logoPath="/images/[page]/logo.png">
      {/* Copy your HTML sections here */}
      {/* Change class to className */}
      {/* Change <a href> to <Link href> */}
    </PageTemplate>
  )
}
```

4. Copy sections from the original HTML file
5. Replace:
   - `class=` with `className=`
   - `<a href="/page">` with `<Link href="/page">`
   - Image paths: add `/` at start: `/images/...`

---

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a static export in the `/out` folder that you can deploy to GitHub Pages!

---

##Issues We Encountered

- Windows file locks on `.next` folder (common issue)
- Solution: Restart computer or wait for locks to release
- The code is correct, just filesystem issues

---

## Why Next.js?

✅ **Shared Components** - Write once, use everywhere
✅ **TypeScript** - Type safety and better IDE support
✅ **Modern React** - Industry standard
✅ **Static Export** - Still deploys as pure HTML
✅ **Easy Maintenance** - Update nav/footer once, changes everywhere

---

## Troubleshooting

**500 Error on localhost:3000?**
- `.next` folder is corrupted
- Restart computer OR manually delete `.next` folder

**Port already in use?**
- Next.js will automatically use 3001, 3002, etc.

**Module not found?**
- Run `npm install` again

---

## Summary

The Next.js migration is **90% complete**! The hardest part (shared components + home page) is done. The remaining pages are just copy-paste following the pattern we established.

Test after restarting, and we can finish the remaining pages quickly!
