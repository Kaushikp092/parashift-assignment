# Parashift Assignment Beta

Live Demo: https://parashift-assignment-beta.vercel.app

## 📌 Project Overview

This project is a blog-based web application built using React.  
It includes blog listing, blog detail pages with dynamic routing, skeleton loaders, and related blog functionality.

## 🚀 Features

- Blog Listing Page
- Dynamic Blog Detail Page using Slug
- Skeleton Loaders
- Related Blogs Section
- Load More Functionality
- Responsive Design

## 🛠️ Tech Stack

- React
- React Router
- Tailwind CSS
- Vite

## 🚀 Quick Start (Run Locally – 3 Steps)

Requires **Node.js 18+**

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/parashift-assignment.git
cd parashift-assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

parashift-assignment-beta/
│
├── public/
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── Blog/
│   │   │   ├── BlogListingPage.jsx
│   │   │   ├── BlogDetailPage.jsx
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── Skeleton/
│   │   │   ├── BlogSkeleton.jsx
│   │   │   └── BlogDetailSkeleton.jsx
│   │   │
│   │   └── pages/
│   │       └── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── index.html
├── package.json
└── README.md