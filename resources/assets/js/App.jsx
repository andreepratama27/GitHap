import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      href: [
        {text: 'Add Card', href: '#addcard', icon: 'fa fa-plus-circle'},
        {text: 'Profile', href: '#'}
      ]
    }
  }
  render () {
    return (
      <div>

        <Navbar brand="Cards" link={this.state.href} />

        <div className="container">

          <div className="row">

            <Card />

            <Card />

          </div>

        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
