import Link from 'next/link'

export default function Nav() {
    return (
        <div className="nav">
            <Link href="/">
                <a>
                    <div className="back">
                        &lt; Back
                    </div>
                </a>
            </Link>
        </div>
    )
}