import React, {Component} from 'react';


class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // After appearance
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  // After erase
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // Tick
  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  // Render component
  render() {
    return (
      <div>
        <h2>Il est {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


// EXPORTS
export default Clock;