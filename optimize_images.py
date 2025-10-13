#!/usr/bin/env python3
"""
Image Optimization Script
Rome Tribe Gathering Website

Optimizes all images:
- Converts to WebP format (best compatibility)
- Compresses with quality settings
- Maintains aspect ratios
- Organizes by standard ratios
- Creates detailed report
"""

import os
import sys
from pathlib import Path
from PIL import Image
import json
from datetime import datetime

# Configuration
CONFIG = {
    'output_format': 'webp',  # or 'avif' if supported
    'quality': 85,  # 85 = high quality, good compression
    'max_dimensions': {
        'hero': (1920, 1920),      # Hero images
        'teacher': (800, 1000),    # Teacher photos (portrait)
        'ui': (1200, 1200),        # UI elements
        'icon': (200, 200),        # Small icons
    },
    'preserve_ratios': True,
    'backup_originals': True,
}

# Standard aspect ratios
ASPECT_RATIOS = {
    '1:1': (1, 1),      # Square
    '4:3': (4, 3),      # Standard
    '3:2': (3, 2),      # Classic photo
    '16:9': (16, 9),    # Widescreen
    '4:5': (4, 5),      # Portrait
    '3:4': (3, 4),      # Portrait
    '2:3': (2, 3),      # Portrait tall
}

def get_aspect_ratio(width, height):
    """Determine closest standard aspect ratio"""
    ratio = width / height
    
    closest = None
    min_diff = float('inf')
    
    for name, (w, h) in ASPECT_RATIOS.items():
        standard_ratio = w / h
        diff = abs(ratio - standard_ratio)
        if diff < min_diff:
            min_diff = diff
            closest = name
    
    return closest

def get_image_category(filepath):
    """Categorize image by path"""
    path_str = str(filepath).lower()
    
    if 'teacher' in path_str:
        return 'teacher'
    elif any(x in path_str for x in ['hero', 'home', 'about', 'schedule', 'booking']):
        return 'hero'
    elif 'icon' in path_str or filepath.suffix.lower() == '.svg':
        return 'icon'
    else:
        return 'ui'

def optimize_image(input_path, output_path, max_size, quality=85):
    """Optimize a single image"""
    try:
        # Open image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if saving as JPEG or WebP
        if img.mode in ('RGBA', 'LA', 'P'):
            # Create white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Get original size
        original_size = img.size
        
        # Resize if needed (maintain aspect ratio)
        if img.width > max_size[0] or img.height > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Ensure output directory exists
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Save optimized image
        if output_path.suffix.lower() == '.webp':
            img.save(output_path, 'WEBP', quality=quality, method=6)
        elif output_path.suffix.lower() == '.avif':
            img.save(output_path, 'AVIF', quality=quality)
        else:
            img.save(output_path, quality=quality, optimize=True)
        
        # Get sizes
        original_file_size = input_path.stat().st_size
        optimized_file_size = output_path.stat().st_size
        savings = original_file_size - optimized_file_size
        savings_percent = (savings / original_file_size * 100) if original_file_size > 0 else 0
        
        return {
            'status': 'success',
            'original_size': original_size,
            'optimized_size': img.size,
            'original_file_size': original_file_size,
            'optimized_file_size': optimized_file_size,
            'savings': savings,
            'savings_percent': savings_percent,
            'aspect_ratio': get_aspect_ratio(*img.size),
        }
        
    except Exception as e:
        return {
            'status': 'error',
            'error': str(e)
        }

def process_directory(input_dir, output_dir, dry_run=False):
    """Process all images in directory"""
    
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    
    # Find all image files (exclude SVGs - they're already optimized)
    image_extensions = {'.jpg', '.jpeg', '.png', '.tif', '.tiff', '.bmp'}
    image_files = [f for f in input_path.rglob('*') if f.suffix.lower() in image_extensions]
    
    print(f"\n{'='*60}")
    print(f"IMAGE OPTIMIZATION SCRIPT")
    print(f"Rome Tribe Gathering Website")
    print(f"{'='*60}\n")
    print(f"Found {len(image_files)} images to process")
    print(f"Output format: {CONFIG['output_format'].upper()}")
    print(f"Quality: {CONFIG['quality']}")
    print(f"Dry run: {dry_run}")
    print(f"\n{'='*60}\n")
    
    if dry_run:
        print("DRY RUN MODE - No files will be modified\n")
    
    results = {
        'processed': 0,
        'errors': 0,
        'total_original_size': 0,
        'total_optimized_size': 0,
        'files': [],
        'non_web_files': [],
    }
    
    # Find non-web files first
    non_web_extensions = {'.tif', '.tiff', '.zip', '.pdf', '.psd', '.ai'}
    non_web_files = [f for f in input_path.rglob('*') if f.suffix.lower() in non_web_extensions]
    
    if non_web_files:
        print(f"🚨 FOUND {len(non_web_files)} NON-WEB FILES (should be deleted):\n")
        for f in non_web_files:
            size_mb = f.stat().st_size / (1024 * 1024)
            print(f"   ❌ {f.name} ({size_mb:.2f} MB) - {f.parent.name}/")
            results['non_web_files'].append({
                'path': str(f.relative_to(input_path)),
                'size': f.stat().st_size,
                'type': f.suffix
            })
        print(f"\nTotal waste: {sum(f.stat().st_size for f in non_web_files) / (1024*1024):.2f} MB\n")
        print(f"{'='*60}\n")
    
    # Process images
    for i, img_file in enumerate(image_files, 1):
        # Get category
        category = get_image_category(img_file)
        max_size = CONFIG['max_dimensions'].get(category, (1200, 1200))
        
        # Create output path
        relative_path = img_file.relative_to(input_path)
        output_file = output_path / relative_path.parent / f"{relative_path.stem}.{CONFIG['output_format']}"
        
        print(f"[{i}/{len(image_files)}] Processing: {img_file.name}")
        print(f"    Category: {category}")
        print(f"    Max size: {max_size}")
        
        if not dry_run:
            result = optimize_image(img_file, output_file, max_size, CONFIG['quality'])
            
            if result['status'] == 'success':
                orig_mb = result['original_file_size'] / (1024 * 1024)
                opt_mb = result['optimized_file_size'] / (1024 * 1024)
                
                print(f"    ✅ {result['original_size'][0]}×{result['original_size'][1]} → {result['optimized_size'][0]}×{result['optimized_size'][1]}")
                print(f"    📦 {orig_mb:.2f} MB → {opt_mb:.2f} MB ({result['savings_percent']:.1f}% savings)")
                print(f"    📐 Aspect ratio: {result['aspect_ratio']}")
                
                results['processed'] += 1
                results['total_original_size'] += result['original_file_size']
                results['total_optimized_size'] += result['optimized_file_size']
                
                results['files'].append({
                    'path': str(relative_path),
                    'output': str(output_file.relative_to(output_path)),
                    'category': category,
                    'aspect_ratio': result['aspect_ratio'],
                    'original_size': result['original_file_size'],
                    'optimized_size': result['optimized_file_size'],
                    'savings_percent': result['savings_percent'],
                })
            else:
                print(f"    ❌ ERROR: {result['error']}")
                results['errors'] += 1
        else:
            print(f"    [DRY RUN] Would optimize to: {output_file}")
        
        print()
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"OPTIMIZATION COMPLETE")
    print(f"{'='*60}\n")
    
    if not dry_run:
        print(f"✅ Processed: {results['processed']} images")
        print(f"❌ Errors: {results['errors']}")
        
        orig_total = results['total_original_size'] / (1024 * 1024)
        opt_total = results['total_optimized_size'] / (1024 * 1024)
        total_savings = results['total_original_size'] - results['total_optimized_size']
        total_savings_mb = total_savings / (1024 * 1024)
        total_savings_percent = (total_savings / results['total_original_size'] * 100) if results['total_original_size'] > 0 else 0
        
        print(f"\n📊 SIZE COMPARISON:")
        print(f"   Original:  {orig_total:.2f} MB")
        print(f"   Optimized: {opt_total:.2f} MB")
        print(f"   Savings:   {total_savings_mb:.2f} MB ({total_savings_percent:.1f}%)")
        
        # Save report
        report = {
            'date': datetime.now().isoformat(),
            'config': CONFIG,
            'summary': {
                'processed': results['processed'],
                'errors': results['errors'],
                'original_size_mb': orig_total,
                'optimized_size_mb': opt_total,
                'savings_mb': total_savings_mb,
                'savings_percent': total_savings_percent,
            },
            'non_web_files': results['non_web_files'],
            'files': results['files'],
        }
        
        report_path = Path('IMAGE_OPTIMIZATION_REPORT.json')
        with open(report_path, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\n📄 Report saved to: {report_path}")
        
        # Create markdown summary
        create_markdown_report(report)
    
    return results

def create_markdown_report(data):
    """Create human-readable markdown report"""
    
    md = f"""# Image Optimization Report
## Rome Tribe Gathering Website

**Date**: {datetime.now().strftime('%B %d, %Y at %H:%M')}  
**Format**: {CONFIG['output_format'].upper()}  
**Quality**: {CONFIG['quality']}

---

## 📊 Summary

| Metric | Value |
|--------|-------|
| Images Processed | {data['summary']['processed']} |
| Errors | {data['summary']['errors']} |
| Original Size | {data['summary']['original_size_mb']:.2f} MB |
| Optimized Size | {data['summary']['optimized_size_mb']:.2f} MB |
| **Total Savings** | **{data['summary']['savings_mb']:.2f} MB ({data['summary']['savings_percent']:.1f}%)** |

---

## 🚨 Non-Web Files Found

These files should be deleted (not web-compatible):

"""
    
    if data['non_web_files']:
        for nw in data['non_web_files']:
            size_mb = nw['size'] / (1024 * 1024)
            md += f"- ❌ `{nw['path']}` ({size_mb:.2f} MB) - {nw['type']} format\n"
        
        total_waste = sum(nw['size'] for nw in data['non_web_files']) / (1024 * 1024)
        md += f"\n**Total Waste**: {total_waste:.2f} MB\n"
    else:
        md += "None found ✅\n"
    
    md += """
---

## 📈 Optimization By Category

"""
    
    # Group by category
    categories = {}
    for f in data['files']:
        cat = f['category']
        if cat not in categories:
            categories[cat] = {
                'count': 0,
                'original_size': 0,
                'optimized_size': 0,
            }
        categories[cat]['count'] += 1
        categories[cat]['original_size'] += f['original_size']
        categories[cat]['optimized_size'] += f['optimized_size']
    
    for cat, stats in categories.items():
        orig_mb = stats['original_size'] / (1024 * 1024)
        opt_mb = stats['optimized_size'] / (1024 * 1024)
        savings = ((stats['original_size'] - stats['optimized_size']) / stats['original_size'] * 100)
        
        md += f"""
### {cat.title()}
- Files: {stats['count']}
- Before: {orig_mb:.2f} MB
- After: {opt_mb:.2f} MB
- Savings: {savings:.1f}%
"""
    
    md += """
---

## 📐 Aspect Ratio Distribution

"""
    
    # Group by aspect ratio
    ratios = {}
    for f in data['files']:
        ratio = f['aspect_ratio']
        ratios[ratio] = ratios.get(ratio, 0) + 1
    
    for ratio, count in sorted(ratios.items(), key=lambda x: x[1], reverse=True):
        md += f"- **{ratio}**: {count} images\n"
    
    md += """
---

## 🎯 Next Steps

1. ✅ Review optimized images in `images-optimized/`
2. ⚠️ Delete non-web files from `images/` folder
3. ✅ Test optimized images on website
4. ✅ Replace original images with optimized versions
5. ✅ Update HTML `<img>` tags to use `.webp` extension

---

## 🔧 How to Use Optimized Images

### Option A: Replace Originals (Recommended)
```powershell
# Backup originals
Rename-Item "images" "images-original-backup"

# Use optimized
Rename-Item "images-optimized" "images"

# Update HTML references (if needed)
```

### Option B: Selective Replacement
Copy specific optimized images to replace heaviest ones.

---

**Generated by**: optimize_images.py
"""
    
    report_path = Path('IMAGE_OPTIMIZATION_REPORT.md')
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(md)
    
    print(f"📄 Markdown report saved to: {report_path}")

def main():
    """Main execution"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Optimize images for web')
    parser.add_argument('--input', default='images', help='Input directory (default: images)')
    parser.add_argument('--output', default='images-optimized', help='Output directory (default: images-optimized)')
    parser.add_argument('--quality', type=int, default=85, help='Quality (1-100, default: 85)')
    parser.add_argument('--format', default='webp', choices=['webp', 'avif', 'jpg'], help='Output format')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without doing it')
    parser.add_argument('--max-size', type=int, default=1920, help='Max dimension (default: 1920px)')
    
    args = parser.parse_args()
    
    # Update config
    CONFIG['quality'] = args.quality
    CONFIG['output_format'] = args.format
    
    # Update all max dimensions based on max-size
    for key in CONFIG['max_dimensions']:
        CONFIG['max_dimensions'][key] = (args.max_size, args.max_size)
    
    # Check if input directory exists
    if not Path(args.input).exists():
        print(f"❌ Error: Input directory '{args.input}' not found!")
        sys.exit(1)
    
    # Check for required library
    try:
        from PIL import Image
    except ImportError:
        print("❌ Error: Pillow library not installed!")
        print("\nInstall with: pip install Pillow")
        sys.exit(1)
    
    # Process images
    results = process_directory(args.input, args.output, dry_run=args.dry_run)
    
    print(f"\n✅ Done!\n")
    
    if not args.dry_run and results['processed'] > 0:
        print(f"Optimized images saved to: {args.output}/")
        print(f"\nTo use them, review and then replace your images/ folder")

if __name__ == '__main__':
    main()

