# Contributing to DevSphere Website

Thank you for your interest in contributing to the DevSphere website! This document provides guidelines and instructions for contributing to the project.


## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](https://0xdevsphere.vercel.app/code-of-conduct). Please read it before contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- pnpm 8.0 or higher (recommended)
- Git
- Code editor (VS Code recommended)

### Setting Up Your Development Environment

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/devsphere-website.git
   cd devsphere-website
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/devsphere/devsphere-website.git
   ```

4. **Install Dependencies**

   ```bash
   pnpm install
   ```

5. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start Development Server**

   ```bash
   pnpm dev
   ```

## 🔄 Development Workflow

### 1. Keep Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Create a Feature Branch

Use descriptive branch names:

```bash
git checkout -b feature/add-new-component
git checkout -b fix/navigation-bug
git checkout -b docs/update-readme
```

### 3. Make Your Changes

- Write clean, maintainable code
- Follow the project's coding standards
- Add comments where necessary
- Test your changes thoroughly

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new testimonial component"
```

See [Commit Message Guidelines](#commit-message-guidelines) below.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

Go to the original repository and click "New Pull Request"



## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to DevSphere! 🚀


