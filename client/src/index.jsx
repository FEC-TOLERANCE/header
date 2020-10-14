import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: 1,
      fundingGoal: 0
    };
    this.getItemId = this.getItemId.bind(this);
  }

  getItemId() {
    let splitComponentUrl = window.location.href.split('/');
    console.log('split component', splitComponentUrl);
    let urlWithId = splitComponentUrl[0] + '//' + splitComponentUrl[2] + '/funding/' + splitComponentUrl[3];
    // axios.get(urlWithId)
    //   .then((fundingData) => {
    //     this.setState({'itemId': fundingData.identifier});
    //   })
    //   .catch((err) => {
    //     throw new Error(err);
    //   });
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
            <div>
              {/* Funding Goal {this.state.fundingGoal} */}
            </div>
            <div>
              Amount Funded
            </div>
          </nav>
          <div/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




