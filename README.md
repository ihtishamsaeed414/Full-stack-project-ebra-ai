# E-Commerce Store

A modern e-commerce store built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates the implementation of a simple e-commerce application with features like product listing, product details, and shopping cart functionality.

## Features

- Product listing with images, titles, and prices
- Detailed product view with full information
- Shopping cart functionality
  - Add/remove items
  - Update quantities
  - Calculate total price
- Responsive design
- Loading states
- Error handling

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Fake Store API

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ecommerce_assestment
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. ## 🔧 Environment Variables

This project requires environment variables to be configured before running.  
Create a `.env.local` file in the project root and add the following values:

```sh
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com

## Project Structure

```

src/
├── app/ # Next.js app router pages
├── components/ # Reusable React components
├── services/ # API services
├── store/ # Zustand store
└── types/ # TypeScript type definitions

```

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data. No API key is required.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
