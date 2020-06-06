import React from 'react';



class ContainerA extends React.Component {
          render () {
		 return (
 <div id="dg">
    <div className="container">
      <div className="row centered">
        <h2>Услуги</h2>
        <br/>
        <div className="col-lg-4">
          <div className="tilt">
			 <h4>Ламинация профиля</h4>
            <img src="img/pict04.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tilt">
			 <h4>Декорирование стекла</h4>
            { <a href="#"><img src="img/pict05.png" alt=""/></a>} 
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tilt">
			 <h4>Декорирование стекла</h4>
           {<a href="#"><img src="img/pict05.png" alt=""/></a> }
          </div>
        </div>
      </div>
    </div>
  </div>
			  )
		  }
	}


export default ContainerA;