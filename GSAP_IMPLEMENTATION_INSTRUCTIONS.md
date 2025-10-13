# GSAP Implementation Instructions
## Rome Tribe Gathering Website

**Target**: Add professional GSAP animations without breaking existing functionality  
**Framework**: Eventually migrating to Webflow/Lumos  
**Constraint**: Keep lightweight, don't replace existing animations

---

## 🎯 Project Context

### **What Already Works (DO NOT TOUCH)**:
1. ✅ **Cursor-following image animations** on schedule page (vanilla JS in HTML)
2. ✅ **Teacher lineup interactions** with pink badge + image switching (vanilla JS in HTML)
3. ✅ **Menu toggle animations** (CSS transitions)
4. ✅ **All current page functionality**

**CRITICAL**: These are in `<script>` tags at the bottom of HTML files. Leave them COMPLETELY UNTOUCHED.

### **Current File Structure**:
```
├── index.html (778 lines)
├── about-tribe.html
├── about-rome.html
├── schedule.html
├── teachers.html
├── booking.html
├── archive.html
├── css/
│   ├── rome-tribe.css (3,225 lines - main stylesheet)
│   └── teachers-styles.css
└── images/ (313 files, 820 MB - heavy!)
```

### **CSS Framework**:
- Lumos-based design system
- Uses CSS custom properties (design tokens)
- BEM naming: `.component_element--modifier`
- Utility classes: `.u-*` prefix
- Webflow-compatible architecture

---

## 📋 What GSAP Should Add

### **1. Scroll-Based Animations** (Priority 1)
- Fade in elements on scroll
- Stagger animations for lists
- Parallax effects
- Progress indicators
- Reveal animations

### **2. Entrance Animations** (Priority 2)
- Page load hero animation
- Title reveals
- Image entrance effects
- Button reveals

### **3. Sticky/Pin Animations** (Priority 3)
- Sticky scroll sections (`.sticky-scroll_wrap` already exists!)
- Pin images while text scrolls
- Progress-based animations

### **4. Complex Interactions** (Priority 4)
- Smooth scroll
- Section transitions
- Horizontal scrolling sections
- Morphing effects

---

## 🎨 Where to Add GSAP

### **Step 1: Add GSAP Libraries (CDN)**

Add to `<head>` or before `</body>` in ALL HTML files:

```html
<!-- GSAP Core + ScrollTrigger -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollSmoother.min.js"></script>
```

**Location**: Right BEFORE the existing `<script>` tag with vanilla JS (don't remove that script!)

---

### **Step 2: Create GSAP Files**

Create new folder structure:
```
js/
├── gsap/
│   ├── config.js          # GSAP setup & defaults
│   ├── scroll.js          # Scroll-based animations
│   ├── entrance.js        # Page load animations
│   └── sticky.js          # Sticky/pin animations
```

**Then reference in HTML**:
```html
<!-- AFTER GSAP CDN libraries, BEFORE existing vanilla JS -->
<script src="js/gsap/config.js"></script>
<script src="js/gsap/scroll.js"></script>
<script src="js/gsap/entrance.js"></script>
<script src="js/gsap/sticky.js"></script>

<!-- THEN existing vanilla JS script (keep it!) -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // EXISTING CODE - DON'T TOUCH!
        ...
    });
</script>
```

---

## 🔒 Critical Rules

### **DO:**
- ✅ Add new GSAP animations to NEW elements
- ✅ Use data attributes: `data-gsap="fade-in"`, `data-scroll="reveal"`
- ✅ Keep file sizes small (each file < 10 KB)
- ✅ Use CDN for GSAP libraries
- ✅ Register ScrollTrigger plugin
- ✅ Add animations that enhance, not distract
- ✅ Test that existing animations still work

### **DON'T:**
- ❌ Remove or modify existing `<script>` tags in HTML
- ❌ Replace cursor-following image code
- ❌ Replace teacher lineup interactions
- ❌ Touch menu toggle code
- ❌ Add heavy libraries beyond GSAP core + ScrollTrigger
- ❌ Break existing functionality
- ❌ Create documentation (user doesn't want it)

---

## 🎯 Suggested Animations to Add

### **Home Page (`index.html`)**:

**Hero Section**:
```javascript
// Animate hero titles on load
gsap.from('.hero-collage_title-top', {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out'
});

gsap.from('.hero-collage_title-bottom', {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: 'power3.out'
});
```

**About Section**:
```javascript
// Fade in on scroll
gsap.utils.toArray('.home-about_heading, .home-about_description').forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});
```

**Teachers Grid**:
```javascript
// Stagger animation for teacher cards
gsap.from('.teachers_card', {
  scrollTrigger: {
    trigger: '.teachers_grid',
    start: 'top 70%',
  },
  y: 80,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8
});
```

---

### **About/Schedule Pages**:

**Sticky Scroll Section** (`.sticky-scroll_wrap` exists!):
```javascript
// Pin image while text scrolls
ScrollTrigger.create({
  trigger: '.sticky-scroll_wrap',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.sticky-scroll_image-block',
  pinSpacing: false
});

// Fade in text blocks progressively
gsap.utils.toArray('.sticky-scroll_text-block').forEach((block, i) => {
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: 'top 80%',
    },
    y: 100,
    opacity: 0,
    duration: 1
  });
});
```

**Hero Collage**:
```javascript
// Entrance animation for hero elements
gsap.from('.hero-collage_image-wrap', {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out'
});
```

---

## 🏗️ Webflow/Lumos Compatibility

### **Use Data Attributes** (Webflow-friendly):
```html
<!-- Add to HTML elements -->
<div data-gsap="fade-in">Content</div>
<div data-gsap="slide-up" data-delay="0.2">Content</div>
<div data-scroll-pin>Sticky content</div>
```

Then in JS:
```javascript
// Auto-initialize based on data attributes
document.querySelectorAll('[data-gsap="fade-in"]').forEach(el => {
  gsap.from(el, {
    scrollTrigger: el,
    opacity: 0,
    y: 30,
    duration: 0.8
  });
});
```

This approach:
- ✅ Works with Webflow
- ✅ Easy to add/remove animations
- ✅ Declarative (HTML controls animations)
- ✅ Maintainable

---

## 💾 Existing Code Structure

### **Existing Vanilla JS in `index.html`** (lines 556-778):
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // EFFECT 1: Schedule hover images + cursor following
    const dayWraps = document.querySelectorAll('.day_wrap');
    // ... 200+ lines of working code
    
    // EFFECT 2: Teachers lineup interactions
    const teacherCards = document.querySelectorAll('.teachers_card');
    // ... working code
});
```

**LEAVE THIS COMPLETELY ALONE!** Just add GSAP code BEFORE it.

---

## 🎨 CSS Classes to Animate

### **Text Classes** (from `rome-tribe.css`):
- `.text-display-xl` - Large display text
- `.text-h1`, `.text-h2`, `.text-h4` - Headings
- `.text-body-lg`, `.text-body-md` - Body text

### **Component Classes**:
- `.hero-collage_*` - Hero sections
- `.sticky-scroll_*` - Sticky scroll sections
- `.teachers_card` - Teacher cards
- `.day_wrap` - Schedule day sections
- `.button` - Buttons
- `.nav_wrap` - Navigation

### **Layout Classes**:
- `.tribe-grid_*` - Grid layouts
- `.card_primary_*` - Card components

---

## ⚡ Performance Requirements

**Keep GSAP setup lightweight**:
- GSAP Core: ~50 KB ✅
- ScrollTrigger: ~25 KB ✅
- Custom code: < 30 KB total ✅
- **Total JS**: < 105 KB ✅

**DON'T add**:
- ❌ Heavy plugins (Draggable, MorphSVG, etc.)
- ❌ Large animation libraries
- ❌ Unnecessary dependencies

**Site must remain fast!**

---

## 🧪 Testing Checklist

After adding GSAP, verify:
- [ ] Cursor-following images still work on schedule
- [ ] Teacher lineup interactions still work
- [ ] Menu toggle still works
- [ ] All new GSAP animations work
- [ ] No console errors
- [ ] Page loads quickly
- [ ] Animations are smooth (60fps)
- [ ] Mobile works correctly

---

## 📝 Code Style

Match existing patterns:

```javascript
// Use const/let
const elements = document.querySelectorAll('.class');

// Use arrow functions
elements.forEach(el => {
  gsap.from(el, { ... });
});

// Use modern JS
const { scrollY } = window;

// Clear comments
// === SCROLL ANIMATIONS ===
```

---

## 🎯 Example Implementation

### **js/gsap/config.js**:
```javascript
// GSAP Configuration
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.out",
  duration: 0.8
});

ScrollTrigger.defaults({
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse"
});
```

### **js/gsap/scroll.js**:
```javascript
// Scroll-based animations
function initScrollAnimations() {
  // Fade in headings
  gsap.utils.toArray('[data-gsap="fade-in"]').forEach(el => {
    gsap.from(el, {
      scrollTrigger: el,
      y: 50,
      opacity: 0
    });
  });
  
  // Stagger grids
  gsap.utils.toArray('.teachers_grid').forEach(grid => {
    gsap.from(grid.children, {
      scrollTrigger: grid,
      y: 80,
      opacity: 0,
      stagger: 0.1
    });
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

---

## 🚀 Priority Order

1. **Hero entrance animations** (biggest visual impact)
2. **Scroll fade-ins** (easy, looks great)
3. **Sticky scroll enhancement** (already have structure)
4. **Stagger animations** (teachers, schedule)
5. **Advanced effects** (parallax, morphing)

---

## 🎨 Design System Variables

Use these CSS variables in GSAP:

```javascript
// Get values from CSS
const sectionSpace = getComputedStyle(document.documentElement)
  .getPropertyValue('--_spacing---section-space--main');

// Use in animations
gsap.to(element, {
  y: sectionSpace,
  duration: 1
});
```

**Available variables** (from `rome-tribe.css`):
- `--_spacing---space--1` through `--_spacing---space--8`
- `--_typography---font-size--*`
- `--swatch--*` (colors)

---

## ⚠️ What NOT to Do

### **Don't replace this code** (lines 556-778 in index.html):
```javascript
// Schedule hover images + Expandable rows
const dayWraps = document.querySelectorAll('.day_wrap');
dayWraps.forEach(day => {
    const rows = day.querySelectorAll('.day_row[data-image]');
    const image = day.querySelector('.day_image');
    // ... cursor following code - KEEP THIS!
});

// Teachers lineup
const teacherCards = document.querySelectorAll('.teachers_card');
// ... badge interaction code - KEEP THIS!
```

### **Don't touch CSS**:
- rome-tribe.css is finalized
- Don't add animation-specific CSS
- Use GSAP's inline styling instead

---

## 📁 File Locations

**Add GSAP scripts here**:
1. Create folder: `js/gsap/`
2. Create files:
   - `js/gsap/config.js`
   - `js/gsap/scroll.js`
   - `js/gsap/entrance.js`
   - `js/gsap/sticky.js`

**Reference in HTML**:
- Add CDN links in `<head>` or before `</body>`
- Add custom scripts BEFORE existing vanilla JS
- Keep existing scripts at the end

---

## 🎯 Elements to Animate

### **Suggested Data Attributes to Add**:

**Home page**:
```html
<h1 class="hero-collage_title-top" data-gsap="hero-title">ROME</h1>
<h2 class="text-h1" data-gsap="fade-up" data-delay="0.2">...</h2>
<div class="teachers_grid" data-gsap="stagger-grid">...</div>
```

**About/Rome pages**:
```html
<section class="sticky-scroll_wrap" data-gsap="sticky-section">
<div class="hero-collage_content" data-gsap="hero-entrance">
```

**All pages**:
```html
<div class="button" data-gsap="fade-in" data-delay="0.5">
<nav class="nav_wrap" data-gsap="nav-entrance">
```

---

## 🎬 Animation Examples

### **Simple but Effective**:

**Fade + Slide Up**:
```javascript
gsap.from('.text-h1', {
  scrollTrigger: {
    trigger: '.text-h1',
    start: 'top 80%'
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});
```

**Stagger (Teachers, Schedule)**:
```javascript
gsap.from('.teachers_card', {
  scrollTrigger: '.teachers_grid',
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8
});
```

**Sticky Pin** (enhance existing `.sticky-scroll_wrap`):
```javascript
ScrollTrigger.create({
  trigger: '.sticky-scroll_wrap',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.sticky-scroll_images-container',
  anticipatePin: 1
});
```

---

## 💡 Smart Approach

### **Use Automatic Discovery**:

Instead of hardcoding selectors, use data attributes:

```javascript
// Auto-apply fade-in to any element with attribute
document.querySelectorAll('[data-gsap-fade]').forEach(el => {
  gsap.from(el, {
    scrollTrigger: el,
    opacity: 0,
    y: 30,
    duration: parseFloat(el.dataset.duration) || 0.8,
    delay: parseFloat(el.dataset.delay) || 0
  });
});
```

Then just add to HTML:
```html
<div data-gsap-fade data-delay="0.2">Animated content</div>
```

---

## 🏗️ Webflow/Lumos Preparation

**Structure code for easy Webflow migration**:

1. **Use data attributes** (Webflow-friendly)
2. **Modular JS files** (can import to Webflow)
3. **No hardcoded selectors** (use attributes)
4. **CSS variable integration** (matches Lumos)
5. **Component-based** (matches Webflow components)

---

## 📊 Current Site Stats

**Assets**:
- CSS: 75 KB (optimized) ✅
- Images: 820 MB (HEAVY - being optimized) 🔴
- GSAP will add: ~75 KB for libraries + ~30 KB custom = 105 KB ✅

**Performance Target**: Keep total JS under 150 KB

---

## 🎨 Animation Style Guide

**Match the vibe**:
- Subtle, professional
- Not flashy or distracting
- Enhance readability
- Smooth, polished
- Modern but not over-the-top

**Timing**:
- Duration: 0.6-1.2s (not too fast, not too slow)
- Ease: power2.out, power3.out (smooth deceleration)
- Stagger: 0.1-0.2s (comfortable rhythm)
- Delay: Max 0.5s (don't make user wait)

---

## ✅ Summary for Claude

**Your job**:
1. Add GSAP libraries (CDN)
2. Create modular JS files in `js/gsap/`
3. Add scroll animations, entrance effects, sticky enhancements
4. Use data attributes for Webflow compatibility
5. Keep total JS under 150 KB
6. **DO NOT touch existing vanilla JS animations**
7. **DO NOT create documentation**
8. Test that everything still works

**Key files to modify**:
- All HTML files (add CDN links + data attributes)
- Create new `js/gsap/*.js` files
- **Don't touch**: `css/rome-tribe.css`, existing `<script>` tags

**The user likes their current animations - enhance, don't replace!**

---

Good luck! 🚀

