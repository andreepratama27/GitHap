import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar.jsx'
import Aplikasi from './components/aplikasi.jsx'

class Apps extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container pull-top-40">
          <div className="row">
            <Aplikasi />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Apps />, document.getElementById('container'))
