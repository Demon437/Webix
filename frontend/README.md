# Webix Infotech

A modern, responsive landing page for Webix Infotech, showcasing AI, cloud, and digital product engineering services. Built with React, TypeScript, Vite, and Tailwind CSS, featuring a sleek design with interactive 3D elements and smooth animations.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **Trust Logos**: Marquee display of trusted partners and clients
- **Services Section**: Bento grid layout highlighting key services
- **Product Engineering Philosophy**: Visual representation of company approach
- **Sticky Features**: Interactive scroll-based feature highlights
- **Problem-Solution**: Clear demonstration of value proposition
- **Case Studies**: Portfolio showcase of successful projects
- **Tech Stack**: Comprehensive display of technologies used
- **Process Timeline**: Step-by-step development process visualization
- **Impact Stats**: Animated statistics and metrics
- **Team Section**: Introduction to the company team
- **Testimonials**: Client feedback and reviews
- **Pricing Section**: Service packages and pricing tiers
- **FAQ Section**: Frequently asked questions
- **Footer**: Contact information and additional links
- **Mesh Gradient Background**: Dynamic animated background
- **FOMO Banner**: Urgency-driven promotional banner
- **Sticky CTA**: Persistent call-to-action elements
- **3D Elements**: Interactive Three.js components for enhanced user experience

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, customizable components built on Radix UI
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful & consistent icon toolkit

### 3D & Interactive Elements
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization for React
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM** - Declarative routing for React

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ROHIT-RICH/ethereal-webix-forge.git
   cd webix-light
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Usage

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Building for Development
```bash
npm run build:dev
```
Creates a development build with additional debugging information.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

### Testing
```bash
npm test
```
Runs the test suite once.

```bash
npm run test:watch
```
Runs tests in watch mode for continuous testing during development.

## 📁 Project Structure

```
webix-light/
├── public/                 # Static assets
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   └── ...            # Custom components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   └── test/              # Test files
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── playwright.config.ts   # Playwright testing configuration
└── vitest.config.ts       # Vitest testing configuration
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` to customize Tailwind CSS theme
- Update `src/index.css` for global styles
- Component-specific styles are handled via Tailwind classes

### Components
- Add new components in `src/components/`
- Use the existing UI components from `src/components/ui/` as building blocks
- Follow the established patterns for consistency

### Content
- Update text content directly in component files
- Modify images and assets in the `public/` folder
- Adjust SEO meta tags in `index.html`

## 🧪 Testing

### Unit Tests
Run with Vitest:
```bash
npm test
```

### End-to-End Tests
Run with Playwright:
```bash
npx playwright test
```

## 🚢 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## 📄 License

This project is proprietary software owned by Webix Infotech. All rights reserved.

## 📞 Contact

**Webix Infotech**
- Website: [webixinfotech.com](https://webixinfotech.com)
- Email: contact@webixinfotech.com

---

Built with ❤️ by Webix Infotech
