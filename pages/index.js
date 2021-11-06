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
                                <p>I am currently mainly working on <Link href="https://some-random-api.ml">Some Random API</Link>. I have other side projects such as <Link href="https://github.com/telkenes/mailcord">Mailcord</Link> (An email client which sends emails to a Discord channel through a weebhook) and <Link href="https://marketplace.visualstudio.com/items?itemName=Telk.necros">Necros</Link>, a Visual Studio Code theme made by me.</p>

                                <p>You can see my full project list <Link href="/projects">here.</Link></p>

                                <p>Things I enjoy: programming, watching <Link href="https://kitsu.io/users/telkenes">anime</Link>, pixel art, and music.</p>
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
