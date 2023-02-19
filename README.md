### Portfolio

[Live Portfolio](https://z4gon.github.io)

## Steps to add a new project entry

- Reference [statically generated blog by Next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

1. Create a new config file under `/data/projects/the-project-id.md`.
1. Create an optimized `.gif` to use as metadata image in `/public/images/thumbnails/the-project-id.gif`.
1. Create an optimized `.mp4` to use as the grid thumbnail in `/public/videos/thumbnails/the-project-id.mp4`.
1. Put optimized `.jpg` images in `/public/images/project/the-project-id/`.
1. Put optimized `.mp4` videos in `/public/videos/project/the-project-id/`.

## Steps for adding a new blog post

- Reference [statically generated blog by Next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

1. Create a new blog post entry file under `/data/blog-posts/the-blog-post-slug-id.md`.
2. Create an optimized `.jpg` to use as cover image in `/public/images/blog/the-blog-post-slug-id/cover.jpg`.
3. Put optimized `.jpg` and `.png` images in `/public/images/blog/the-blog-post-slug-id/`.
4. Put optimized `.mp4` videos in `/public/videos/blog/the-blog-post-slug-id/`.

## Development

```bash
npm run dev
# or
yarn dev
```

## Build Static HTML for Github Pages

```bash
npm run build
npm run export
# or
yarn build
yarn export
```
