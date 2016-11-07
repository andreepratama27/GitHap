import { Link } from 'react-router'

class GithapBox extends React.Component {
  render () {
    return (
      <div className="col-xs-3">
        <div className="panel panel-default githap-cards">
          <div className="panel-heading">
            <img src={this.props.data.avatar_url}></img>
            <div className="username label label-primary">
              {this.props.data.login}
            </div>
          </div>
          <div className="panel-footer text-center">
            {/* <a href="#" className='btn btn-default'>Lihat repository</a> */}
            {/* <Link className='btn btn-default' to="/githap/userdetail/">Lihat Repository</Link> */}
            <Link className='btn btn-default btn-danger' to={{ pathname: '/githap/userdetail/'+this.props.data.login}}>Lihat repository</Link>
            {/* atau */}
            {/* <Link to={{ className: 'btn btn-default', pathname: '/githap/userdetail/', query: {username: this.props.data.login}}}>Lihat repository</Link> */}
          </div>
        </div>
      </div>
    )
  }
}

export default GithapBox
