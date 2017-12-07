import React from 'react';
import PropTypes from 'prop-types'

class TweetItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.message}
            </div>
        )
    }
}

TweetItem.propTypes = {
  message: PropTypes.string.isRequired,
    algo: PropTypes.string.isRequired
};

export default TweetItem;