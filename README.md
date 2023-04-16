<p align="center">
  <a href="https://earth-impact.vercel.app/" target="_blank">
    <img src="https://user-images.githubusercontent.com/113186458/232259289-3cf27e6f-541c-43d4-a0e9-452adea803d5.png" height="150px" weight="150px">
  </a>
</p>

<p align="center">
A platform where people come together, calculate their carbon footprint and work on reducing it 
</p>
<br>

Earth Impact is a platform to calculate the amount of carbon you emit anually, take pledges to reduce your carbon footprint and compete with others around you to help make Earth a better place to live in, not just for you, but also for the generations to come. 

![NPM](https://img.shields.io/npm/l/next) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/prnvtripathi/EarthImpact?style=plastic) ![GitHub forks](https://img.shields.io/github/forks/prnvtripathi/EarthImpact?style=plastic)

---

## Getting Started - Building and running Earth Impact

To run a local developement build of Earth Impact on your local machine, make sure to have the following dependencies installed:-
    
   ```bash 
- "@types/chart.js": "^2.9.37",
- "chart.js": "^4.2.1",
- "express": "^4.18.2",
- "gsap": "^3.11.5",
- "next": "^13.3.0",
- "react": "18.2.0",
- "react-chartjs-2": "^5.2.0",
- "react-countup": "^6.4.2",
- "react-dom": "18.2.0",
- "react-icons": "^4.8.0",
- "react-intersection-observer": "^9.4.3"
```
    
- You can add these dependencies using `npm i`.
    
- Then run the build using

```bash
npm run build
```

- Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. <br>
 [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Check out the official [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

---

## Contributing

Whether it is a small documentation correction, bug fix or a new feature, contributions are highly appreciated. It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create a feature request to first discuss any significant new ideas. Please check with us before spending too much time, only to find out later that someone else is already working on a similar feature.

`main` branch is the current working branch. Please send your PR's to `main` branch, making sure that it builds on your local system successfully. Also, please make sure all the conflicts are resolved.

---

## License

Carbon Check is licensed for use under the MIT license; you may not use this file except in compliance with the License. To review the license, please click [here](LICENSE).
