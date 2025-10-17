# 3D Animation Portfolio Website

A stunning 3D animated portfolio website built with React, Three.js, and Tailwind CSS. Features interactive 3D scenes, smooth animations, and a modern responsive design.

## 🚀 Features

- **3D Hero Section**: Interactive 3D scene with floating geometric shapes and particle systems
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, dark theme with gradient accents and glassmorphism effects
- **Portfolio Sections**: About, Projects, Skills, and Contact sections
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Performance Optimized**: Optimized 3D rendering and loading times

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library for React
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Modern ES6+ JavaScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Dark theme: Custom dark color palette
- Accent colors: Various gradient combinations

### 3D Scene
Modify the 3D scene in `src/components/Hero3D.jsx`:
- Add/remove geometric shapes
- Adjust particle systems
- Change lighting and materials
- Modify animations and rotations

### Content
Update the portfolio content in each component:
- `src/components/About.jsx` - Personal information and skills
- `src/components/Projects.jsx` - Project showcase
- `src/components/Skills.jsx` - Technical skills
- `src/components/Contact.jsx` - Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 🎯 Performance Tips

- The 3D scene is optimized for performance with limited particle count
- Images are optimized and lazy-loaded
- Animations use hardware acceleration
- Code splitting is implemented for better loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

Built with ❤️ using React, Three.js, and modern web technologies.