import React from 'react';
import './header.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Home from './home.js';
import About from './About.js';

class Heander extends React.Component {
          render () {
		 return (
		 <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
         <a className="navbar-brand" href="/">OSN<i className="fa fa-circle"></i>VA</a>
      </div>
			  		   
      <div className="navbar-collapse collapse">
			
	     <ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="#">Продукция</a></li>
          <li><a href="/About">Услуги</a></li>
          <li><a href="/Home">О Компании</a></li>
          <li><a href="/Home">Дизайн</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
        </ul>
            
		 
	</div>	 
    </div>
    </div>
			  )
		  }
	}


export default Heander;