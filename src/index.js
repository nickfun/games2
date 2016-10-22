// main.js
var React = require('react');
var ReactDOM = require('react-dom');


const App = (props) => {
    return (<div><h1>ES6 & React Games App v2</h1><p>&copy; Nick Funnell</p><p>Insert Games Here</p></div>);
}

ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);
