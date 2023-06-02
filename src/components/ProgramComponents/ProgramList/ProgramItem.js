
function ProgramItem (props) {
    return (
        <div className="program-item">
          <a href="#">
            <div className="program-info">
              <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg"/>
              <h2 className="program-title">{props.title}</h2>
              <p className="program-description">{props.description}</p>
            </div>

            <div className="program-extra">
              <ul className="program-features-list">
                <li className="program-feature-item before">{props.level}</li>
                <li className="program-feature-item">{props.time}</li>
              </ul>
            </div>

            <span className="program-promo">{props.promo}</span>
          </a>
        </div>
    )
}

export default ProgramItem