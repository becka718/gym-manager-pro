# GymPro - Premium Gym Member Management Dashboard

## 🏋️ Overview

GymPro is a modern, premium web application designed for gym owners to manage member data, track revenue, and maintain membership status in real-time.

## ✨ Features

- **Member Management**: Track member data with expiry dates and payment status
- **Revenue Analytics**: Real-time revenue tracking with expected income projections
- **Payment Plans**: Support for monthly, quarterly, bi-annual, and yearly memberships
- **Advanced Dashboard**: Beautiful analytics dashboard with data visualization
- **Waitlist Management**: Email collection for early access
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Scroll animations and micro-interactions
- **Premium UI**: Figma-inspired design with glass morphism effects

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **State Management**: Zustand
- **Icons**: React Icons
- **Intersection Observer**: For scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/becka718/gym-manager-pro.git
cd gym-manager-pro
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🏗️ Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📊 Supabase Setup

### Database Schema

```sql
-- Members Table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  membership_type VARCHAR(50), -- 'monthly', 'quarterly', 'biannual', 'yearly'
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  amount_paid DECIMAL(10, 2),
  status VARCHAR(50), -- 'active', 'expired', 'pending'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments Table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES members(id),
  amount DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL,
  next_payment_date DATE,
  status VARCHAR(50), -- 'paid', 'pending', 'overdue'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Waitlist Table
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📱 Responsive Design

- **Mobile**: Optimized for touch with large buttons and readable text
- **Tablet**: Balanced layout with 2-column grid
- **Desktop**: Full 3-column grid with advanced features

## 🎨 Design System

### Colors
- **Primary**: #1a1a2e (Dark Blue)
- **Secondary**: #16213e (Deep Blue)
- **Accent**: #0f3460 (Navy)
- **Gold**: #e94560 (Brand Red/Pink)
- **Light**: #f4f4f4 (Off White)

### Components
- Glass Morphism cards
- Gradient text effects
- Smooth scroll animations
- Hover effects and transitions

## 🔄 State Management

Using Zustand for lightweight state management:

```javascript
const { members, revenue, addMember } = useStore()
```

## 📝 License

MIT License - feel free to use this project for your gym management needs!

## 🤝 Support

For support, email: support@gympro.app

---

**Made with ❤️ for gym owners**