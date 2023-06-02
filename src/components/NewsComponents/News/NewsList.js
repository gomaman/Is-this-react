import arrow from '../../../images/arrow.svg'
import hacker from '../../../images/hacker.png'
import MainNewsItem from './MainNewsItem'
import SideNewsItem from './SideNewsItem'

function News () {
    return (
        <section className="news">
        <div className="main-news">

            <MainNewsItem
            img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
            category="AI & Deep learning"
            title="Ar „ChatGPT“ užims mūsų darbo vietas?"
            date="2023-01-27"
            >
            </MainNewsItem>

            <MainNewsItem
            img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
            category="Naujienos"
            title="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
            date="2023-02-21"
            >
            </MainNewsItem>

        </div>

        <div className="secondary-news">

            <SideNewsItem
            img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
            category="AI & Deep learning"
            title="Ar „ChatGPT“ užims mūsų darbo vietas?"
            date="2023-01-27"
            ></SideNewsItem>

            <SideNewsItem
            img="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80"
            category="Naujienos"
            title="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
            date="2023-01-27"
            ></SideNewsItem>
            
        </div>

        <a className="large-button arrow" href="#">Visos naujienos <img src= {arrow}/></a>
    </section>
    )
}


export default News