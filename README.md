# 🚀 Thomas Wu's Portfolio

This is **Thomas Wu**’s personal portfolio template, built from the [Cleanfolio](https://github.com/rjshkhr/cleanfolio) template.  
If you’d rather work with plain HTML, CSS, and JavaScript, see the companion [Cleanfolio Minimal](https://github.com/rjshkhr/cleanfolio-minimal).

## 🔧 Setup

1. **Clone your fork**
  
  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
  ```
  
2. **Node version management (optional)**  
  If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm):
  
  ```bash
  nvm install && nvm use      # via nvm  
  # or  
  fnm install && fnm use      # via fnm  
  ```
  
3. **Install dependencies & start dev server**
  
  ```bash
  yarn        # install packages (Yarn v1+)  
  yarn start  # launch React dev server  
  ```
  
  Runs at `http://localhost:3000` by default.
  

## ⚙️ Customization

1. **Page title**  
  Open `public/index.html` and change:
  
  ```html
  <title>YOUR_NAME</title>
  ```
  
2. **Portfolio data**  
  Edit `src/portfolio.js` to update your bio, project links, and social profiles.
  
3. **Theme & styling**  
  Modify or add CSS in `src/index.css`, or integrate Tailwind/Sass as desired.
  

## 📦 Deployment on GitHub Pages

1. In `package.json`, set `"homepage"` to:
  
  ```json
  "homepage": "https://your-username.github.io/your-repo"
  ```
  
2. Push changes to GitHub.
  
3. Build & deploy:
  
  ```bash
  yarn build   # production build  
  yarn deploy  # publish to GitHub Pages  
  ```
  

## 📄 License

This project is open-source under the [MIT License](https://choosealicense.com/licenses/mit/).