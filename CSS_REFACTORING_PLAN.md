# Rome Tribe CSS Refactoring Plan

## Current Problems Identified

### 1. **Structure Issues**
- 3,052 lines in a single file
- 25+ major sections with unclear boundaries
- Page-specific styles mixed with reusable components
- No clear separation between framework and custom code

### 2. **Variable System Chaos**
- Inconsistent naming: `--_spacing---space--8` vs `--site--margin`
- Over-engineered clamp() calculations repeated everywhere
- Variables not following a clear hierarchy
- Some use BEM-like naming, others don't

### 3. **Utility Class Problems**
- Only 28 utility classes, but spacing is still messy
- Missing common utilities (flex, grid, display, etc.)
- Inconsistent naming: `.u-` prefix used but not systematic
- Gaps in coverage (space-1,2,3,4,8 but missing 5,6,7)

### 4. **Duplication Issues**
- Hero collage has 4+ variants (about, schedule, rome, booking)
- Multiple fullscreen menu implementations
- Repeated button styles
- Container patterns duplicated across sections

### 5. **Organization**
- Components mixed with page-specific styles
- No clear dependency order
- Hard to find specific styles
- Comments help but structure doesn't scale

---

## Proposed Solution: Modular Architecture

### **Phase 1: Split Into Multiple Files** (RECOMMENDED)

```
css/
├── core/
│   ├── 01-reset.css          # Browser resets & normalize
│   ├── 02-variables.css      # All CSS custom properties
│   ├── 03-typography.css     # Font loading & text styles
│   └── 04-base.css           # Base element styles
│
├── utilities/
│   ├── spacing.css           # Margin, padding utilities
│   ├── layout.css            # Flex, grid, position utilities
│   ├── display.css           # Show/hide, visibility
│   └── typography.css        # Text utilities
│
├── components/
│   ├── buttons.css           # All button variants
│   ├── nav.css               # Navigation components
│   ├── hero.css              # Hero sections (unified)
│   ├── cards.css             # Card components
│   ├── forms.css             # Form elements
│   └── menu.css              # Menu overlays
│
├── sections/
│   ├── sticky-scroll.css     # Sticky scroll sections
│   ├── tribe-grid.css        # Grid layouts
│   └── schedule.css          # Schedule-specific
│
├── pages/
│   ├── home.css              # Home page specific
│   ├── about.css             # About page specific
│   ├── booking.css           # Booking page specific
│   └── archive.css           # Archive page specific
│
└── rome-tribe.css            # Main import file
```

### **Phase 2: Alternative - Keep Single File (Cleaner Organization)**

If you prefer a single file, we can:
1. Reorganize into clear sections
2. Remove duplicates
3. Create a proper utility system
4. Consolidate component variants
5. Reduce from 3,052 lines to ~1,500-1,800 lines

---

## Recommended Cleanup Actions

### **Immediate Wins** (High Impact, Low Risk)
1. ✅ Consolidate 4 hero variants into 1 base + modifiers
2. ✅ Create systematic spacing utilities (0-10 scale)
3. ✅ Unify button styles (primary, secondary, ghost)
4. ✅ Remove duplicate container classes
5. ✅ Simplify variable names

### **Medium Priority**
6. ✅ Create flex/grid utility classes
7. ✅ Standardize navigation components
8. ✅ Consolidate menu implementations
9. ✅ Clean up z-index system
10. ✅ Organize media queries

### **Long Term**
11. Split into multiple files
12. Document component patterns
13. Create style guide
14. Set up build process (optional)

---

## Decision Point

**Choose Your Approach:**

### Option A: Single File Refactor (Faster)
- **Time**: ~30-45 minutes
- **Result**: ~1,500 lines, well-organized
- **Pros**: No build system, one file to manage
- **Cons**: Still a large file

### Option B: Multi-File Architecture (Better Long-term)
- **Time**: ~1-2 hours
- **Result**: Modular, maintainable system
- **Pros**: Easier to maintain, scale, and understand
- **Cons**: Need to update HTML imports or use build tool

### Option C: Hybrid Approach (Best of Both)
- Keep current single file
- Create cleaned version
- Add optional modular files for future
- **Time**: ~1 hour

---

## What Would You Like to Do?

1. **Quick Fix**: Just clean up duplicates and organize sections (30 min)
2. **Full Refactor**: Single file, complete restructure (45 min)
3. **Modular Split**: Multiple files, professional architecture (1-2 hrs)
4. **Show Me Issues First**: Generate a detailed report of duplicates

---

## Variables Cleanup Preview

### Current (Messy):
```css
--_spacing---space--8: clamp(4 * 1rem, ((4 - ((5.81 - 4)...
--site--margin: clamp(1 * 1rem, ((1 - ((3 - 1)...
--_spacing---section-space--main: clamp(7 * 1rem...
```

### Proposed (Clean):
```css
--space-1: 0.5rem;    /* 8px */
--space-2: 0.75rem;   /* 12px */
--space-3: 1rem;      /* 16px */
--space-4: 1.5rem;    /* 24px */
--space-5: 2rem;      /* 32px */
--space-6: 2.5rem;    /* 40px */
--space-7: 3rem;      /* 48px */
--space-8: 4rem;      /* 64px */

/* Responsive variants */
--space-section: clamp(7rem, 10vw, 12rem);
--space-container: clamp(1rem, 3vw, 3rem);
```

---

**Ready to proceed?** Tell me which option you prefer!

