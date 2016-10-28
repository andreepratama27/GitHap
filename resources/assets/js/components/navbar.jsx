class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar navbar-default card-navbar">
        <div className="container">
          <div className="row">

            <div className="navbar-header">
              <a className="navbar-brand" href="#">{ this.props.brand }</a>
            </div>

            <ul className="nav navbar-nav navbar-right">
            {
              this.props.link.map((v, i) => {
                return (<li key={i}><a href={v.href}>{v.icon ? <i className={v.icon}></i> : null} {v.text}</a></li>)
              })
            }
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

module.exports = Navbar
