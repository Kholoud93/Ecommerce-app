# Mini E-commerce Prototype Build Steps

## Goal
Build a clean mobile e-commerce prototype with:
- product listing
- product details
- cart
- checkout mock flow
- profile/orders

Use this as a prototype, not full production checkout.

---

## 1) Project Setup

1. Open project:
   - `D:/practise/app-template-starter`
2. Install dependencies:
   - `npm install`
3. Start app:
   - `npm start`
4. Confirm starter app opens on emulator/device.

---

## 2) Target Folder Structure

Create/organize this structure:

- `src/types/`
  - `ecommerce.ts`
- `src/constants/`
  - `products.ts`
- `src/hooks/`
  - `useCart.ts`
- `src/screens/`
  - `HomeScreen.tsx`
  - `ProductDetailsScreen.tsx`
  - `CartScreen.tsx`
  - `CheckoutScreen.tsx`
  - `ProfileScreen.tsx`
- `src/components/`
  - `ProductCard.tsx`
  - `CartItemRow.tsx`
  - `PrimaryButton.tsx`
  - `QuantityStepper.tsx`

---

## 3) Define Data Models First

In `src/types/ecommerce.ts`, create:

- `Product`
  - `id`, `name`, `price`, `image`, `category`, `rating`, `description`, `inStock`
- `CartItem`
  - `productId`, `quantity`
- `Order`
  - `id`, `items`, `subtotal`, `shipping`, `total`, `status`, `createdAt`
- `Category`
  - simple union type like `"all" | "shoes" | "clothing" | "accessories"`

Keep types simple and flat.

---

## 4) Add Mock Product Data

In `src/constants/products.ts`:

1. Add 8-12 products with realistic names/prices.
2. Keep images as simple placeholder URLs first.
3. Export:
   - `products`
   - `featuredProducts` (first 4)
   - helper `getProductById`

---

## 5) Build Cart Hook (Core Logic)

In `src/hooks/useCart.ts`:

1. State:
   - `items: CartItem[]`
2. Actions:
   - `addToCart(productId)`
   - `removeFromCart(productId)`
   - `increaseQty(productId)`
   - `decreaseQty(productId)`
   - `clearCart()`
3. Selectors:
   - `itemCount`
   - `subtotal`
   - `shipping` (fixed value)
   - `total`

Then connect `AsyncStorage` to persist cart:
- load on app start
- save on cart change

---

## 6) Navigation Plan

Use simple route state first (no full navigation library needed):

- `home`
- `product-details`
- `cart`
- `checkout`
- `profile`

Keep route state in `App.tsx`, pass selected product id when needed.

---

## 7) Build Screens in This Order

### A. `HomeScreen.tsx`
- Search input
- Category filter chips
- Product grid/list using `ProductCard`
- Tap product -> open details
- Cart icon with item count

### B. `ProductDetailsScreen.tsx`
- Big image
- Name, price, rating
- Description
- Quantity stepper
- Add to cart button

### C. `CartScreen.tsx`
- List of cart rows (`CartItemRow`)
- Qty controls
- Remove item
- Subtotal / shipping / total
- Continue to checkout button

### D. `CheckoutScreen.tsx`
- Mock address section
- Mock payment section
- Order summary
- Place order button
- Success state (simple modal or inline panel)

### E. `ProfileScreen.tsx`
- User card (mock)
- Previous orders list (mock or from placed orders state)
- Settings row items

---

## 8) Reusable Components Checklist

Create these reusable components early:

- `PrimaryButton`
  - `label`, `onPress`, `disabled`, `loading`
- `ProductCard`
  - product image, name, price, category badge
- `CartItemRow`
  - product details + quantity controls + remove
- `QuantityStepper`
  - minus / quantity / plus

Keep styling consistent with one source style file or theme constants.

---

## 9) UI Design Starter (Minimal, Clean)

Use this layout pattern:

- Header
  - app name + cart button
- Search + categories
- Product cards (rounded, clear price)
- Sticky bottom CTA on cart/checkout screens
- Dark theme with one accent color

Suggested palette:
- background: `#0B1020`
- card: `#0F172A`
- muted text: `#94A3B8`
- primary text: `#F8FAFC`
- accent: `#22D3EE`
- success: `#34D399`

---

## 10) MVP Completion Definition

Prototype is done when:

- can browse products
- can open product details
- can add/remove/update cart
- can complete checkout mock flow
- cart persists after app reload
- no type errors (`npm run typecheck`)

---

## 11) Suggested Timeline

Day 1:
- Types + mock data + home screen + product card

Day 2:
- Details screen + cart hook + cart screen

Day 3:
- Checkout + profile + polish + persistence

---

## 12) Next Improvements (After MVP)

- Real API integration
- Authentication
- Real payment integration
- Promo codes
- Favorites/wishlist
- Product reviews
- Better image caching/loading states

---

## 13) First Task You Should Start With Now

Start immediately with:
1. `src/types/ecommerce.ts`
2. `src/constants/products.ts`
3. `src/components/ProductCard.tsx`
4. `src/screens/HomeScreen.tsx`

Once Home is working, move to details and cart.
