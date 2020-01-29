import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
          <Link to="/Artist"/>
          <Link to="/Artist"/>
          <Link to="/Artist"/>
          <Link to="/Artist"/>
      </div>
    );
  }
}

export default Home;