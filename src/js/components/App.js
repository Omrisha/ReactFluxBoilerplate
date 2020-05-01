var React = require('react');
AppActions = require('../actions/AppAction');
AppStore = require('../stores/AppStore');

function getAppState(){
    return {

    }
}

var App = React.createClass({
    getInitialState: function(){
        return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        return(
            <div>
                Hello World change!!
            </div>
        );
    },

    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;