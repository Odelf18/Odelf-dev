<div align="center">
    <a href="https://github.com/Odelf18/Odelf-dev"><h1 align="center">Odelf Dev Portfolio</h1></a>

My personal portfolio website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>

## Running Locally

```sh-session
git clone https://github.com/Odelf18/Odelf-dev.git
cd Odelf-dev
```

Create a `.env.local` file with your environment variables:

```env
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

Then install dependencies and run the development server:

```sh-session
pnpm install
pnpm dev
```

## Features

- **Project Showcase**: Display your projects with MDX content
- **View Counter**: Track page views using Upstash Redis
- **Dynamic Project Listing**: Automatically displays all published projects
- **Modern Design**: Clean and minimal dark theme
- **SEO Optimized**: Built-in metadata and Open Graph support

## Tech Stack

- [Next.js 13](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Contentlayer](https://www.contentlayer.dev/) - Content management
- [Upstash Redis](https://upstash.com) - Serverless Redis for view tracking
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

MIT License - see [LICENSE](LICENSE) file for details.
