class GithapSearch extends React.Component {
  render () {
    return (
      <div className="col-xs-8 col-xs-offset-2 pull-top-40">
        <div className="form-group">
          <input type='text' className='form-control' name={this.props.name} placeholder="Masukan username" />
          <br />
          <div className="set-center">
            <button className="btn btn-default" onClick={this.props.click} name={this.props.button}>
              Cari Repository
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default GithapSearch
