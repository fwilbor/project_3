import React, { Component } from 'react';

class ParentDashboard extends Component {
    render() {
        return (
            <div>
                {/* TODO: Update this page to show relevant content. Supporting components for parent view should be added to this page. */}
                <div className="features-5">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">Your life will be much easier</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">code</i>
                </div>
                <h4 className="info-title">Account Settings</h4>
                <p>Manage your account and add children to your profile.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">format_paint</i>
                </div>
                <h4 className="info-title">Reports</h4>
                <p>See what games your child has played. Track their time and progress.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">dashboard</i>
                </div>
                <h4 className="info-title">Game Info</h4>
                <p>Get more information about the games and how they help your child learn.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">view_carousel</i>
                </div>
                <h4 className="info-title">Example Pages Included</h4>
                <p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">access_time</i>
                </div>
                <h4 className="info-title">Save Time</h4>
                <p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="info">
                <div className="icon">
                  <i className="material-icons">attach_money</i>
                </div>
                <h4 className="info-title">Save Money</h4>
                <p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
        </div>
        </div>
            
        );
    }
}

export default ParentDashboard;