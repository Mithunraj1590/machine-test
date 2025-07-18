# My React Countries App

A responsive React app to browse countries, filter by continent, and sign in with social providers. Built with React, Redux, Bootstrap, and Swiper.

## Features
- Responsive design (mobile & desktop)
- Country list with continent filter (Asia, Europe, All)
- Login form with social icons
- Modern UI with Bootstrap
- Carousel banner
- Ready for deployment on Vercel

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm (comes with Node.js)

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
- Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```
- Builds the app for production to the `build` folder.

### Deployment (Vercel)
1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com/), sign in, and import your repo.
3. Vercel will auto-detect Create React App. Click **Deploy**.
4. Your app will be live on a Vercel URL!

## Project Structure
```
my-app/
  src/
    components/
    pages/
    slices/
    store/
    ...
  public/
  package.json
  README.md
```

## Customization
- Edit `src/pages/Login.js` for login form and social icons.
- Edit `src/components/Banner.js` for the banner/carousel.
- Edit `src/components/ListCountries.js` for country list logic.

## License
MIT 