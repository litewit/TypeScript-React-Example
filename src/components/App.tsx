import * as React from 'react';
import Hello from "./Hello";
import Toggle from "./Toggle";
import LoginControl from "./LoginControl";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
            <Hello developer="LiteWit" compiler="TypeScript" framework="React" />
        </header>
        <Toggle />
        <LoginControl />
      </div>
    );
  }
}

export default App;
