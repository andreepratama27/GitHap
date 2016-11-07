import $ from 'jquery'
import RepoCards from './repoCards.jsx'

class UserDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
      repos: []
    }
  }

  componentDidMount () {
    this._getData(this.props.params.username).then((res) => {
      this.setState({users: res})
    })
    this._getData(this.props.params.username + '/repos').then((res) => {
      this.setState({repos: res})
    })
  }

  _getData (username) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: 'http://api.github.com/users/'+username
      })
      .done((res) => {
        resolve(res)
      })
      .fail((res) => {
        reject(res)
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 pull-top-40'>
            <div className="row">
              <div className="col-xs-3 pull-top-40">
                <div className="panel panel-default panel-user-detail">
                  <div className="panel-heading">
                    <img src={this.state.users.avatar_url} />
                  </div>
                  <div className="panel-body">
                    <div className="text-name">{this.state.users.name}</div>
                    <div className="text-username">@{this.state.users.login}</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-9 pull-top-40">

                <div className="row">
                  {
                    this.state.repos.map((v,i) => {
                      return (<RepoCards key={i} data={v}></RepoCards>)
                    })
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail
