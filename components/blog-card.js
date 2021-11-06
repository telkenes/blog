import Link from 'next/link'
import marked from 'marked'
export default function BlogCard({ title, description, date, time, slug }) {
    return (
        <Link as={`/posts/${slug}`} href={`/posts/[slug]`} key={`${slug}`}>
            <div className="card blog-card">
                <div className="card-header">
                    <h2 className="card-header-title">
                        {title}
                    </h2>
                    <h3 className="subtitle">
                        - Written on: {date}<br></br>
                        - Estimate read time: {time}
                    </h3>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}