import Link from 'next/link'
import styles from '../../../styles/components/blog/CoverImage.module.sass'

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
    // eslint-disable-next-line @next/next/no-img-element
    const image = <img src={src} alt={`Cover Image for ${title}`} />

    return (
        <div className={styles.coverImage}>
            {slug ? (
                <Link
                    as={`/blog/${slug}`}
                    href="/blog/[slug]"
                    aria-label={title}
                >
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
