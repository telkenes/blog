import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

let postsDirectory = join(process.cwd(), 'posts')

function getPosts() {
    return fs.readdirSync(postsDirectory)
}

export function getData(slug) {
    let file = matter(fs.readFileSync(join(postsDirectory, slug.endsWith('.md') ? slug : slug + '.md'), 'utf8'))
    let content = file.content.split('\n')


    return {
        slug: slug.replace('.md', ''),
        title: content[0],
        content: content.slice(1, content.length).join('\n'),
        date: file.data.date,
        time: clean(content.join(" ").split(" ").length / 100),
        short: content.slice(1, content.length).join("\n").slice(0, 150) + '...'
    }
}

export default function getAllPosts() {
    let posts = []
    getPosts().forEach(post => {
        posts.push(getData(post))
    });
    posts.sort((a, b) => {
        let nA = a.date.split('/')
        let nB = b.date.split('/')
        return new Date(`${nB[2]}-${nB[1]}-${nB[0]}`).getTime() - new Date(`${nA[2]}-${nA[1]}-${nA[0]}`).getTime()
    })
    return posts
}

export function getAllSlugs() {
    let posts = []
    getPosts().forEach(post => {
        posts.push(post.replace('.md', ''))
    });
    return posts
}

function clean(time) {
    let rTime = Math.round(time)
    return rTime !== 0 ? `${rTime} mins` : `${Math.round(time * 60)} seconds`
}