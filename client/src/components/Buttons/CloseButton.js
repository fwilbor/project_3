import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CloseButton extends Component {
    close = () => {
        this.props.history.push("/child");
    }

    render() {
        return (
            <button 
                className="btn btn-round close-game pull-right"
                 onClick={this.close}>
                     Close Game
            </button>
        
        );
    }
}

export default withRouter(CloseButton);