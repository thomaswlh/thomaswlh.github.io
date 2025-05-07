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
  - To control the number of skill items per row, adjust the `.skills__list` container width (`max-width`/`width`) and the margins or `min-width` on `.skills__list-item` in `src/components/Skills/Skills.css`.
  

## 📦 Deployment on GitHub Pages

This portfolio is set up to be deployed as a user GitHub Pages site (https://username.github.io). The deployment process uses two branches:
- `source`: Contains the React source code
- `main`: Contains the built files that are served by GitHub Pages

### Initial Setup

1. Create a repository named exactly `your-username.github.io`

2. In `package.json`, set `"homepage"` to your GitHub Pages URL:
  ```json
  "homepage": "https://your-username.github.io"
  ```

3. Create and push the source branch:
  ```bash
  git checkout -b source    # Create a new branch for source code
  git push -u origin source # Push the source branch
  ```

### Deployment Process

1. Make sure you're on the source branch:
  ```bash
  git checkout source
  ```

2. Build the project:
  ```bash
  yarn build              # Create production build
  ```

3. Deploy to main branch:
  ```bash
  # Create a temporary directory for the build
  mkdir -p /tmp/build_temp
  cp -r build/* /tmp/build_temp/

  # Switch to main branch and replace contents with build files
  git checkout main
  rm -rf *
  cp -r /tmp/build_temp/* .
  rm -rf /tmp/build_temp

  # Commit and push the changes
  git add .
  git commit -m "Deploy to main branch"
  git push origin main

  # Switch back to source branch
  git checkout source
  ```

### Important Notes

- Always make changes in the `source` branch
- The `main` branch should only contain the built files
- After deployment, your site will be available at `https://your-username.github.io`
- It may take a few minutes for changes to propagate through GitHub's CDN
  

## 📄 License

This project is open-source under the [MIT License](https://choosealicense.com/licenses/mit/).