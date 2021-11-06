import Link from 'next/link'

export default function Nav() {
    return <div className="nav">
        <div className="back">
            <Link href="/">&#60; Back</Link>
        </div>
    </div>
}