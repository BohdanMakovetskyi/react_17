import React, { Component } from 'react';


class Timer extends Component {
    state = {
        count: Math.round(this.props.time / 60),
        start: true,
        width: 100,
        change: (100 / Math.round(this.props.time / 60)).toFixed(4)
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.start) {
                if (this.state.count !== 0) {
                    this.props.onTick(this.state);
                    this.startTime();
                    this.changeCount();
                    this.changeWidth();
                }
            } else {
                this.pauseTime();
            }
        }, 1000);
    }

    startTime = () => {
        this.setState({
            start: true,
        });
    }

    pauseTime = () => {
        this.setState({
            start: false,
            count: this.state.count
        });
    }

    changeCount = () => {
        this.setState({ count: this.state.count - this.props.step })
    }

    changeWidth = () => {
        this.setState({ 
            width: (this.state.width - this.state.change) 
        })
    }

    

    render() {
        return (
            <div className="timer">
                <h2 className="seconds">
                    Time: {this.state.count} seconds!
                </h2>
                <div className="btns">
                    <button onClick={this.pauseTime}>pause</button>
                    <button onClick={this.startTime}>start</button>
                </div>
                <div className="polosa" style = {{width: this.state.width + '%'}} ></div>
            </div>
        )
    }
}

export default Timer;