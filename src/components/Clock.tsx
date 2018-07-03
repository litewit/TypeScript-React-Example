import * as React from 'react';

class Clock extends React.Component<any, any> {

    state: any;
    timerID: any;

    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('clear timer');
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

  public render() {
    return (
        <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}

export default Clock;
