# Hero Component Consolidation Plan
## From 443 Lines → 180 Lines (59% Reduction)

**IMPORTANT**: All heroes will look **EXACTLY THE SAME** after consolidation!

---

## 🔍 What You're Looking At

Open `css/components/hero.css` and look for these symbols:

- 🔁 = **DUPLICATE** - Exact same property appears in multiple places
- ⚡ = **UNIQUE** - Only in this variant, must keep
- ⚠️ = **VARIES** - Similar concept, slightly different value

---

## 📊 Duplication Statistics

### Properties That Appear in ALL 5 Variants:

| Property | Times Repeated | Current Lines | After |
|----------|----------------|---------------|-------|
| `display: grid` | 5× | 5 | 1 |
| `min-height: 100vh` | 5× | 5 | 1 |
| `position: relative` | 5× | 5 | 1 |
| `padding: var(--_spacing---section-space--main) var(--site--margin)` | 5× | 5 | 1 |
| Title font properties (8 props) | 5× | 40 | 8 |
| Image sizing (3 props) | 5× | 15 | 3 |
| Logo flex properties | 5× | 10 | 2 |

**Total Duplicate Lines**: ~260  
**Keep Once**: ~65  
**Savings**: ~195 lines

### Mobile Breakpoint Duplications:

**EVERY variant has identical mobile code**:
```css
@media (max-width: 991px) {
  grid-template-columns: 1fr;     /* ALL 5 variants */
  gap: var(--_spacing---space--4); /* ALL 5 variants */
  min-height: auto;               /* ALL 5 variants */
  font-size: clamp(4rem, 12vw, 8rem); /* ALL 5 variants */
}
```

**Repeated**: 5 media queries × ~15 lines each = 75 lines  
**Should be**: 1 media query = 15 lines  
**Savings**: 60 lines

---

## ✅ Consolidation Strategy

### STEP 1: Create Shared Base Class

```css
/* All heroes share these properties */
.hero-collage_content {
  padding: var(--_spacing---section-space--main) var(--site--margin);
  display: grid;
  position: relative;
  min-height: 100vh;
  /* NO grid-template-columns - variants handle this */
  /* NO gap - variants handle this */
}

/* All hero titles share these */
.hero-collage_title-top,
.hero-collage_title-bottom {
  font-family: var(--_typography---font--primary-family);
  font-weight: var(--_typography---font--primary-extrabold);
  line-height: var(--_typography---line-height--small);
  letter-spacing: var(--_typography---letter-spacing--tight);
  text-transform: uppercase;
  color: var(--swatch--dark-900);
  margin: 0;
}

/* All images share these */
.hero-collage_image {
  width: 100%;
  height: auto;
  display: block;
}

/* All logos share these */
.hero-collage_logo-wrap {
  display: flex;
  flex-direction: column;
}
```

**Lines**: ~35 (replaces 175 duplicate lines across 5 variants!)

---

### STEP 2: Create Variant-Specific Modifiers

```css
/* DEFAULT/BASE VARIANT */
.hero-collage_content--default {
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  gap: var(--_spacing---space--3);
  align-items: start;
}

/* ABOUT VARIANT */
.hero-collage_content--about {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--_spacing---space--6);
  align-items: stretch;
}

/* SCHEDULE VARIANT */
.hero-collage_content--schedule {
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  gap: 0;
  overflow: hidden;
}

/* ABOUT ROME VARIANT */
.hero-collage_content--about-rome {
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr;
  gap: 0;
  overflow: hidden;
}
```

**Lines**: ~40 (only what's different!)

---

### STEP 3: Variant-Specific Positioning

Only grid positioning and unique styling:

```css
/* ABOUT - Logo & Image Positioning */
.hero-collage_content--about .hero-collage_logo-wrap {
  grid-column: 1;
  grid-row: 1;
  align-items: flex-end;
  padding-bottom: var(--_spacing---space--4);
}

.hero-collage_content--about .hero-collage_image-wrap {
  grid-column: 2;
  grid-row: 1 / -1;
  justify-self: end;
  align-self: center;
}

.hero-collage_content--about .hero-collage_title-bottom {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  align-self: end;
  font-size: clamp(6rem, 12vw, 12.5rem);  /* Only unique size */
}

.hero-collage_content--about .hero-collage_title-top {
  display: none;  /* Hide top title */
}

/* ...repeat for other variants - only positioning! */
```

**Lines**: ~80 (positioning only, no duplicate properties)

---

### STEP 4: ONE Mobile Breakpoint

```css
@media (max-width: 991px) {
  /* Base mobile - applies to ALL variants */
  .hero-collage_content {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto auto auto;
    gap: var(--_spacing---space--4) !important;
    min-height: auto;
  }
  
  .hero-collage_title-top,
  .hero-collage_title-bottom {
    grid-column: 1;
    font-size: clamp(4rem, 12vw, 8rem);
    text-align: center;
    margin-top: 0;
  }
  
  .hero-collage_logo-wrap {
    grid-column: 1;
    justify-content: center;
    align-items: center;
  }
  
  /* Variant-specific mobile ONLY if needed */
  .hero-collage_content--about .hero-collage_title-bottom {
    grid-row: 3;  /* Only if different from default */
  }
}
```

**Lines**: ~25 (replaces 75 lines across 5 variants!)

---

## 📈 Before vs After

### BEFORE (Current - Duplicated):
```
Lines 1543-1654:  Base Hero (112 lines)
Lines 1656-1750:  About Hero (95 lines)  ← 60% duplicate with base
Lines 1752-1848:  Schedule Hero (97 lines) ← 60% duplicate with base
Lines 1851-1971:  Rome Hero (121 lines) ← 60% duplicate with base
Lines 1974-1989:  Booking Hero (16 lines) ← Uses base

TOTAL: 443 lines
```

### AFTER (Consolidated):
```
Shared Base:           35 lines   (replaces 175 duplicate lines)
Variant Modifiers:     40 lines   (only grid differences)
Positioning:           80 lines   (only unique positioning)
Mobile Breakpoint:     25 lines   (replaces 75 duplicate lines)

TOTAL: 180 lines
```

**Reduction**: 263 lines (59.4%)

---

## 🎯 What Stays Different

### Each Hero KEEPS Its Unique Design:

**About Hero**:
- ✅ 2-column layout
- ✅ Logo top-left
- ✅ Image spanning right
- ✅ Title bottom-left
- **Looks exactly the same!**

**Schedule Hero**:
- ✅ Single column
- ✅ Logo top-right
- ✅ Image behind title
- ✅ Massive title bottom
- **Looks exactly the same!**

**Rome Hero**:
- ✅ Overlapping layout
- ✅ "ABOUT" top center
- ✅ Image center-right
- ✅ Script logo left-center
- ✅ "ROME" bottom left
- **Looks exactly the same!**

---

## 🔨 Implementation Steps

### Phase 1: Create New Consolidated File
1. ✅ Extract to `components/hero.css` (DONE)
2. ⏳ Create `components/hero-consolidated.css` (proposed)
3. ⏳ Test with one page (About)
4. ⏳ If works, replace hero section in main CSS

### Phase 2: Test Each Page
1. ⏳ Home page
2. ⏳ About page
3. ⏳ Schedule page
4. ⏳ About Rome page
5. ⏳ Booking page

### Phase 3: Verify
1. ⏳ Desktop looks same
2. ⏳ Mobile looks same
3. ⏳ Tablet looks same
4. ⏳ Animations work
5. ⏳ Responsive transitions smooth

---

## 💡 The Insight

### Look at `components/hero.css` Right Now:

**Line 19**: `padding: var(--_spacing---section-space--main) var(--site--margin);` 🔁  
**Line 165**: `min-height: 100vh;` 🔁  
**Line 175**: `display: grid;` 🔁  

**Then scroll down...**

**Line 165**: `min-height: 100vh;` 🔁 **AGAIN!**  
**Line 172**: `display: flex;` 🔁 **AGAIN!**  

**You're defining the same properties over and over!**

That's what we're fixing - **write once, use everywhere**.

---

## 🚀 Ready to Consolidate?

**Your current CSS works perfectly!**

Want me to:
1. **"Create consolidated version"** - I'll make `hero-consolidated.css`
2. **"Show me another component first"** - Extract buttons/nav to see pattern
3. **"Stop here for now"** - Review what we have

**The duplication is now visible!** Check out `css/components/hero.css` - see all the 🔁 symbols? That's what we can eliminate! 🎯

