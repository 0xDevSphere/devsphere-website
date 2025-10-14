# DevSphere Website

DevSphere is a developer community platform that offers mentorship, apprenticeship programs, and career opportunities. This website serves as the central hub for all information about DevSphere.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **3D Graphics**: [Cobe](https://github.com/shuding/cobe) for interactive globe
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher
- **pnpm**: Version 8.0 or higher (recommended) or npm/yarn

To install pnpm globally:

```bash
npm install -g pnpm
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devsphere-website.git
cd devsphere-website
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
pnpm build
```

### 5. Start Production Server

```bash
pnpm start
```

## 📁 Project Structure

```
devsphere-website/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   └── chat/             # Chat API endpoint
│   ├── apprenticeship/       # Apprenticeship program page
│   ├── careers/              # Careers portal
│   ├── code-of-conduct/      # Community guidelines
│   ├── core-team/            # Team member profiles
│   ├── login/                # Authentication page
│   ├── safety/               # Safety and security pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── home/                 # Home page specific components
│   ├── magicui/              # Custom UI components
│   └── ui/                   # shadcn/ui components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions and helpers
├── public/                   # Static assets (images, etc.)
├── styles/                   # Additional stylesheets
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── next.config.mjs           # Next.js configuration
```

## 🎨 Available Scripts

- `pnpm dev` - Start development server on [http://localhost:3000](http://localhost:3000)
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

## 🔐 Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
# Example:
# GOOGLE_AI_API_KEY=your_api_key_here
# NEXT_PUBLIC_API_URL=your_api_url
```

**Note**: Never commit `.env.local` to version control.

## 🎨 Customization

### Adding UI Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dropdown-menu
```

### Styling

- Global styles are in `app/globals.css`
- Tailwind configuration is in `postcss.config.mjs`
- Component-specific styles use Tailwind utility classes

## 🤝 Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide for details on:

- Code of conduct
- Development workflow
- Pull request process
- Coding standards

## 📄 License

MIT License

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature suggestions:

1. Check if the issue already exists in [Issues](https://github.com/0xdevsphere/devsphere-website/issues)
2. If not, create a new issue with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

Made with ❤️ by the DevSphere Team

