import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementBtn = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const displayTxt = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="mega-container">
        <div className="linear-container">
          <h1 className="counter">Count {count}</h1>
          <p className="para">Count is {displayTxt}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementBtn}
          >
            Increment
          </button>
          <p className="note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
