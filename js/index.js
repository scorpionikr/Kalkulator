import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/Layout";
import "../scss/main.scss";

const App = () => {
    return <Layout/>
}

ReactDOM.render(<App/>, document.getElementById("app"));