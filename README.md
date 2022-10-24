### Portfolio

[Live Portfolio](https://z4gon.github.io)

## Steps to add a new entry

1. Create a new config file under `/data/projects/the-project-id.ts`.
1. Create an optimized `.gif` to use as metadata image in `/public/images/thumbnails/the-project-id.gif`.
1. Create an optimized `.mp4` to use as the grid thumbnail in `/public/videos/thumbnails/the-project-id.mp4`.
1. Put optimized `.jpg` images in `/public/images/project/the-project-id/`.
1. Put optimized `.mp4` videos in `/public/videos/project/the-project-id/`.

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
