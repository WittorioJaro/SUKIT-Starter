# SUKIT - SvelteKit SaaS Starter

A modern, full-featured SaaS starter kit built with SvelteKit 5, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🔐 Authentication with Supabase
  - Social auth providers support
  - Protected routes and middleware
- 💳 Stripe Integration
  - Subscription management
  - Payment processing
  - Customer portal
- 🎨 Modern UI
  - Shadcn components
  - Tailwind CSS for styling
  - Dark mode support
  - Responsive design
- 🛠 Technical Stack
  - SvelteKit 5 with Runes
  - TypeScript for type safety
  - Drizzle ORM for database operations
  - Zod for form validation
  - French Toast for notifications
- 🚀 Developer Experience
  - Hot module replacement
  - TypeScript strict mode
  - Prettier code formatting
  - Modern development tools

## Getting Started

1. Clone the repository

```bash
git clone [your-repo-url]
cd sukit
```

2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Set up environment variables

```bash
cp .env.example .env
```

Fill in your environment variables in `.env`:

- Supabase credentials
- Stripe API keys
- Other configuration values

4. Initialize local Supabase

First, make sure you have Docker and Supabase CLI installed. Then:

```bash
# Generate TypeScript types for your database schema:
npm run db:generate

# Start Supabase local development environment
supabase start

# When you make schema changes and want to reset the database:
supabase db reset

```

5. Start the development server

```bash
npm run dev
# or
npm run dev -- --open
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type-check the codebase
- `npm run db:generate` - Generate database types from Supabase schema
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable components
│   ├── server/        # Server-side code
│   ├── utils/         # Utility functions
│   └── auth/          # Authentication logic
├── routes/
│   ├── api/          # API endpoints
│   ├── auth/         # Auth routes
│   └── ...           # Page routes
└── app.html          # App template
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this starter for your own projects.

---

Built with ❤️ using [SvelteKit](https://kit.svelte.dev)
