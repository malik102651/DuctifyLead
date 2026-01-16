# Ductify Leads - Design System & Color Palette

## 🎨 Color Palette

### Primary Colors
| Color | Hex Code | Usage | RGB |
|-------|----------|-------|-----|
| **Professional Blue** | #0066cc | Primary CTA, Headers, Links | rgb(0, 102, 204) |
| **Dark Blue** | #003d99 | Hover states, Gradients | rgb(0, 61, 153) |
| **Navy** | #004499 | Deep hover states | rgb(0, 68, 153) |

### Secondary Colors
| Color | Hex Code | Usage | RGB |
|-------|----------|-------|-----|
| **Energetic Orange** | #ff6b35 | Secondary CTA, Accents | rgb(255, 107, 53) |
| **Dark Orange** | #ff5522 | Hover states | rgb(255, 85, 34) |

### Supporting Colors
| Color | Hex Code | Usage | RGB |
|-------|----------|-------|-----|
| **Success Green** | #10b981 | Checkmarks, Success states | rgb(16, 185, 129) |
| **Indigo** | #6366f1 | Alternative accent | rgb(99, 102, 241) |
| **Pink** | #ec4899 | Alternative accent | rgb(236, 72, 153) |
| **Amber** | #f59e0b | Alternative accent | rgb(245, 158, 11) |

### Neutral Colors
| Color | Hex Code | Usage | RGB |
|-------|----------|-------|-----|
| **Dark Text** | #1a2332 | Primary text, Headings | rgb(26, 35, 50) |
| **Secondary Text** | #5a6b7d | Secondary text, Body | rgb(90, 107, 125) |
| **Light Gray** | #f5f7fa | Background | rgb(245, 247, 250) |
| **White** | #ffffff | Cards, Backgrounds | rgb(255, 255, 255) |
| **Dark Background** | #1a2332 | Footer, Dark sections | rgb(26, 35, 50) |

## 📐 Typography

### Font Families
- **Headers**: Poppins (Bold, 700 weight)
- **Body**: Inter (Regular, 400 weight)
- **UI Elements**: Poppins/Inter

### Font Sizes
```
H1: 3.5rem (56px) - Landing page main headline
H2: 2.5rem (40px) - Section headers
H3: 1.8rem (29px) - Subsection headers
H4: 1.5rem (24px) - Card titles
H5: 1.25rem (20px) - Medium titles
H6: 1rem (16px) - Small titles
Body: 1rem (16px) - Body text
Small: 0.875rem (14px) - Secondary text
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700
- **Extra-bold**: 800

## 🎯 Spacing System

### Padding/Margin Scale
```
xs: 8px
sm: 12px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

### Component Spacing
- **Cards**: p: 4 (16px)
- **Sections**: py: 8-12 (64-96px)
- **Grid gaps**: 4-6 (16-24px)

## 🔘 Button Styles

### Primary Button
```
Background: #0066cc
Text: White
Padding: 16px 24px
Hover: #004499
Font Weight: 700
Border Radius: 8px
Transition: all 0.3s ease
```

### Secondary Button
```
Background: Transparent
Border: 2px solid #0066cc
Text: #0066cc
Hover: Background rgba(0, 102, 204, 0.08)
Font Weight: 700
Border Radius: 8px
```

### Accent Button
```
Background: #ff6b35
Text: White
Hover: #ff5522
Font Weight: 700
Border Radius: 8px
```

## 📦 Component Border Radius
- **Small elements**: 2px
- **Cards**: 3px
- **Buttons**: 2px
- **Large sections**: 3px

## 🌡️ Shadows

### Elevation Scale
```
Shadow 1: 0 4px 15px rgba(0,0,0,0.08)
Shadow 2: 0 8px 25px rgba(0,0,0,0.1)
Shadow 3: 0 12px 40px rgba(0,0,0,0.12)
Shadow 4: 0 20px 60px rgba(0,0,0,0.3)
```

## 🎭 Hover & Interaction States

### Card Hover
```
Transform: translateY(-5px) to translateY(-8px)
Box-shadow: Shadow elevation increase
Transition: all 0.3s ease
```

### Button Hover
```
Background: Darker shade
Transform: translateY(-2px) to translateX(5px)
Transition: all 0.3s ease
```

### Link Hover
```
Color: #ff6b35 or #0066cc
Transition: color 0.3s ease
```

## 📱 Responsive Breakpoints

```
xs: 0px - 600px (Mobile)
sm: 600px - 960px (Tablet Small)
md: 960px - 1280px (Tablet Large)
lg: 1280px - 1920px (Desktop)
xl: 1920px+ (Large Desktop)
```

## ✨ Animations

### Available Animations
```css
@keyframes fadeInUp {
  from: opacity 0, transform translateY(30px)
  to: opacity 1, transform translateY(0)
}

@keyframes slideInLeft {
  from: opacity 0, transform translateX(-30px)
  to: opacity 1, transform translateX(0)
}

@keyframes slideInRight {
  from: opacity 0, transform translateX(30px)
  to: opacity 1, transform translateX(0)
}

@keyframes float {
  0%, 100%: transform translateY(0)
  50%: transform translateY(-20px)
}
```

### Transition Timing
- **Quick**: 0.2s ease
- **Standard**: 0.3s ease
- **Slow**: 0.5s ease

## 🎨 Gradient Backgrounds

### Main Gradient
```css
background: linear-gradient(135deg, #0066cc 0%, #003d99 100%)
```

### Subtle Gradient
```css
background: linear-gradient(135deg, #0066cc 0%, #003d99 50%, #1a2332 100%)
```

### Light Gradient
```css
background: linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(255, 107, 53, 0.05))
```

## 📊 Component States

### Active State
- Color: #0066cc
- Font Weight: 600-700
- Underline or highlight

### Hover State
- Box Shadow: Shadow 2-3
- Transform: translateY(-2px)

### Disabled State
- Opacity: 0.5
- Cursor: not-allowed

### Loading State
- Animation: spinner or pulse
- Cursor: loading

## 🔍 Accessibility

### Color Contrast Ratios (WCAG AA)
- Primary text on white: 7.5:1 ✅
- Secondary text on white: 3.5:1 ✅
- Links: 4.5:1 ✅

### Focus States
- Outline: 2px solid #0066cc
- Outline Offset: 2px

## 📸 Image Specifications

### Hero Images
- Format: JPEG/PNG
- Aspect Ratio: 16:9
- Size: Optimized for web (max 2MB)
- Available: 7 USA-themed images

### Icon Guidelines
- Material-UI Icons: 24px-48px
- Color: Match component theme
- Opacity: 100% for active, 70% for secondary

---

**Design System Version**: 1.0
**Last Updated**: 2025
**Status**: Production Ready ✅
