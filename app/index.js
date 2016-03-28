var React = require('react');
var ReactDOM = require('react-dom');

// Creates a new React component
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>Hello World</div>
        )
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
