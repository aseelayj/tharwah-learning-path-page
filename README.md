# Learning Path Platform - React Implementation

A modern, production-ready React application for showcasing educational learning paths with comprehensive features and beautiful design.

## Features

- **Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Bilingual Support**: Built-in English and Arabic language support
- **Modern UI Components**: Clean, professional design with smooth animations and transitions
- **Type-Safe**: Built with TypeScript for better development experience
- **Modular Architecture**: Well-organized, reusable components following separation of concerns

## Components

### Core Components

1. **HeroSection** - Eye-catching hero with course title, description, and key highlights
2. **ProgramSummary** - Quick overview cards showing duration, language, students, and method
3. **KeyBenefits** - Grid layout showcasing 6 key benefits with icons and descriptions
4. **WhatsIncluded** - Feature cards explaining what's included in the learning path
5. **SkillsSection** - Displays all skills students will master
6. **Statistics** - Animated counters showing academy achievements
7. **LMSBanner** - Promotional banner for the learning management system
8. **Testimonials** - Carousel for student testimonials with navigation
9. **FAQSection** - Accordion-style FAQ with smooth animations
10. **ContactForm** - Full-featured contact form with validation
11. **EnrollmentSidebar** - Sticky sidebar with pricing and enrollment CTA

## Project Structure

```
src/
├── components/        # All React components
├── types/            # TypeScript type definitions
├── data/             # Mock data and configurations
├── App.tsx           # Main application component
└── index.css         # Tailwind CSS imports
```

## Design Principles

- **Clean & Modern**: Professional aesthetic suitable for educational platforms
- **Accessible**: WCAG-compliant color contrasts and semantic HTML
- **Performance**: Optimized bundle size and lazy loading where appropriate
- **Maintainable**: Small, focused components with clear responsibilities

## Customization

All components accept `lang` prop for language switching ('en' | 'ar').
Mock data in `src/data/mockData.ts` can be replaced with API calls.

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

## Getting Started

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
npm run preview
```
