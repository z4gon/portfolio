import Head from 'next/head'

interface Props {
  title?: string
  pathUrl?: string
  imageUrl?: string
  faviconUrl?: string
  description?: string
}

export default function Metatags(props: Props) {
  const urlBase = `https://z4gon.github.io`

  const {
    title = 'Gonzalo Cumini | Portfolio',
    pathUrl,
    imageUrl = '/thumbnail.gif',
    faviconUrl = '/favicon.ico',
    description = 'Gonzalo Cumini | Portfolio',
  } = props

  const url = `${urlBase}${pathUrl}`
  const imageUrlFull = `${urlBase}${imageUrl}`
  const faviconUrlFull = `${urlBase}${faviconUrl}`

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrlFull} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrlFull} />

      <link rel="icon" href={faviconUrlFull} />

      {/* https://nextjs.org/learn/seo/crawling-and-indexing/canonical */}
      <link rel="canonical" href={url} key="canonical" />
    </Head>
  )
}
