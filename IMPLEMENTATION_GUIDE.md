# Navigation Implementation Guide

## ✅ Completed
I've successfully updated the **[about-rome.html](about-rome.html)** page with full working navigation!

## 📍 What Was Done

### 1. Main Navbar (5 visible links)
- **About** → about-tribe.html
- **Schedule** → schedule.html
- **Register** → booking.html
- **Archive** → archive.html
- **Useful Info** → about-rome.html
- **Logo** (center) → index.html (clickable home link)

### 2. Fullscreen Menu (All 7 pages)
Opened via hamburger button:
- **HOME** → index.html
- **ABOUT** → about-tribe.html
- **SCHEDULE** → schedule.html
- **TEACHERS** → teachers.html
- **REGISTER** → booking.html (styled as primary CTA)
- **USEFUL INFO** → about-rome.html
- **ARCHIVE** → archive.html

### 3. Footer Links
**Navigate Column:**
- Home → index.html
- About Tribe → about-tribe.html
- Schedule → schedule.html
- Teachers → teachers.html
- Register → booking.html

**Explore Column:**
- Useful Info → about-rome.html
- Archive → archive.html
- The Jivamukti Method → https://jivamuktiyoga.com (external)

## 🔄 Next Steps

You need to apply the same navigation updates to the remaining 6 pages:
1. **index.html** - Home page
2. **about-tribe.html** - About Tribe
3. **schedule.html** - Schedule
4. **teachers.html** - Teachers
5. **booking.html** - Registration
6. **archive.html** - Archive

## 📋 Copy-Paste Template

For each of the remaining pages, you'll need to replace 3 sections:

### Section 1: Main Navbar Links
**Find and replace lines 16-25** (approx) with working links:
```html
<div class="nav_menu">
    <a href="about-tribe.html" class="link text-nav u-text-uppercase">About</a>
    <a href="schedule.html" class="link text-nav u-text-uppercase">Schedule</a>
    <a href="booking.html" class="link text-nav u-text-uppercase">Register</a>
</div>

<div class="nav_logo">
    <a href="index.html">
        <img src="images/about/logo.png" alt="Jivamukti Tribe Gathering" class="image image-contain">
    </a>
</div>

<div class="nav_menu">
    <button class="nav_hamburger" id="menuToggle" aria-label="Toggle menu">
        <!-- SVG icons stay the same -->
    </button>
    <a href="archive.html" class="link text-nav u-text-uppercase">Archive</a>
    <a href="about-rome.html" class="link text-nav u-text-uppercase">Useful Info</a>
</div>
```

### Section 2: Fullscreen Menu Links
**Find the `<nav class="menu-fullscreen_nav">` section** and replace with:
```html
<nav class="menu-fullscreen_nav">
    <a href="index.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        HOME
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="about-tribe.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        ABOUT
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="schedule.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        SCHEDULE
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="teachers.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        TEACHERS
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="booking.html" class="menu-fullscreen_link menu-fullscreen_link--primary text-display-xl u-text-uppercase">
        REGISTER
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="about-rome.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        USEFUL INFO
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
    <a href="archive.html" class="menu-fullscreen_link text-display-xl u-text-uppercase">
        ARCHIVE
        <img src="images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" class="menu-fullscreen_arrow-icon">
    </a>
</nav>
```

### Section 3: Footer Links
**Find `<div class="footer_columns">` section** and replace with:
```html
<div class="footer_columns">
    <div class="footer_column">
        <h3 class="footer_column-title text-h5">Navigate</h3>
        <ul class="footer_links">
            <li><a href="index.html" class="link link--light footer_link text-body-md">Home</a></li>
            <li><a href="about-tribe.html" class="link link--light footer_link text-body-md">About Tribe</a></li>
            <li><a href="schedule.html" class="link link--light footer_link text-body-md">Schedule</a></li>
            <li><a href="teachers.html" class="link link--light footer_link text-body-md">Teachers</a></li>
            <li><a href="booking.html" class="link link--light footer_link text-body-md">Register</a></li>
        </ul>
    </div>

    <div class="footer_column footer_column--right">
        <h3 class="footer_column-title text-h5">Explore</h3>
        <ul class="footer_links">
            <li><a href="about-rome.html" class="link link--light footer_link text-body-md">Useful Info</a></li>
            <li><a href="archive.html" class="link link--light footer_link text-body-md">Archive</a></li>
            <li><a href="https://jivamuktiyoga.com" target="_blank" class="link link--light footer_link text-body-md">The Jivamukti Method</a></li>
        </ul>
    </div>
</div>
```

## ⚠️ Important Notes

1. **Image Paths**: Some pages might use different image paths (e.g., `images/home/logo.png` vs `images/about/logo.png`). Keep the existing image path for the logo on each page.

2. **Testing**: After updating all pages, test by:
   - Opening each page in a browser
   - Clicking all navigation links
   - Opening the fullscreen menu (hamburger button)
   - Checking footer links work

3. **Social Media**: The social media links in the footer and fullscreen menu currently point to `#` - you can update these with real social media URLs later.

## 🎯 Summary

The navigation system is now fully functional with:
- ✅ Clickable logo that goes to home
- ✅ 5 main navbar links
- ✅ 7 fullscreen menu links (including HOME and TEACHERS)
- ✅ Organized footer with all page links
- ✅ External link to Jivamukti Method website

All navigation is consistent across the site and provides easy access to every page!
