import React from 'react';
import './container.css';


class Container extends React.Component {
          render () {
		 return (
 <div className="container w">
    <div className="row centered">
      <br/><br/>
      <div className="col-lg-4">
			 <h4>Заказ окон</h4>
        { <a href="#"><img src="img/pict01.png" alt=""/></a>} 
      </div>
      <div className="col-lg-4">
        <h4>Каталог продукции</h4>
          { <a href="#"><img src="img/pict02.png" alt=""/></a>}
      </div>
      <div className="col-lg-4">
        <h4>Написать нам</h4>
	      { <a href="#"><img src="img/pict03.png" alt=""/></a>}
      </div>
    </div>
    <br/> <br/>
  </div>
			  )
		  }
	}


export default Container;