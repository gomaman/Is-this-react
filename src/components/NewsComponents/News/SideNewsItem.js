function SideNewsItem() {
    return (
        <article className="news-article">
            <a href="#">
                <div className="image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" />
                </div>
                <div className="info-wrapper">
                    <span className="article-category">AI & Deep learning</span>
                    <h2 className="article-title">Ar „ChatGPT“ užims mūsų darbo vietas?</h2>
                    <span className="article-date">2023-01-27</span>
                </div>
            </a>
        </article>
    )
}


export default SideNewsItem