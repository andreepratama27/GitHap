import { Link, browserHistory } from 'react-router'

class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* <a href="#" className="navbar-brand">GitHap</a> */}
            <Link to="/githap" className="navbar-brand" onClick={browserHistory.goBack}>GitHap</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
              <li>
                <Link onlyActiveOnIndex activeStyle={{color: '#53acff'}} to='/githap'>Home</Link>
              </li>
              <li>
                <Link to='/githap/tentang' activeStyle={{color: '#53acff'}}>Tentang</Link>
              </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
