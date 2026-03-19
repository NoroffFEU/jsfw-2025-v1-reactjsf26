# 🛒 Online Shop Project: Style Guide & Technical Spec

This document serves as the single source of truth for the visual and technical implementation of the Online Shop application.

---

## 🎨 1. Color Palette
| Element             | Hex Code   | Usage                                      |
| :------------------ | :--------- | :----------------------------------------- |
| **Primary (Brand)** | `#2563EB`  | Primary buttons, active links, focus rings |
| **Secondary/Sale** | `#F59E0B`  | Rating stars, secondary accents            |
| **Danger/Alert** | `#DC2626`  | Sale prices, discount badges, error text   |
| **Background** | `#F8FAFC`  | Main page body background                  |
| **Surface** | `#FFFFFF`  | Card backgrounds, form inputs, modals      |
| **Text (Heading)** | `#0F172A`  | Page titles, product names, prices         |
| **Text (Muted)** | `#64748B`  | Strikethrough prices, meta-info, footers   |

---

## ✍️ 2. Typography
- **Font Stack:** Inter, system-ui, sans-serif.
- **H1 (Page Titles):** 2rem (32px) / Bold / `#0F172A`
- **H2 (Product Titles):** 1.25rem (20px) / Semibold / `#0F172A`
- **Body Text:** 1rem (16px) / Regular / `#1E293B`
- **Price (Main):** 1.125rem (18px) / Bold / `#DC2626`
- **Price (Original):** 0.875rem (14px) / Strikethrough / `#64748B`

---

## 📦 3. Component Specifications
- **Product Cards:** Aspect ratio 1:1, `object-fit: cover`, 8px border-radius.
- **Buttons:** Must have a `:hover` state (darken background 10%) and an `:active` state (scale 0.98).
- **Discount Sticker:** Absolute top-right, background `#DC2626`, white text.

---

## 🛠️ 4. TypeScript Interfaces
// Save these in a /types/index.ts file

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: { url: string; alt: string; };
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

---

## 📱 5. Responsive Grid Settings
- **Mobile:** 1 Column (Full width cards).
- **Tablet:** 2-3 Columns.
- **Desktop:** 4 Columns (Max-width container: 1280px).

---

## ✅ 6. Validation Rules (Contact Form)
- **Full Name:** Minimum 3 characters.
- **Subject:** Minimum 3 characters.
- **Email:** Must be a valid email format (e.g., name@domain.com).
- **Message:** Minimum 10 characters.
- **Error Display:** Red text (`#DC2626`) appearing immediately below the invalid field.