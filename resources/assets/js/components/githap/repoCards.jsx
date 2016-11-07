class RepoCards extends React.Component {
  render () {
    return (
      <div className="col-xs-4">
        <div className="panel panel-default panel-user-repository">
          <div className="panel-heading">
            {this.props.data.name}
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item list-group-item-info">
                <a href="#">Copy Link</a>
              </li>
              <li className="list-group-item list-group-item-success">
                <a href="#">Lihat Repository</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default RepoCards
