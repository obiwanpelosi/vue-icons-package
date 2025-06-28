# Vue Icons

A comprehensive collection of Vue 3 icon components with TypeScript support, including multiple popular icon sets:

- **Ant Design Icons** (`ai`) - Professional UI icons
- **Box Icons** (`bx`) - Simple, open source icons
- **Circum Icons** (`ci`) - Minimalist, consistent icons
- **CSS.gg Icons** (`cg`) - 700+ CSS Grid, Flexbox & SVG icons
- **Dev Icons** (`di`) - Programming language and development tool icons
- **Feather Icons** (`fi`) - Simply beautiful open source icons

## Features

- 🎯 **Tree-shakeable** - Only import the icons you use
- 🏷️ **TypeScript support** - Full type definitions included
- ⚡ **Vue 3 compatible** - Built with Vue 3 Composition API
- 🎨 **Customizable** - Easy to style and customize
- 📦 **Multiple import patterns** - Import individual icons or entire sets
- 🔧 **Zero dependencies** - Only Vue as peer dependency

## Installation

```bash
npm install vue-icons-lib
# or
yarn add vue-icons-lib
# or
pnpm add vue-icons-lib
```

### Peer Dependencies

This library requires Vue 3.x as a peer dependency:

```json
{
  "peerDependencies": {
    "vue": "^3.0.0"
  }
}
```

## Usage

### Basic Usage

```vue
<script setup>
import { AiFillAccountBook } from "vue-icons-lib/ai";
</script>

<template>
  <AiFillAccountBook />
</template>
```

### Using Props

All icons extend the `BaseIcon` component and accept these props:

```vue
<script setup>
import { FiHeart } from "vue-icons-lib/fi";
</script>

<template>
  <!-- Default size (1em) -->
  <FiHeart />

  <!-- Custom size -->
  <FiHeart size="24px" />
  <FiHeart :size="32" />

  <!-- Custom color -->
  <FiHeart color="#ff0000" />

  <!-- Custom classes -->
  <FiHeart class="my-icon" />

  <!-- Custom styles -->
  <FiHeart style="margin-right: 8px;" />

  <!-- All props together -->
  <FiHeart
    size="24px"
    color="#ff6b6b"
    class="heart-icon"
    style="cursor: pointer;"
  />
</template>
```

### Import Patterns

#### Individual Icons (Recommended for tree-shaking)

```vue
<script setup>
import { AiFillAccountBook } from "vue-icons-lib/ai";
import { Bs0Circle } from "vue-icons-lib/bs";
import { FiHeart } from "vue-icons-lib/fi";
</script>
```

#### Multiple Icons from Same Set

```vue
<script setup>
import {
  AiFillAccountBook,
  AiFillAlert,
  AiFillAlipayCircle,
} from "vue-icons-lib/ai";
</script>
```

#### All Icons from a Set (Not recommended - larger bundle)

```vue
<script setup>
import * as AiIcons from "vue-icons-lib/ai";
</script>
```

## Available Icon Sets

### Ant Design Icons (`ai`)

Professional UI icons with filled and outlined variants:

```vue
<script setup>
import {
  AiFillAccountBook,
  AiFillAlipaySquare,
  AiFillHeart,
  AiFillStar,
} from "vue-icons-lib/ai";
</script>
```

### Box Icons (`bx`)

Simple, open source icons including logos:

```vue
<script setup>
import { BxLogoBitcoin, BxLogoApple, BxHome, BxUser } from "vue-icons-lib/bx";
</script>
```

### Circum Icons (`ci`)

Minimalist, consistent icons:

```vue
<script setup>
import { CiAlarmOff, CiAvocado, CiHeart, CiStar } from "vue-icons-lib/ci";
</script>
```

### Feather Icons (`fi`)

Simply beautiful open source icons:

```vue
<script setup>
import { FiAirplay, FiAlignRight, FiHeart, FiStar } from "vue-icons-lib/fi";
</script>
```

### CSS.gg Icons (`cg`)

700+ CSS Grid, Flexbox & SVG icons:

```vue
<script setup>
import { CgAbstract, CgAdidas, CgAdd, CgClose } from "vue-icons-lib/cg";
</script>
```

### Dev Icons (`di`)

Programming language and development tool icons:

```vue
<script setup>
import { DiAndroid, DiAtom, DiReact, DiVuejs } from "vue-icons-lib/di";
</script>
```

## Props

All icons accept the following props:

| Prop      | Type                               | Default          | Description                      |
| --------- | ---------------------------------- | ---------------- | -------------------------------- |
| `size`    | `string \| number`                 | `"1em"`          | Icon size (CSS units or numbers) |
| `color`   | `string`                           | `"currentColor"` | Icon color (CSS color value)     |
| `class`   | `string`                           | `""`             | Additional CSS classes           |
| `style`   | `Record<string, string \| number>` | `{}`             | Inline styles                    |
| `viewBox` | `string`                           | `"0 0 24 24"`    | SVG viewBox attribute            |

## TypeScript Support

This library includes full TypeScript definitions. No additional `@types` package needed.

```typescript
import { AiFillAccountBook } from "vue-icons-lib/ai";

// TypeScript will provide full type checking and IntelliSense
const MyComponent = defineComponent({
  setup() {
    return () => h(AiFillAccountBook, { size: "24px", color: "red" });
  },
});
```

## Tree Shaking

For optimal bundle size, import individual icons:

```typescript
// ✅ Good - only this icon will be included
import { AiFillAccountBook } from "vue-icons-lib/ai";

// ❌ Avoid - entire icon set will be included
import * as AiIcons from "vue-icons-lib/ai";
```

## Styling

### CSS Classes

```vue
<template>
  <FiHeart class="my-custom-icon" />
</template>

<style>
.my-custom-icon {
  transition: transform 0.2s ease;
}

.my-custom-icon:hover {
  transform: scale(1.1);
}
</style>
```

### CSS Variables

```vue
<template>
  <FiHeart class="icon" />
</template>

<style>
.icon {
  --icon-size: 32px;
  --icon-color: #ff6b6b;
}
</style>
```

## Browser Support

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your changes
4. Run tests: `pnpm test`
5. Submit a pull request

## Development

```bash
# Install dependencies
pnpm install

# Generate all icons
pnpm run generate:all

# Build the library
pnpm run build

# Build types only
pnpm run build:types
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.0

- Initial release
- Support for 6 icon sets
- TypeScript support
- Tree-shaking support
