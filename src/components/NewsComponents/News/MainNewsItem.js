function MainNewsItem (props) {
    return (
        <article className="news-article">
        <a href="#">
            <div className="image-wrapper">
                <img src={props.img} />
            </div>
            <div className="info-wrapper">
                <span className="article-category">{props.category}</span>
                <h2 className="article-title">{props.title}</h2>
                <span className="article-date">2023-01-27</span>
            </div>
        </a>
        </article>
    )
}



export default MainNewsItem