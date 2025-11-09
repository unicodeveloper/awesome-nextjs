# ShareSteak 🥩

**Modern Meat Marketplace Platform**

Revolutionary meat marketplace connecting producers directly with consumers through group purchasing and community features.

## 🎯 Overview

ShareSteak addresses critical challenges in the meat supply chain by creating a transparent, community-driven platform that enables:

- **Direct producer-to-consumer connections** eliminating intermediaries
- **Group purchasing power** enabling wholesale prices for individual consumers
- **Community features** with forums, reviews, and direct messaging
- **Complete transparency** in sourcing, production methods, and pricing

## 📊 Market Opportunity

- **Global Meat Market**: $1.7T in 2024, projected $2.7T by 2034
- **Group Buying Market**: $17.8B in 2024, expected $32.5B by 2032 (7.6% CAGR)
- **U.S. Meat Sales**: Record $104.6B in 2024 (up 4.7% YoY)

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Frontend | Next.js | 15.4.1 |
| Language | TypeScript | 5.8.3 |
| Database | PostgreSQL (Supabase) | 17 |
| Authentication | Supabase Auth | Latest |
| Styling | Tailwind CSS | 3.4.17 |
| State Management | React Query + Zustand | 5.83.0 |
| Build Tool | Turborepo + PNPM | Latest |

## 📁 Monorepo Structure

```
sharesteak/
├── apps/
│   └── web/                 # Next.js frontend application
│       ├── src/
│       │   ├── app/        # Next.js 15 App Router
│       │   ├── components/ # React components
│       │   └── lib/        # Utilities and helpers
│       └── public/         # Static assets
├── packages/
│   ├── ui/                 # Shared UI components library
│   ├── api-client/         # Type-safe Supabase client
│   └── types/              # Shared TypeScript definitions
├── supabase/
│   ├── migrations/         # Database migrations
│   └── functions/          # Edge functions
└── turbo.json              # Turborepo configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+
- Supabase account (for backend)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sharesteak
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase and Stripe credentials in `.env.local`

4. **Set up Supabase**
   - Create a new Supabase project
   - Run migrations: `supabase db push`
   - Update environment variables with your Supabase URL and keys

5. **Run development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## 🏗️ Available Scripts

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm build            # Build all apps for production
pnpm lint             # Lint all packages
pnpm type-check       # Type check all packages
pnpm format           # Format code with Prettier
pnpm clean            # Clean all build artifacts
```

## ✨ Core Features

### E-Commerce Platform
- Complete product catalog with rich listings
- Shopping cart with real-time synchronization
- Order management and tracking
- Secure Stripe payment integration
- Real-time inventory management

### Group Purchase System (Unique Differentiator)
- Dynamic group formation with minimum thresholds
- Tiered pricing that decreases with more participants
- Live coordination and progress tracking
- Automatic activation when minimums are met
- Social sharing to invite communities

### Seller Platform
- Easy product listing and management
- Order fulfillment workflows
- Sales analytics and reporting
- Customer relationship management

### Community Features
- Discussion forums for meat enthusiasts
- Real-time direct messaging
- Product Q&A system
- Community reviews and ratings

### Admin Panel
- User management with KYC verification
- Content moderation and product approval
- System analytics and monitoring
- Financial reporting

## 🗄️ Database Schema

The platform uses PostgreSQL with the following main entities:

- **Profiles**: User accounts with role-based access (BUYER/SELLER/ADMIN)
- **Products**: Meat product listings with categories and pricing
- **Group Purchases**: Group buying coordination with tiered pricing
- **Orders**: Transaction and fulfillment tracking
- **Reviews**: Community-driven product reviews
- **Messages**: Direct messaging between users
- **Forum Posts/Comments**: Community discussions

See `supabase/migrations/` for complete schema definitions.

## 🔒 Security

- JWT-based authentication with Supabase Auth
- Row Level Security (RLS) on all database tables
- Role-based access control (BUYER/SELLER/ADMIN)
- CSRF protection
- API rate limiting
- Secure payment processing via Stripe

## 📈 Performance Targets

- **Bundle Size**: ~1.5-2MB optimized
- **First Contentful Paint**: ~1-1.5 seconds
- **Lighthouse Score**: 85-90
- **Image Optimization**: 40-60% payload reduction

## 🎯 Success Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| Monthly Active Users | 10,000+ | 12 months |
| Monthly GMV | $500,000+ | 18 months |
| Group Completion Rate | 85%+ | Ongoing |
| User Retention | 70% monthly | Ongoing |

## 🛣️ Roadmap

### Q1 2025 - Mobile & Search
- Native mobile applications (iOS/Android)
- Advanced search and filtering
- Push notification system
- Enhanced analytics dashboard

### Q2 2025 - Advanced Features
- AI-powered recommendations
- Subscription services
- Loyalty program
- Advanced business intelligence

### Q3 2025 - Market Expansion
- Multi-vendor marketplace
- International support
- Multi-currency/language
- White-label solutions

### Q4 2025 - Innovation
- Blockchain supply chain transparency
- AR/VR virtual farm tours
- Advanced logistics optimization
- Third-party API platform

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

Copyright © 2025 ShareSteak. All rights reserved.

## 📞 Support

For questions or support, please contact:
- Email: support@sharesteak.com
- Documentation: [docs.sharesteak.com](https://docs.sharesteak.com)

---

**Building transparency, community, and value in every transaction.** 🥩
