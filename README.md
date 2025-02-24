# Lazy Load Image Component with Intersection Observer API

A React component that implements lazy loading for images using the Intersection Observer API. This component helps improve page performance by loading images only when they enter the viewport.

## Features

- 🎯 Lazy loading of images using Intersection Observer API
- ⚡ Optimized performance by loading images on-demand
- 🔄 Automatic cleanup of observers
- 🎨 Built with React + TypeScript
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Intersection Observer API

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manik9165/lazy-load-img-intersection-observer-api-component.git
```

2. Navigate to the project directory:
```bash
cd lazy-load-img-intersection-observer-api-component
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

The `LazyImg` component can be imported and used in your React components like this:

```tsx
import LazyImg from './LazyImg';

function YourComponent() {
  return (
    <LazyImg
      src="your-image-url.jpg"
      alt="Your image description"
    />
  );
}
```

### Props

- `src`: The URL of the image to be loaded
- `alt`: Alternative text for the image

## How It Works

The component uses the Intersection Observer API to detect when the image enters the viewport. When the image becomes visible (intersects with the viewport), it triggers the loading of the actual image. This approach helps in:

1. Reducing initial page load time
2. Saving bandwidth by loading images only when needed
3. Improving overall page performance

## Contributing

Feel free to open issues and pull requests for any improvements you'd like to add.

## License

This project is open source and available under the MIT License.
