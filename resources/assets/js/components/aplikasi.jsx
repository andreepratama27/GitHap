import Card from './card.jsx'
import CardMachine from './cardMachine.jsx'
import $ from 'jquery'

class Aplikasi extends React.Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  getData () {
    return new Promise ((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: 'http://58185e6a5b0a661100ca9f49.mockapi.io/api/v1/todos',
        beforeSend: () => {
          $('.loading').removeClass('hidden')
        },
        success: () => {
          $('.loading').addClass('hidden')
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

  sendData (data) {
    return new Promise ((resolve, reject) => {
      $.ajax({
        type: 'POST',
        url: 'http://58185e6a5b0a661100ca9f49.mockapi.io/api/v1/todos',
        data,
        beforeSend: () => {
            $('button[name=addBtn]').html('wait..')
        },
        success: () => {
            $('button[name=addBtn]').html('Add Task')
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

  deleteData (data) {
    return new Promise ((resolve, reject) => {
      $.ajax({
        type: 'DELETE',
        url: 'http://58185e6a5b0a661100ca9f49.mockapi.io/api/v1/todos/' + data.id,
      })
      .done((res) => {
        resolve(res)
      })
    })
  }

  componentDidMount () {
    this.getData().then((res) => {
      this.setState({data: res})
    })
  }

  addTask () {
    const taskName = document.querySelector('input[name=taskName]'),
          taskDesc = document.querySelector('textarea[name=taskDesc]')

    const asdf = {
      taskName: taskName.value,
      taskDesc: taskDesc.value
    }

    this.sendData(asdf).then((res) => {
      var baru = this.state.data
      baru.push(res)
      //this.setState({data: baru})
      // or
      this.setState(baru)
      taskName.value = ''
      taskName.focus()
      taskDesc.value = ''
    })
  }

  deleteTask (value) {
      this.deleteData(value).then((res) => {
        const data = this.state.data

        const baru = data.filter((i) => {
          return i.id !== res.id
        })

        this.setState({data: baru})
      })
  }

  render () {
    return (
      <div className="pull-top-40">
        <CardMachine addTask={this.addTask.bind(this)} taskName="taskName" taskDesc="taskDesc" button="addBtn" />

        <div className='clearfix'></div>

        <div className='container text-center loading hidden'>
          <h1>Loading..</h1>
        </div>

        {
          this.state.data.map((v,i) => {
            return (<Card key={i} taskName={v.taskName} taskDesc={v.taskDesc} deleteTask={this.deleteTask.bind(this, v)}/>)
          })
        }
      </div>
    )
  }
}

export default Aplikasi
