export default function Hero({ title, description }) {
    return (
        <section className="hero is-dark">
            <div className="hero-body">
                <p className="title">
                    { title }
                </p>
                <p className="subtitle">
                    { description }
                </p>
            </div>
        </section>
    )
}