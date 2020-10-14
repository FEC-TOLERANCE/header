import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends React.Component {
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
    let urlWithoutEndpoint = splitComponentUrl[0] + '//' + splitComponentUrl[2].slice(0, 12) + '04';
    let endpoint = '/funding/' + splitComponentUrl[3];
    console.log(urlWithoutEndpoint + endpoint);
    axios.get(urlWithoutEndpoint + endpoint)
      .then((fundingData) => {
        this.setState({'fundingGoal': fundingData.data.backing.fundingGoal});
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  componentDidMount() {
    this.getItemId();
  }


  render() {
    return (
      <div>
        <div className="panel">
          <h1>Header</h1>
          <nav className="nav">
            <div>
              Funding Goal {this.state.fundingGoal}
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

ReactDOM.render(<Header />, document.getElementById('header'));




