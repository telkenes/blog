import Link from 'next/link'

export default function Nav() {
    return <div className="nav">
        <Link href="/">
            <div className="back">
                &lt; Back
            </div>
        </Link>
    </div>
}