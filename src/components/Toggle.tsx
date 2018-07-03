import * as React from 'react';

class Toggle extends React.Component<any, any> {

    state: any;
    // prevState: any;

    constructor(props: any) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let prevState = this.state;
        this.setState({
            isToggleOn: !prevState.isToggleOn
        });
    }

  public render() {
    return (
        <div>
        <span>Toogle button </span>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        </div>
    );
  }
}

export default Toggle;
