class CardMachine extends React.Component {
  render () {
    return (
      <div className='col-xs-10'>
        <div className='form-group'>
          <label>Task Name</label>
          <input type='text' className='form-control' name={this.props.taskName} />
        </div>

        <div className='form-group'>
          <label>Description</label>
          <textarea className='form-control' name={this.props.taskDesc}>

          </textarea>
        </div>

        <div className='form-group'>
          <button className='btn btn-default btn-primary' name={this.props.button} onClick={this.props.addTask}>Add Task</button>
        </div>

      </div>
    )
  }
}

export default CardMachine
