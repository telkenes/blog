import { marked } from 'marked'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Footer from '../../components/footer'
import Head from 'next/head'
import Nav from '../../components/nav'
import { getAllSlugs, getData } from '../../lib/post'

export default function Post({ post }) {
    const router = useRouter()

    if (router.isFallback && !post?.slug) {
        return <div>404</div>
    }

    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <meta
                    name="description"
                    content={post.short}
                    key="desc"
                />
                        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.short}
        />
                        <meta
                    property="og:image"
                    content="https://blog.telky.ml/pfp.png"
                />
            </Head>
            <div className="blog">
                <Nav></Nav>
                <h1 className="title blog-title">
                    {post.title}
                </h1>
                <h3 className="subtitle">
                    - Written on: {post.date}<br></br>
                    - Estimate read time: {post.time}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </div>
    )
}

export function getStaticProps({ params }) {
    let data = getData(params.slug)
    const renderer = {
        heading(text, level) {
            const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            return `
                  <h${level}>
                    ${'#'.repeat(level)}
                    ${text}
                  </h${level}>`
        }
    };
    marked.use({ renderer })
    return {
        props: {
            post: {
                title: data.title,
                short: data.short,
                content: marked(data.content),
                date: data.date,
                time: data.time
            }
        }
    }
}

export function getStaticPaths() {
    let posts = getAllSlugs()
    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post,
                }
            }
        }),
        fallback: false,
    }
}