import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '../components/blog-card'
import Container from '../components/container'
import getAllPosts from '../lib/post'

export default function Home({ allPosts, random }) {
    let BlogList = []
    allPosts.forEach(post => {
        BlogList.push(<BlogCard title={post.title} description={post.short} date={post.date} time={post.time} slug={post.slug} key={post.slug}></BlogCard>)
    });
    return (
        <div>
            <Head>
                <title>Telk's Blog</title>
                <meta
                    name="description"
                    content="Just a random person on the internet talking about things"
                    key="desc"
                />
                <meta property="og:title" content="Telk's Blog" />
                <meta
                    property="og:description"
                    content="Just a random person on the internet talking about things"
                />
                <meta
                    property="og:image"
                    content="https://blog.telky.ml/pfp.png"
                />
                <link rel="icon" href="/pfp.png"></link>
            </Head>
            <div className="header">
                <div>
                    <div className="pfp-box-mobile">
                        <img className="pfp" src="./pfp.png"></img>
                    </div>
                    <section className="hero is-dark">
                        <div className="hero-body">
                            <h1 className="name">Hello, I am <a className="username">Telk</a></h1>
                            <h2 className="title">
                                {`And welcome to my ${random} blog`}
                            </h2>
                            <p className="about-me">
                                <p>I am currently mainly working on <Link href="https://some-random-api.ml">Some Random API</Link>. I have other side projects such as <Link href="https://github.com/telkenes/mailcord">Mailcord</Link> and <Link href="https://marketplace.visualstudio.com/items?itemName=Telk.necros">Necros</Link>.</p>

                                <p>You can see my full project list <Link href="/projects">here</Link> (Coming Soon)</p>

                                <p>Things I enjoy: programming, reading manga/manhwa/manhuas, pixel art, and music.</p>
                            </p>
                        </div>
                    </section>
                </div>
                <div className="pfp-box">
                    <img className="pfp" src="./pfp.png"></img>
                </div>
            </div>
            <Container>
                <h1 className="title"># Posts</h1>
                {BlogList}
            </Container>
        </div>
    )
}

export function getStaticProps() {
    let allPosts = getAllPosts()
    let random = ['minimalist', 'shit', 'blog like', 'boring', 'stupid']
    return {
        props: { allPosts, random: random[Math.floor(Math.random() * random.length)] }
    }
}
