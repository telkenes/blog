import Link from 'next/link'

export default function Nav() {
    return <div className="nav">
        <Link href="/">
            <div className="back">
                &#60; Back
            </div>
        </Link>
    </div>
}