import arrow from '../../../images/arrow.svg'
import hacker from '../../../images/hacker.png'

function News () {
    return (
        <section className="news">
        <div className="main-news">

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

            <article className="news-article">
                <a href="#">
                    <div className="image-wrapper">
                        <img src="https://img.freepik.com/premium-photo/people-talking-working-together-modern-office-near-computers_146671-32190.jpg?w=2000" />
                    </div>
                    <div className="info-wrapper">
                        <span className="article-category">Naujienos</span>
                        <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
                        <span className="article-date">2023-01-27</span>
                    </div>
                </a>
            </article>

        </div>

        <div className="secondary-news">
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

            <article className="news-article">
                <a href="#">
                    <div className="image-wrapper">
                        <img src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80" />
                    </div>
                    <div className="info-wrapper">
                        <span className="article-category">Naujienos</span>
                        <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
                        <span className="article-date">2023-01-27</span>
                    </div>
                </a>
            </article>

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

            <article className="news-article">
                <a href="#">
                    <div className="image-wrapper">
                        <img src={hacker} />
                    </div>
                    <div className="info-wrapper">
                        <span className="article-category">Naujienos</span>
                        <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
                        <span className="article-date">2023-01-27</span>
                    </div>
                </a>
            </article>
        </div>

        <a className="large-button arrow" href="#">Visos naujienos <img src= {arrow}/></a>
    </section>
    )
}


export default News