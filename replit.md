# Overview

This is a single-page portfolio website built with Flask for Lakshmi Narayanan P, an AI/ML specialist. The application features a futuristic, minimalist black-and-white design with smooth scrolling navigation, responsive layout, and subtle animations. The portfolio showcases personal information, professional internship experience, AI/ML projects, certifications, and contact details in a clean, professional presentation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Template Engine**: Jinja2 templates integrated with Flask for server-side rendering
- **Styling**: Pure CSS with Inter font from Google Fonts for typography
- **JavaScript**: Vanilla JavaScript for interactive features including smooth scrolling, navigation management, loading animations, and scroll effects
- **Responsive Design**: Mobile-first approach with hamburger menu for mobile navigation
- **Theme**: Strict black (#000000) and white (#FFFFFF) color palette for futuristic minimalist aesthetic

## Backend Architecture
- **Framework**: Flask web framework for Python
- **Application Structure**: Simple single-route application serving static portfolio content
- **Session Management**: Basic session secret configuration for potential future authentication needs
- **Entry Points**: Dual entry points (app.py and main.py) for flexible deployment options

## Design Patterns
- **Single Page Application (SPA)**: All content delivered in one HTML page with JavaScript-driven navigation
- **Component-Based Styling**: CSS organized by component sections (navigation, loading, sections)
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with interactive features
- **Separation of Concerns**: Clear separation between HTML structure, CSS presentation, and JavaScript behavior

## Asset Management
- **Static Files**: Organized in Flask's standard static directory structure
- **Font Loading**: External Google Fonts integration with preconnect optimization
- **Icon System**: Font Awesome CDN integration for scalable vector icons
- **Performance**: Optimized loading with proper resource hints and lazy loading techniques

# External Dependencies

## Frontend Libraries
- **Google Fonts**: Inter font family for consistent typography
- **Font Awesome**: Version 6.0.0 CDN for iconography
- **Browser APIs**: Uses standard DOM APIs, Intersection Observer for scroll animations

## Backend Framework
- **Flask**: Lightweight Python web framework for serving the portfolio
- **Jinja2**: Template engine included with Flask for HTML generation

## Development Tools
- **Python Environment**: Requires Python runtime environment
- **Environment Variables**: Uses SESSION_SECRET environment variable for session configuration
- **Static File Serving**: Flask's built-in static file serving for CSS, JavaScript, and assets

## Content Source
- **LinkedIn Integration**: Portfolio content populated from LinkedIn profile data
- **Placeholder System**: Fallback placeholder content for projects and experience sections