import marked from 'marked'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Footer from '../../components/footer'
import Nav from '../../components/nav'
import { getAllSlugs, getData } from '../../lib/post'

export default function Post({ post }) {
    const router = useRouter()

    if (router.isFallback && !post?.slug) {
        return <div>404</div>
    }

    return (
        <div>
            <Container>
                <Nav></Nav>
                <h1 className="title blog-title">
                    {post.title}
                </h1>
                <h3 className="subtitle">
                    - Written on: {post.date}<br></br>
                    - Estimate read time: {post.time}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Container>
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