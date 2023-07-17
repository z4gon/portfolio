### Portfolio

[Live Portfolio](https://z4gon.github.io)

## Steps to add a new project/blog entry

- Reference [statically generated blog by Next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

1. Create a new markdown file under `/data/(projects|blog)/the-project-id.md`
2. For projects:
   1. The metadata image will be `/public/resources/projects/the-project-id/thumbnail.gif`
   1. The grid thumbnail video will be `/public/resources/projects/the-project-id/thumbnail.mp4`
3. Put optimized `(.mp4|.jpg)` files in `/resources/(projects|blog)/the-project-id/`

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
