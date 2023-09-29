## Setup

1. Commands to set up project

   - `npx create-next-app@latest ./`

     - TypeScript - yes
     - ESLint - no
     - Tailwind CSS - yes
     - `src/` directory - no
     - App Router - yes
     - Customize import alias - no

   - `npm run dev` - spin up local server

## TypeScript

1. At [(1:42:45)](https://youtu.be/A6g8xc0MoiY?si=XybQ1AVYHEdRWRWh&t=6165) - create directory `types` and add `index.ts` to specify our types .

## Resources

1. Download [project files for public folder here](https://youtu.be/A6g8xc0MoiY?si=ky4GdkVKYJ2_-xhH&t=6333)

2. Project [github repo here](https://github.com/adrianhajdin/project_next13_car_showcase/tree/main)

3. Use [Headlessui.com](https://headlessui.com/) for the **Autocomplete** in `SearchManufacturer` component at [(2:16:10)](https://youtu.be/A6g8xc0MoiY?si=S74f4zzcQWaPY7SG&t=8170)

   - Install with
     - `npm i @headlessui/react`

4. Rapid API [Car API by API Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)

   - Added to [(2:35:55)](https://youtu.be/A6g8xc0MoiY?si=7A_XFbyzCsPALiYv&t=9355)
   - Login and Click the [pricing tab and select the free option](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/pricing)
   - Copy the **Code Snippet** for **JavaScript => Fetch** into new directory `utils/index.ts`
   -

5. Imagin [Car Image API](https://www.imagin.studio/car-image-api) at [(3:24:26)](https://youtu.be/A6g8xc0MoiY?si=6bVZB3XSASafx1GI&t=12266)
   - use code `hrjavascript-mastery`

## Bookmarks

- Configure API URL for `cdn.imagin.studio` at [(3:29:05)](https://youtu.be/A6g8xc0MoiY?si=mVbuZDoSRlaAIaH9&t=12545) in **next.config.js**

  - specify the permissible domains as shown below.
  - restart local server after editing next.config.js (or refresh may do)

- Search Params through URL working at [(3:44:35)](https://youtu.be/A6g8xc0MoiY?si=fBVOO5gcFWVa9SSD&t=13476)
  - `http://localhost:3000/?model=q5&manufacturer=audi`
  - At (3:44:53) update the search params in **SearchBar.tsx** to refetch the api call in **page.tsx** `fetchCars()` call.

```js
//next.config.js:
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"]
  }
}
```

- Implemented **Search** for specific car around [(3:32:35)](https://youtu.be/A6g8xc0MoiY?si=xM_2UQNHV5LBNCXl&t=12755)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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
