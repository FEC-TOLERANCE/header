import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const axios = require('axios');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: 1,
      fundingGoal: 100,
      amountFunded: 100,
      newFundersPercent: 0.5,
      backers: 100,
      description: 'description',
      daysRemaining: 10,
      endDate: '1/1/2020',
      title: 'title',
      headline: 'paragraph'
    };
    this.getItemId = this.getItemId.bind(this);
  }

  getItemId() {
    let splitComponentUrl = window.location.href.split('/');
    let urlWithoutEndpoint = splitComponentUrl[0] + '//' + splitComponentUrl[2].slice(0, 12) + '04';
    let endpoint = '/funding/' + splitComponentUrl[3];
    axios.get(urlWithoutEndpoint + endpoint)
      .then((fundingData) => {
        this.setState({
          'fundingGoal': fundingData.data.backing.fundingGoal,
          'amountFunded': fundingData.data.backing.amountFunded,
          'backers': fundingData.data.backing.backers,
          'description': fundingData.data.backing.description,
          'backers': fundingData.data.backing.backers,
          'daysRemaining': fundingData.data.backing.daysRemaining,
        });
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
      <div className="header">
        <div className="heading">
          <h2 className="title">{this.state.title}</h2>
          <p className="description">{this.state.description}</p>
        </div>
        <div className="fundingStatus">
          <div className="topSpacing"></div>
          <div className="fundingInfo">
            <div className="pledged">
              <div className="num nowrap"></div>
              <div className="totalPledged">
                <span className="pledged value green bold">
                  ${this.state.amountFunded}
                </span>
              </div>
              <span className="pledged label dark-grey">
                pledged of ${this.state.fundingGoal} goal
              </span>
            </div>
            <div className="backers">
              <div className="backers dark-grey bold">
                <span>{this.state.backers}</span>
              </div>
              <span className="backers label grey">backers</span>
            </div>
            <div className="remaining time">
              <div>
                <div className="days remaining">
                  <div>
                    <span className="block dark-grey 500">{this.state.daysRemaining}</span>
                  </div>
                  <span className="daysRemaining label block navy-600">days remaining</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom buttons">
            <a className="back-project-button large green" href="" type="button">Back this project</a>
            <div className="reminder and social-media">
              <div className="block basics">
                <div>
                  <button className="remind button medium hover icon fill">
                    Remind me
                  </button>
                </div>
              </div>
              <div className="social">
                <div className="small icons">
                  <div className="flex items-center">
                    <div className="facebook inline-block mx4">
                      <a href="#" className="fa fa-facebook"></a>
                    </div>
                    <div className="twitter inline-block mr4">
                      <a href="#" className="fa fa-twitter"></a>
                    </div>
                    <div className="mail inline-block mr4">
                      <a href="#" className="fa fa-envelope"></a>
                    </div>
                    <div className="link inline-block mr4">
                      <a href="#" className="fa fa-link"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb3 mb0-lg type-12">
                  <span className="link-soft-black-medium">All or nothing.</span>
                  <span className="deadline">This project will only be funded if it reaches its goal by Halloween.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));




