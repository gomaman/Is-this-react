function Banner(props) {
    return (
        <a href="#" className="bg-image">
          <span className="text-wrapper">
            <span className="color-primary">{props.title}</span>
            <span className="color-black">{props.action}</span>
          </span>
        </a>
    )
  }
  
  export default Banner;