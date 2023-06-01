function Video() {
    return (
        <section className="video">
        <h2 className="section-title">Vaizdo įrašai</h2>

        <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <span className="extra-text">Jei galiu aš – gali ir tu!</span>

        <a className="large-button arrow" href="#">
            Visi vaizdo įrašai
            <svg xmlns='http://www.w3.org/2000/svg' width='19' height='33'>
                <path d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fillRule='evenodd' />
            </svg>
        </a>
        </section>
    ) 
}

export default Video