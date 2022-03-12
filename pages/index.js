import Link from 'next/link'
import BlogCard from '../components/blog-card'
import Container from '../components/container'
import getAllPosts from '../lib/post'

export default function Home({ allPosts, random }) {
    const blogList = allPosts.map(post => (
        <BlogCard
            title={post.title}
            description={post.short}
            date={post.date}
            time={post.time}
            slug={post.slug}
            key={post.slug}
        />
    ))
    return (
        <div>
            <div className="header">
                <div>
                    <div className="pfp-box-mobile">
                        <img className="pfp" src="./pfp.png"></img>
                    </div>
                    <section className="hero is-dark">
                        <div className="hero-body">
                            <h1 className="name">Hello, I am <span className="username">Telk</span></h1>
                            <h2 className="title">
                                {`And welcome to my ${random} blog`}
                            </h2>
                            <div className="about-me">
                                <p>I am currently mainly working on <Link href="https://some-random-api.ml">Some Random API</Link>. I have other side projects such as <Link href="https://github.com/telkenes/mailcord">Mailcord</Link> (An email client which sends emails to a Discord channel through a weebhook) and <Link href="https://marketplace.visualstudio.com/items?itemName=Telk.necros">Necros</Link>, a Visual Studio Code theme made by me.</p>

                                <p>You can see my full project list <Link href="/projects">here.</Link></p>

                                <p>Things I enjoy: programming, watching <Link href="https://kitsu.io/users/telkenes">anime</Link>, pixel art, and music.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="pfp-box">
                    <img className="pfp" src="./pfp.png"></img>
                </div>
            </div>
            <Container>
                <h1 className="title"># Posts</h1>
                {blogList}
            </Container>
        </div>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts()
    const randomWords = ['minimalist', 'shit', 'blog like', 'boring', 'stupid']
    const random = randomWords[Math.floor(Math.random() * randomWords.length)]
    return {
        props: { allPosts, random }
    }
}
