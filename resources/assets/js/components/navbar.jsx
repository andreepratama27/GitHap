class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar navbar-default navbar-fixed-top card-navbar">
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">React JS.</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
