# DIC SOFT — Landing Page

Landing page SPA cho DIC SOFT (Digital Innovation Computing Solutions), dùng React + Vite + Tailwind CSS.

## Chạy local

```bash
npm install
npm run dev
```

## Deploy lên GitHub Pages

1. **Bật GitHub Pages bằng Actions**  
   Vào repo → **Settings** → **Pages** → **Build and deployment** → Source: **GitHub Actions**.

2. **Push code**  
   Mỗi lần push lên nhánh `main`, workflow sẽ tự build và deploy. Lần chạy đầu có thể cần chọn lại branch `main` trong Settings → Pages.

3. **URL site**  
   Dạng: `https://<username>.github.io/<tên-repo>/` (ví dụ: `https://yourname.github.io/landing-page/`).

Workflow dùng file `.github/workflows/deploy-pages.yml`, build với `VITE_BASE_PATH` = tên repo nên không cần sửa config khi đổi tên repo.

### Build giống GitHub Pages trên máy (kiểm tra trước khi push)

- **PowerShell:** `$env:VITE_BASE_PATH="landing-page"; npm run build`
- **Bash:** `VITE_BASE_PATH=landing-page npm run build`

Sau đó chạy `npm run preview -- --base /landing-page/` để xem bản build (thay `landing-page` bằng tên repo nếu khác).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
