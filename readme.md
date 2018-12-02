# TailwindCSS Modular Scale Plugin

Modular scale is used in typography as a sequence of text sizes are harmonious to each other.

[Here's an article that explains the Modular Scale far better than I ever will](https://alistapart.com/article/more-meaningful-typography)

## Installation

```sh
# NPM
npm install --save-dev tailwindcss-modularscale

# Yarn
yarn add --dev tailwindcss-modularscale
```

## Usage

### Default configuration.
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-modularscale')()
  ],
}
```

The default configuration:
```js
{
  sizes: [
    { size: 'sm', value: -1 },
    { size: 'base', value: 0 },
    { size: 'lg', value: 1 },
    { size: 'xl', value: 2 },
    { size: '2xl', value: 3 },
    { size: '3xl', value: 4 },
    { size: '4xl', value: 5 }
  ],
  base:  16,
  ratio: 1.333, // Perfect Fourth
  unit: 'px',
}
```

The generated code will use `.ms-` to avoid conflicts with the `textSize` utilities.

```css
.ms-sm   { font-size: 12px; }
.ms-base { font-size: 16px; }
.ms-lg   { font-size: 21px; }
.ms-xl   { font-size: 28px; }
.ms-2xl  { font-size: 38px; }
.ms-3xl  { font-size: 51px; }
.ms-4xl  { font-size: 67px; }
```

### Custom configuration
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-modularscale')({
      sizes: [
        { size: 'base', value: 0 },
        { size: 'lg', value: 1 },
      ],
      base:  1,
      ratio: 1.2,
      unit: 'rem',
    })
  ],
}
```

### To add other variants of the font sizes
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-modularscale')({
      base:     16,
      ratio:    1.333,
      variants: ['responsive'],
    })
  ],
}
```


## Limitations

As of now, this plugin only supports one base size. I'm still not sure what's the best utility class if I were to support multiple base sizes.
