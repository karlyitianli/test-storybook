# Storybook with MUI components
This repo is an instance of Storybook with all the MUI react components found [here](https://mui.com/material-ui/all-components/). Use it to get started on developing your own component library.

**Inputs (13)**
- Autocomplete
- Button
- Button Group
- Checkbox
- Floating Action Button
- Radio Group
- Rating
- Select
- Slider
- Switch
- Text Field
- Transfer List
- Toggle Button

**Data Display (10)**
- Avatar
- Badge
- Chip
- Divider
- Icons
- List
- Table
- Tooltip
- Typography

**Feedback (6)**
- Alert
- Backdrop
- Dialog
- Progress
- Skeleton
- Snackbar

**Surfaces (4)**
- Accordion
- App Bar
- Card
- Paper

**Navigation (9)**
- Bottom Navigation
- Breadcrumbs
- Drawer
- Link
- Menu
- Pagination
- Speed Dial
- Stepper
- Tabs

**Layout (4)**
- Box
- Container
- Grid
- Stack
  
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
