# 🎨 3D Portfolio Website — Personal Portfolio (React + Three.js + GSAP + Tailwind)

▶ **LIVE DEMO**: [Add your deployment URL here]

![Portfolio](https://img.shields.io/badge/Portfolio-3D%20Website-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.161.0-000000?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.5-0055FF?style=for-the-badge&logo=framer)

A modern, interactive 3D portfolio website featuring immersive animations, glassmorphism effects, and a stunning visual experience. Built with React, Three.js for 3D graphics, GSAP for advanced animations, and Tailwind CSS for styling. Showcases projects, skills, experience, and education with smooth scroll-triggered animations and an elegant glass surface navigation bar.

---

## 🚀 Project Highlights

- **3D Graphics Integration**: Leveraged Three.js via React Three Fiber and Drei for interactive 3D starfield backgrounds and animated planet models.
- **Advanced Animation System**: Implemented GSAP ScrollTrigger for scroll-based animations, Framer Motion for component transitions, and custom flowing menu effects with edge-detection hover states.
- **Glassmorphism UI**: Created a liquid glass navigation bar with transparent surfaces, blur effects, and dynamic color transitions using custom shader-based components.
- **Interactive Project Gallery**: Built a circular gallery component using OGL (WebGL library) with draggable/scrollable 3D image planes, bend effects, and real-time distortion animations.
- **Performance Optimized**: Implemented code splitting, lazy loading, and optimized 3D rendering with proper cleanup and memory management.
- **Responsive Design**: Fully responsive layout with mobile-first approach, adaptive animations, and touch-friendly interactions.

---

## ✨ Features

### 🎭 Interactive Sections
- **Hero Section**: Animated typewriter effect, 3D starfield background, and scroll-triggered text animations
- **Skills Showcase**: Interactive skill cards with hover effects and category-based organization
- **Experience Timeline**: Vertical timeline component with animated entries and detailed work history
- **Education**: Card-based layout displaying academic achievements and certifications
- **Projects Gallery**: 
  - Circular 3D gallery with draggable/scrollable project showcases
  - Category-based filtering (Web Apps, Android Apps, Machine Learning, All)
  - Accordion-style menu with flowing animations
  - Project cards with embedded circular galleries
- **Contact Form**: EmailJS integration for seamless contact form submissions
- **Footer**: Social links and additional navigation

### 🎨 Visual Effects
- **Glass Surface Navigation**: Liquid glass effect with transparent background, blur, and RGB displacement
- **Flowing Menu**: GSAP-powered vertical menu with edge-detection hover animations and marquee effects
- **Scroll Animations**: ScrollFloat component with character-by-character reveal animations
- **3D Backgrounds**: Animated starfield using Three.js particles
- **Smooth Transitions**: Framer Motion page transitions and component animations

---

## 🧭 Architecture & Flow

```
flowchart TD
    A[User Visits Portfolio] --> B[Navbar with Glass Surface]
    B --> C[Hero Section with 3D Stars]
    C --> D[Scroll-Triggered Animations]
    D --> E[Skills Section]
    E --> F[Experience Timeline]
    F --> G[Projects Gallery]
    G --> H[Category Filtering]
    H --> I[Circular 3D Gallery]
    I --> J[Education Section]
    J --> K[Contact Form]
    K --> L[Footer]
    
    M[GSAP Animations] --> D
    N[Three.js Rendering] --> C
    N --> I
    O[Tailwind Styling] --> B
    O --> E
    O --> F
    O --> G
```

Component Architecture:

```
flowchart LR
    App[App.js] --> Navbar[Navbar + PillNav]
    App --> Hero[Hero + ScrollFloat]
    App --> Skills[Skills Section]
    App --> Experience[Experience Timeline]
    App --> Projects[Projects + CategoryAccordion]
    App --> Education[Education Cards]
    App --> Contact[Contact Form]
    App --> Footer[Footer]
    
    Navbar --> GlassSurface[Glass Surface Component]
    Projects --> CircularGallery[OGL Circular Gallery]
    Projects --> FlowingMenu[Flowing Menu Vertical]
    Hero --> StarsCanvas[Three.js Stars]
    Hero --> HeroBgAnimation[Background Animation]
```

---

## 🛠️ Tech Stack

### Frontend Core
- **React 18.2.0**: Component-based UI architecture
- **React Router DOM 6.22.1**: Client-side routing
- **Styled Components 6.1.8**: CSS-in-JS styling with theme support

### 3D Graphics & Animation
- **Three.js 0.161.0**: Core 3D graphics library
- **@react-three/fiber 8.15.16**: React renderer for Three.js
- **@react-three/drei 9.99.0**: Useful helpers for React Three Fiber
- **OGL 1.0.7**: Minimal WebGL library for circular gallery
- **maath 0.10.7**: Math utilities for 3D calculations

### Animation Libraries
- **GSAP 3.13.0**: Professional animation library with ScrollTrigger
- **Framer Motion 11.0.5**: Production-ready motion library
- **react-tilt 1.0.2**: 3D tilt effects on hover

### UI & Styling
- **Tailwind CSS 3.4.14**: Utility-first CSS framework
- **Material-UI 5.15.10**: React component library
- **react-icons 5.0.1**: Icon library
- **typewriter-effect 2.21.0**: Typewriter animation

### Utilities
- **react-scroll 1.9.0**: Smooth scrolling
- **react-vertical-timeline-component 3.6.0**: Timeline component
- **@emailjs/browser 4.4.1**: Email service integration

---

## 📦 File Structure

```
3d-portfolio-website/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── planet/                    # 3D planet model assets
│   │   ├── scene.gltf
│   │   ├── scene.bin
│   │   └── textures/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Earth.jsx          # 3D Earth component
│   │   │   └── Stars.jsx         # Starfield background
│   │   ├── cards/
│   │   │   ├── EducationCard.jsx
│   │   │   ├── ExperienceCard.jsx
│   │   │   └── ProjectCard.jsx    # Project card with circular gallery
│   │   ├── HeroBgAnimation/
│   │   │   ├── index.js          # Background animation
│   │   │   └── HeroBgAnimationStyle.js
│   │   ├── sections/
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx          # Hero with ScrollFloat
│   │   │   ├── Projects.jsx       # Projects with CategoryAccordion
│   │   │   └── Skills.jsx
│   │   ├── CategoryAccordion.jsx  # Accordion menu for categories
│   │   ├── CircularGallery.jsx   # OGL-based 3D circular gallery
│   │   ├── FlowingMenu.jsx       # Horizontal flowing menu
│   │   ├── FlowingMenuVertical.jsx # Vertical flowing menu with GSAP
│   │   ├── GlassSurface.jsx      # Glassmorphism component
│   │   ├── Navbar.jsx            # Main navbar wrapper
│   │   ├── PillNav.jsx           # Animated pill navigation
│   │   └── ScrollFloat.jsx       # Scroll-triggered text animation
│   ├── data/
│   │   └── constants.js          # Portfolio data (Bio, Skills, Projects, etc.)
│   ├── images/
│   │   └── HeroImage.jpg
│   ├── utils/
│   │   ├── motion.js             # Framer Motion variants
│   │   └── Themes.js             # Theme configuration
│   ├── App.js                    # Main app component
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles + Tailwind directives
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suhas-Ramesha/3d-portfolio-website.git
   cd 3d-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Customization

### Update Portfolio Data
Edit `src/data/constants.js` to update:
- Personal information (Bio)
- Skills and technologies
- Work experience
- Education history
- Projects with images and links

### Theme Configuration
Modify `src/utils/Themes.js` to customize:
- Color schemes
- Dark/light mode variants
- Gradient backgrounds

### 3D Models
Replace 3D assets in `public/planet/` with your own GLTF models.

---

## 🧪 Performance Optimizations

- **Code Splitting**: Lazy loading for heavy components
- **3D Rendering**: Optimized Three.js scene with proper disposal
- **Animation Performance**: GSAP hardware acceleration and will-change properties
- **Image Optimization**: Compressed images and lazy loading
- **Bundle Size**: Tree shaking and production builds

---

## 📱 Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Touch-friendly interactions for mobile devices
- Adaptive animations based on screen size
- Optimized 3D rendering for mobile GPUs

---

## 🔒 Security & Best Practices

- Environment variables for sensitive data (EmailJS keys)
- Input validation for contact forms
- XSS protection with React's built-in escaping
- HTTPS deployment recommended

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy build/ folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Suhas Ramesha**

- GitHub: [@Suhas-Ramesha](https://github.com/Suhas-Ramesha)
- LinkedIn: [suhas-ramesha](https://www.linkedin.com/in/suhas-ramesha/)
- Portfolio: [Add your portfolio URL]

---

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for amazing React + Three.js integration
- [GSAP](https://greensock.com/gsap/) for powerful animation capabilities
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [OGL](https://github.com/oframe/ogl) for minimal WebGL library
- All contributors and the open-source community

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Suhas-Ramesha/3d-portfolio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/Suhas-Ramesha/3d-portfolio-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/Suhas-Ramesha/3d-portfolio-website)
![GitHub license](https://img.shields.io/github/license/Suhas-Ramesha/3d-portfolio-website)

---

⭐ **If you found this project helpful, please consider giving it a star!**
