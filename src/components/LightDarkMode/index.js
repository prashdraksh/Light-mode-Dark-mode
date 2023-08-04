// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isBtnON: true,
  }

  onBtn = () => {
    this.setState({
      isBtnON: false,
    })
  }

  offBtn = () => {
    this.setState({
      isBtnON: true,
    })
  }

  render() {
    const {isBtnON} = this.state
    if (!isBtnON) {
      return (
        <div className="container">
          <div className="cardcontainer">
            <h1 className="heading">Click to change mode</h1>
            {isBtnON ? (
              <button type="button" onClick={this.onBtn}>
                Light Mode
              </button>
            ) : (
              <button type="button" onClick={this.offBtn}>
                Dark Mode
              </button>
            )}
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="cardcontainer2">
          <h1 className="heading">Click to change mode</h1>
          {isBtnON ? (
            <button type="button" onClick={this.onBtn}>
              Light Mode
            </button>
          ) : (
            <button type="button" onClick={this.offBtn}>
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
