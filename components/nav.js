import Link from 'next/link'

export default function Nav() {
    return (
        <div className="nav">
            <Link href="/">
                <a className="back">
                    &lt; Back
                </a>
            </Link>
        </div>
    )
}