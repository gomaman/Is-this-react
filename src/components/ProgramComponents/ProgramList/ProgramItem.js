
function ProgramItem (props) {
  const {description, extra, level, promo, time, title} = props.item
  if(description && extra && level && promo && time && title) {
    return (
      <div className="program-item">
        <a href="#">
          <div className="program-info">
            <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg"/>
            <h2 className="program-title">{title}</h2>
            <p className="program-description">{description}</p>
          </div>

          <div className="program-extra">
            <ul className="program-features-list">
              <li className="program-feature-item before">{level}</li>
              <li className="program-feature-item">{time}</li>
            </ul>
          </div>

          <span className="program-promo">{promo}</span>
        </a>
      </div>
  )
  }

}

export default ProgramItem