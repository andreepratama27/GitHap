class Card extends React.Component {
  render () {
    return (
      <div className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            {this.props.taskName}
            <span className="pull-right">
              <a href="#" className='label label-danger' onClick={this.props.deleteTask}>Delete</a>
            </span>
          </div>
          <div className="panel-body">
            {this.props.taskDesc}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
