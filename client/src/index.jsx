import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: 1
    };
    this.getItemId = this.getItemId.bind(this);
  }

  getItemId() {
    //query url to find id
    this.setState('itemId': id);
  }

  componentDidMount() {
    this.getItemId();
  }


  render() {
    return (
      <div>
        <div className="panel">
          <h1>Kickstarter Header</h1>
          <nav className="nav">
            <span>
              Funding Goal
            </span>
            <span>
              Amount Funded
            </span>
          </nav>
          <div/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




