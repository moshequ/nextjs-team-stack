This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Stack

- Next.js 13
- Typescript
- ESlint
- Prettier [Based on this post](https://bobbyhadz.com/blog/eslint-couldnt-find-the-config-prettier-to-extend-from)
- Husky Lint-staged Commitizen [Based on this post](https://spacejelly.dev/posts/how-to-automate-code-linting-in-next-js-with-eslint-husky-git-hooks/)
- MUI and material icons [Based on material UI examples](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
- (Future) Vitest for unit and integrations tests
- (Future) Cypress for E2E tests

# Issues:

- Auto format in JetBrains [use file watchers](https://stackoverflow.com/a/76857479)
- ESLint: TypeError: this.libOptions.parse is not a function with JetBrains -> [change the file path](https://stackoverflow.com/a/75196241) to `**/*.(js|ts|jsx|tsx|html|vue)`
