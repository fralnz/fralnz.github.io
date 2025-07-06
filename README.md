# My Portfolio

This is my portfolio, built using [Vite + React](https://vite.dev/) and hosted on [GitHub Pages](https://pages.github.com/).

# SPA on GitHub

GitHub Pages doesn't support SPA (Single Page Applications), so whenever someone tries to load the page on a URL that is not the root path, it returns a `404` error.
To remedy that, I used the same approach as [spa-github-pages](https://github.com/rafgraph/spa-github-pages).

### 1. **Install and Set Up GitHub Pages**

If not already done:

```bash
npm install gh-pages --save-dev
```

In your `package.json`, add:

```
"homepage": "https://<username>.github.io/<repo-name>"
```

And these scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 2. **Add `404.html` for SPA Redirect**

Create a file: `public/404.html` with the following contents:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0;url=/index.html">
    <script type="text/javascript">
      var redirectTo = '/index.html?redirect=' + encodeURIComponent(
        window.location.pathname + window.location.search + window.location.hash
      );
      window.location.replace(redirectTo);
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

This allows GitHub Pages to redirect unknown paths to your app's entry point with the route info preserved.

### 3. **Handle Redirect in `main.tsx`**

In your `main.tsx`, add this **before creating the router**:

```ts
const redirectPath = new URLSearchParams(window.location.search).get('redirect');
if (redirectPath) {
    window.history.replaceState(null, '', redirectPath);
}
```

### 4. **Deploy**

Run:

```bash
npm run deploy
```
