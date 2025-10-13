# Rome Tribe Gathering - Production Ready Website

This folder contains the production-ready version of the Rome Tribe Gathering website, cleaned up and ready to build.

## Structure

```
production/
├── index.html              # Home page (renamed from home.html)
├── about-rome.html         # About Rome page
├── about-tribe.html        # About Tribe page
├── archive.html            # Archive page
├── booking.html            # Booking page
├── schedule.html           # Schedule page
├── teachers.html           # Teachers page
├── css/
│   ├── rome-tribe.css      # Main stylesheet (Lumos framework styles)
│   └── teachers-styles.css # Additional styles for teachers page
├── images/                 # All page images organized by section
│   ├── home/
│   ├── about/
│   ├── about-rome/
│   ├── about-rome-hero/
│   ├── archive/
│   ├── booking/
│   ├── common/
│   ├── menu/
│   ├── schedule/
│   └── teachers/
└── assets/                 # Shared assets (logos, icons, etc.)
```

## Notes

- All components are embedded directly in the HTML files (not separate files)
- Image paths updated to work from root directory
- CSS paths corrected to point to `/css` folder
- All documentation files (*.md) have been removed
- Google Fonts are referenced via CDN links in the HTML head sections
- The home page has been renamed to `index.html` for standard web convention

## Next Steps

This folder is now ready to:
1. Be moved to a new repository
2. Have a build process added (if needed)
3. Be deployed to a hosting service
