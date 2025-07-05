# Africa Youth Festival 2025 - Website Clone (Tailwind CSS Version)

A modern, responsive website clone of the Africa Youth Festival 2025 website, built with HTML, Tailwind CSS, and JavaScript.

## ✨ Features

- **Modern Tailwind CSS Design**: Clean, professional design using Tailwind CSS framework
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Live countdown timer to the event
  - Mobile-friendly hamburger navigation with animations
  - Smooth scrolling between sections
  - Hover effects and card animations
- **Professional Visual Design**:
  - Dark hero section with background image
  - Modern color scheme (reds, oranges, grays)
  - Professional typography hierarchy
  - Card-based layouts with shadows
- **Real Content**: Includes actual images and content from the original website
- **Performance Optimized**: Fast loading with optimized code

## 📁 File Structure

```
africayouthfestival/
├── indexx.html         # Main HTML file (Tailwind CSS version)
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `indexx.html` in your web browser
2. **Local development**: Use a local server for the best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the website**: Navigate to `http://localhost:8000/indexx.html` in your browser

## 🎨 Design Features

### Color Scheme
- **Primary Red**: `#dc2626` (red-600)
- **Secondary Orange**: `#ea580c` (orange-600)
- **Dark Background**: `#0f172a` (slate-900)
- **Accent Yellow**: `#fbbf24` (yellow-300)

### Typography
- **Font**: Inter (loaded from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Cards**: White background with rounded corners and shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Fixed header with backdrop blur effect
- **Countdown**: Glassmorphism design with backdrop blur

## 📱 Sections Included

1. **Header/Navigation** - Fixed header with mobile hamburger menu
2. **Hero Section** - Dark background with countdown timer
3. **Registration CTA** - Red gradient banner
4. **Welcome Section** - Introduction to the festival
5. **Activities/Tracks** - Feature cards with icons
6. **Why Participate** - Benefits with image
7. **Key Objectives** - Goals with image
8. **Program Details** - Event information in cards
9. **Special Guests** - Guest photos and titles
10. **Join the Movement** - Final call to action
11. **Partners** - Partner logos
12. **Footer** - Contact information and social links

## 🛠️ Customization

### Content Updates
- Update event dates in `script.js` (line 25)
- Modify text content in `indexx.html`
- Replace images with your own assets

### Styling
- All styles use Tailwind CSS classes
- Responsive breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Custom styles can be added in the `<style>` section

### JavaScript Features
- Mobile navigation toggle
- Countdown timer
- Smooth scrolling
- Scroll-based header effects
- Intersection Observer animations
- Hover effects on cards

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- Tailwind CSS (optimized utility classes)
- Debounced scroll events
- Intersection Observer for animations
- Smooth scrolling
- Optimized images from CDN
- Minimal JavaScript footprint

## 🔧 Technical Details

### Dependencies
- **Tailwind CSS**: Loaded via CDN
- **Google Fonts**: Inter font family
- **Font Awesome**: Icons (via SVG)

### JavaScript Features
- Mobile menu with hamburger animation
- Real-time countdown timer
- Smooth scrolling navigation
- Scroll-based header transparency
- Card hover animations
- Intersection Observer for fade-in effects

## 🎯 Future Enhancements

- Add a registration form modal
- Include a blog/news section
- Add image galleries with lightbox
- Implement a contact form
- Add more interactive elements
- Include a schedule/agenda page
- Add dark/light mode toggle
- Implement search functionality

## 📄 License

This is a demo project created for educational purposes. The original design belongs to the Africa Youth Festival organization.

## 🆘 Support

For questions or issues with this clone:
1. Check the browser console for JavaScript errors
2. Ensure all files are in the same directory
3. Use a local server for best performance
4. Refer to the original website for reference

---

**Note**: This is a static website clone using Tailwind CSS. For a production website, you would need to:
- Set up a build process for Tailwind CSS
- Add a backend server
- Implement a database
- Add user authentication
- Include a content management system
- Set up proper hosting and domain 