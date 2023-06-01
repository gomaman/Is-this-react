import podcastImage from '../../../../images/podcast-image.jpg'

function PodcastList () {
    return (
        <section className="podcasts">
                        <h2 className="section-title">Podcastai ir radijo laidos</h2>

                        <div className="podcasts-list">
                            <div className="podcast-item">
                                <div className="podcast-controls">
                                    <img src={podcastImage} className="podcast-image" />
                                    <span className="podcast-time">Trukmė: 7:55</span>
                                    <button className="podcast-play">Play</button>
                                </div>

                                <div className="podcast-info">
                                    <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                                    <span className="podcast-date">2021-09-02</span>
                                </div>
                            </div>

                            <div className="podcast-item">
                                <div className="podcast-controls">
                                    <img src={podcastImage} className="podcast-image" />
                                    <span className="podcast-time">Trukmė: 7:55</span>
                                    <button className="podcast-play">Play</button>
                                </div>

                                <div className="podcast-info">
                                    <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                                    <span className="podcast-date">2021-09-02</span>
                                </div>
                            </div>

                            <div className="podcast-item">
                                <div className="podcast-controls">
                                    <img src={podcastImage} className="podcast-image" />
                                    <span className="podcast-time">Trukmė: 7:55</span>
                                    <button className="podcast-play">Play</button>
                                </div>

                                <div className="podcast-info">
                                    <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                                    <span className="podcast-date">2021-09-02</span>
                                </div>
                            </div>

                            <div className="podcast-item-grid">
                                <img src={podcastImage} className="podcast-image-grid" />
                                <span className="podcast-time-grid">Trukmė: 7:55</span>
                                <button className="podcast-play-grid">Play</button>

                                <div className="podcast-info-grid">
                                    <h3 className="podcast-title-grid">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                                    <span className="podcast-date-grid">2021-09-02</span>
                                </div>
                            </div>
                        </div>
                    </section>
    )
}


export default PodcastList