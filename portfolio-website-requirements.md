# Personal Portfolio Website

## Project Overview

Create a modern, responsive, professional portfolio website for a Senior Software Developer.

The website will be built using:

- React 18
- Vite
- React Router
- Bootstrap 5
- Bootstrap Icons
- React Hook Form
- Local Storage
- GitHub Pages Deployment

No backend and no database.

All data should be stored in JSON files and optionally Local Storage.

Website must look modern, professional, mobile-friendly, and recruiter-friendly.

---

# Developer Profile

## Name

Khin Khin Su Mon

## Title

Senior Software Developer

## Professional Summary

Results-driven Software Developer with more than 20 years of experience developing enterprise software, web applications, mobile applications, and cloud solutions.

Strong expertise in:

- C#
- .NET
- ASP.NET Core
- Web API
- React
- Angular
- SQL Server
- Oracle
- MySQL
- Azure
- AWS
- Microservices
- Docker
- Kubernetes
- RabbitMQ
- CI/CD

Experienced in designing, developing, deploying, and supporting enterprise solutions across finance, travel, inventory, ERP, CRM, HR, and e-commerce domains.

---

# Contact Information

Email:
sumonkk@gmail.com

Phone:
+65 98572579

Location:
Myanmar

LinkedIn:
https://www.linkedin.com/in/khin-khin-su-mon-702a08b6/

GitHub:
https://github.com/smkk01

---

# Website Pages

## Home

### Hero Section

Display:

- Name
- Professional Title
- Short Professional Summary

Buttons:

- Download Resume
- Contact Me
- View Projects

Include animated typing effect:

Examples:

Senior Software Developer
.NET Developer
React Developer
Cloud Enthusiast

---

### Statistics Section

Display animated counters:

- 20+ Years Experience
- 10+ Companies
- 50+ Projects
- Multiple Technologies

---

### Skills Highlights

Show cards:

- Backend Development
- Frontend Development
- Cloud Technologies
- Databases
- DevOps
- Microservices

---

### Featured Projects

Display top projects.

---

## About Page

### Professional Summary

Create detailed About Me section.

### Career Highlights

Include:

- 20+ years software development experience
- Enterprise application development
- Cloud and microservices experience
- Full SDLC experience
- Team leadership experience

### Education

#### National University of Singapore

Graduate Diploma in Systems Analysis
Major: Advanced Web

#### University of Computer Studies, Mandalay

Bachelor of Computer Science

---

## Skills Page

Create categorized skill sections.

### Backend

- C#
- VB.NET
- ASP.NET
- ASP.NET MVC
- ASP.NET Core
- Web API
- Entity Framework
- LINQ
- WCF

### Frontend

- React
- Angular
- JavaScript
- jQuery
- AJAX
- HTML5
- CSS3
- Bootstrap

### Databases

- SQL Server
- Oracle
- MySQL
- PostgreSQL
- MongoDB
- Redis
- DB2
- MS Access

### Cloud

- Microsoft Azure
- AWS
- Azure DevOps

### DevOps

- Git
- GitHub
- CI/CD
- Docker
- Kubernetes
- RabbitMQ

### Tools

- Visual Studio
- VS Code
- Postman
- Swagger
- Power BI
- SharePoint
- GitHub Copilot

Display skill percentage bars.

Example:

C# 95%
ASP.NET Core 90%
React 85%

---

## Experience Page

Create timeline style work experience.

### Corporate Travel Services

Software Developer
Aug 2018 - Feb 2024

Key Achievements:

- Developed Financial Reporting Systems
- Built ETL Windows Services
- XML Data Processing
- Outlook Encryption Add-in
- Travel Booking Reporting Systems

Technologies:

C#, Oracle, SQL Server, XML

---

### Biz-Era.Net

Application Developer

Key Achievements:

- Workflow Management System
- Mobile and Web Application Development
- Full SDLC Leadership

---

### Global Foundries

Software Programmer

Key Achievements:

- Housekeeping Management Module
- Document Management Solutions

---

### JOS Applications

Associate Consultant

Key Achievements:

- HR Core System
- E-Leave Management System

---

### Keppel Land

Web Application Developer

Key Achievements:

- Mall Information Management System
- Reporting Solutions

---

Create remaining experience entries in collapsed expandable sections.

---

## Projects Page

Create professional project portfolio.

### Project 1

E-Commerce Full Stack Application

GitHub:
https://github.com/smkk01/best-store

Live:
https://smkk01.github.io/best-store/

Technologies:

- ASP.NET Core
- React
- SQL Server

Features:

- Product Catalog
- Shopping Cart
- CRUD Functions

---

### Project 2

E-Shop

GitHub:
https://github.com/smkk01/E-Shop.git

---

### Project 3

Shopping Microservices

GitHub:
https://github.com/smkk01/azuredevops.git

---

### Project 4

Airline Booking System

GitHub:
https://github.com/smkk01/AirlineBookingSystem.git

Technologies:

- Microservices
- RabbitMQ
- .NET

---

### Project 5

Student Management System

GitHub:
https://github.com/smkk01/StudentsUI-main

React + Web API

---

### Project 6

Inventory Management System

GitHub:
https://github.com/smkk01/StockInventoryApp

Angular + Web API

---

Requirements

Project cards should contain:

- Image
- Description
- Technologies
- GitHub Link
- Live Demo Link (if available)

Add Filtering:

- All
- .NET
- React
- Angular
- Microservices
- Cloud

Add Search Box.

---

## Contact Page

Fields:

- Name
- Email
- Subject
- Message

Validation required.

Since no backend exists:

Save submitted messages into Local Storage.

Add success message.

---

# Additional Features

## Dark Mode

Implement:

- Light Theme
- Dark Theme

Persist selection using Local Storage.

---

## Download Resume

Provide PDF Resume download button.

---

## Scroll To Top Button

Floating button.

---

## Navbar

Sticky navigation.

Desktop:
Horizontal menu

Mobile:
Hamburger menu

---

## Animations

Use:

- AOS Animation Library

Examples:

- Fade Up
- Zoom
- Slide

---

## SEO

Add:

- Meta Tags
- Open Graph Tags
- Structured Data

---

## Performance

- Lazy Loading
- Code Splitting
- Optimized Images

---

# Folder Structure

src/
|
├── assets/
│ ├── images/
│ ├── resume/
│
├── components/
│ ├── Navbar/
│ ├── Footer/
│ ├── Hero/
│ ├── Skills/
│ ├── Experience/
│ ├── Projects/
│ ├── Contact/
│ ├── ThemeSwitcher/
│
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Skills.jsx
│ ├── Experience.jsx
│ ├── Projects.jsx
│ ├── Contact.jsx
│
├── data/
│ ├── skills.json
│ ├── experience.json
│ ├── projects.json
│
├── hooks/
│
├── services/
│
├── App.jsx
├── main.jsx

---

# GitHub Pages Deployment

Configure deployment using:

npm install gh-pages

package.json:

homepage:
https://smkk01.github.io/portfolio

Add scripts:

"predeploy": "npm run build"

"deploy": "gh-pages -d dist"

Use HashRouter instead of BrowserRouter.

---

# UI Design Requirements

Design must be:

- Modern
- Professional
- Elegant
- Responsive
- Recruiter-friendly

Color Palette

Primary:
#0d6efd

Secondary:
#212529

Accent:
#20c997

Background:
#f8f9fa

Dark Theme:
#121212

Use Bootstrap cards, shadows, gradients, rounded corners and subtle animations.

---

# Deliverables

Generate:

1. Complete React project
2. Reusable components
3. Mobile responsive layout
4. JSON data files
5. Dark mode support
6. GitHub Pages deployment setup
7. Bootstrap styling
8. SEO support
9. Clean architecture
10. Production-ready code