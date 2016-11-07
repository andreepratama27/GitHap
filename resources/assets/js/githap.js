import App from './components/githap/app.jsx'
import Tentang from './components/githap/tentang.jsx'
import UserDetail from './components/githap/userDetail.jsx'
import Navbar from './components/githap/navbar.jsx'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Githap extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Githap

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/githap" component={Githap}>
        <IndexRoute component={App} />
        <Route path="/githap/tentang" component={Tentang} />
        <Route path="/githap/userdetail/:username" component={UserDetail} />
      </Route>
    </Router>
  ), document.getElementById('container')
)
