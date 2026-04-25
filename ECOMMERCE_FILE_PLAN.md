# E-commerce File Plan

This file is your step-by-step build checklist with exact paths and what to implement in each file.

## Step 1: Types

### File
- `src/types/ecommerce.ts`

### What to add
- `Category` union:
  - `"all" | "shoes" | "clothing" | "accessories"`
- `Product` type:
  - `id`, `name`, `price`, `image`, `category`, `rating`, `description`, `inStock`
- `CartItem` type:
  - `productId`, `quantity`
- `OrderStatus` type:
  - `"placed" | "processing" | "delivered"`
- `Order` type:
  - `id`, `items`, `subtotal`, `shipping`, `total`, `status`, `createdAt`

## Step 2: Mock Product Data

### File
- `src/constants/products.ts`

### What to add
- `products: Product[]` with 8-12 items
- `featuredProducts` (first 4 products)
- `getProductById(productId: string)`

### Notes
- Keep object shape exactly matching `Product` type
- Start with placeholder image URLs

## Step 3: Cart Hook + Persistence

### File
- `src/hooks/useCart.ts`

### What to add
- State:
  - `items: CartItem[]`
- Actions:
  - `addToCart(productId, quantity?)`
  - `removeFromCart(productId)`
  - `increaseQty(productId)`
  - `decreaseQty(productId)`
  - `clearCart()`
- Selectors:
  - `itemCount`
  - `subtotal`
  - `shipping`
  - `total`
- Persistence:
  - load cart from `AsyncStorage` on mount
  - save cart to `AsyncStorage` whenever items change

## Step 4: Theme + Shared Styles

### Files
- `src/styles/theme.ts`
- `src/styles/ecommerceStyles.ts`

### What to add
- `theme.ts`:
  - colors, spacing, radius tokens
- `ecommerceStyles.ts`:
  - common screen layout style
  - common section style
  - reusable card/container styles

### Suggested palette
- background: `#0B1020`
- card: `#0F172A`
- muted text: `#94A3B8`
- primary text: `#F8FAFC`
- accent: `#22D3EE`
- success: `#34D399`

## Step 5: Reusable Components

### Files
- `src/components/PrimaryButton.tsx`
- `src/components/QuantityStepper.tsx`
- `src/components/ProductCard.tsx`
- `src/components/CartItemRow.tsx`
- `src/components/ScreenHeader.tsx`
- `src/components/CategoryChips.tsx`
- `src/components/PriceSummary.tsx`

### What to add
- `PrimaryButton`:
  - props: `label`, `onPress`, `disabled`, `loading`
- `QuantityStepper`:
  - props: `quantity`, `onIncrease`, `onDecrease`
- `ProductCard`:
  - props: `product`, `onPress`
  - image, name, category/rating, price
- `CartItemRow`:
  - props: `product`, `quantity`, `onIncrease`, `onDecrease`, `onRemove`
- `ScreenHeader`:
  - title + optional right action
- `CategoryChips`:
  - selected category + callback
- `PriceSummary`:
  - subtotal, shipping, total rows

## Step 6: Home Screen

### File
- `src/screens/HomeScreen.tsx`

### What to add
- Header with cart action
- Search input
- Category chips
- Product grid/list using `ProductCard`
- Filter products by search + category
- Open details screen on product tap

## Step 7: Product Details Screen

### File
- `src/screens/ProductDetailsScreen.tsx`

### What to add
- Product image
- Name, price, rating
- Description
- Quantity stepper
- Add to cart button

## Step 8: Cart Screen

### File
- `src/screens/CartScreen.tsx`

### What to add
- List cart items using `CartItemRow`
- Quantity controls and remove action
- Totals using `PriceSummary`
- Continue to checkout button
- Empty cart state

## Step 9: Checkout Screen

### File
- `src/screens/CheckoutScreen.tsx`

### What to add
- Mock address section
- Mock payment section
- Order summary (`PriceSummary`)
- Place order button
- Success state after place order

## Step 10: Profile Screen

### File
- `src/screens/ProfileScreen.tsx`

### What to add
- Mock user info card
- Previous orders list
- Simple settings rows

## Step 11: App Routing

### File
- `App.tsx`

### What to add
- Route state:
  - `"home" | "product-details" | "cart" | "checkout" | "profile"`
- Selected product id state
- Screen switching logic using route
- Pass needed props/handlers to each screen

## Step 12: Final Validation

### Commands
- `npm install`
- `npm run typecheck`
- `npm start`

### Check list
- Browse products from Home
- Open product details
- Add, increase, decrease, remove cart items
- Cart persists after reload
- Complete checkout mock flow

