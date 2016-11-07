import $ from 'jquery'
import Navbar from './navbar.jsx'
import GithapSearch from './githapSearch.jsx'
import GithapBox from './githapBox.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  _getData (url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: url,
        beforeSend: () => {
          $('button[name=searchRepo]').html('loading..')
        },
        success: () => {
          $('button[name=searchRepo]').html('Cari Repository')
        }
      })
      .done((res) => {
        resolve(res)
      })
      .fail((res) => {
        reject(res)
      })
    })
  }

  componentDidMount () {
    $('.alert-danger').hide()
  }

  getData () {
    const _username = document.querySelector('input[name=username]').value

    this._getData('http://api.github.com/users/' + _username).then((res) => {
      this.setState({cards: [res]})
    }, (err) => {
      $('.alert-danger').fadeTo(2000, 500).slideUp(500, () => {
        $('.alert-danger').slideUp(500)
        $('.alert-danger').addClass('hidden')
      })
      $('button[name=searchRepo]').html('Cari Repository')
    })
  }

  render () {
    return (
      <div>

        <div className="container pull-top-40">
          <div className="row">

            <GithapSearch button="searchRepo" name="username" click={this.getData.bind(this)}></GithapSearch>

            <div className="clearfix"></div>

            <div className="alert alert-danger" role="alert">
              <b>Maaf!</b>, repository tidak ditemukan.
            </div>

            {
              this.state.cards.map((v,i) => {
                  return (<GithapBox key={i} data={v}></GithapBox>)
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default App
