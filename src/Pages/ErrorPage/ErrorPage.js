import '../ErrorPage/ErrorPage.css'

function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-description">
                <h1>404</h1>
                <span>This page does not exist. I think. Probably.</span>
            </div>
            <div className="error-icon">
                <img src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2014/02/22/19gdsllyc1rb0jpg.jpg"></img>
            </div>
        </div>
    )
}


export default ErrorPage