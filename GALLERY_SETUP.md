# Dome Gallery - Image Management Guide

## Quick Start: Adding Images

### 1. **Place Images in the Gallery Folder**
```
src/assets/gallery/
  ├── image1.jpg
  ├── image2.jpg
  ├── image3.png
  └── ...more images
```

### 2. **Edit Gallary.jsx - Add Imports**
Open `src/Component/Gallary.jsx` and add this at the top with other imports:

```jsx
import img1 from '../assets/gallery/image1.jpg'
import img2 from '../assets/gallery/image2.jpg'
import img3 from '../assets/gallery/image3.png'
```

### 3. **Update the domeImages Array**
Replace or add to the `domeImages` array:

```jsx
const domeImages = [
  { src: img1, alt: 'Event Moment 1' },
  { src: img2, alt: 'Event Moment 2' },
  { src: img3, alt: 'Event Moment 3' },
  // Add more as needed - they'll automatically tile across the dome
]
```

That's it! The dome gallery will auto-populate with all images.

---

## Guidelines

### Image Count
- **Minimum**: 1 image (will repeat)
- **Optimal**: 6-20 images for good coverage
- **Maximum**: No limit, but 30+ images might feel repetitive

### Image Format
- Supports: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- Recommended: JPG for photos (smaller file size)

### Image Size
- Any size works - they auto-crop to fit tiles
- Recommended: 600x600px or larger for sharp display
- Keep file size < 500KB each for faster loading

### Alt Text
The alt text is:
- Used for accessibility (screen readers)
- Shows on hover/inspection
- Examples: "Main Stage Setup", "Crowd Energy", "Backstage Action"

---

## Current Images (Reference)
- `shashankGalaxy.jpg` - Background/galaxy texture
- `teamsimage/shashank.jpeg` - Team photo
- `teamsimage/shreebhagan.jpeg` - Team photo
- `logo.png` - Emblazon festival logo

---

## Example: Adding 5 New Festival Photos

**File structure:**
```
src/assets/gallery/
  ├── stage.jpg
  ├── crowd.jpg
  ├── lights.jpg
  ├── performance.jpg
  └── moments.jpg
```

**Gallary.jsx:**
```jsx
import stage from '../assets/gallery/stage.jpg'
import crowd from '../assets/gallery/crowd.jpg'
import lights from '../assets/gallery/lights.jpg'
import performance from '../assets/gallery/performance.jpg'
import moments from '../assets/gallery/moments.jpg'

const domeImages = [
  { src: stage, alt: 'Main Stage Setup' },
  { src: crowd, alt: 'Audience Energy' },
  { src: lights, alt: 'Festival Lights' },
  { src: performance, alt: 'Live Performance' },
  { src: moments, alt: 'Event Moments' },
]
```

**Save → Done!** The gallery updates automatically.

---

## Features
- ✅ Auto-rotation (continuous gentle spin)
- ✅ Mouse follow (cursor steers dome)
- ✅ Clickable images (enlarge on click)
- ✅ Mobile friendly (responsive sizing)
- ✅ Full-page fixed layout
- ✅ Smooth animations

## Troubleshooting

**Images not showing?**
- Check file path is correct (case-sensitive on Mac/Linux)
- Ensure import statement matches file name exactly
- Check that `domeImages` array is updated

**Blurry images?**
- Use images 600px or larger
- JPG format recommended for photos

**Gallery not rotating?**
- Check `autoRotate={true}` in Gallary.jsx component
- Check browser console for errors

---

For questions, check the DomeGallery.jsx component (747 lines) for advanced configuration like rotation speed, segment count, etc.
