import Link from 'next/link'
export default function BlogCard({ title, description, date, time, slug }) {
    return (
        <div className="card blog-card">
            <Link href={`/posts/${slug}`} key={slug}>
                <a>
                    <div className="card-header">
                        <h2 className="card-header-title">
                            {title}
                        </h2>
                        <h3 className="subtitle">
                            - Written on: {date}<br />
                            - Estimate read time: {time}
                        </h3>
                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}