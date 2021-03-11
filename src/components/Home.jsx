import React from 'react';
 
const Home = () => {
    return (
       <div>
          
          <div className="container">
              <div className="col-sm-6 offset-md-3 text-center">
              <h1 className="text-center">Learning Curve Public School</h1>
              <img className="img-fluid center-block center" src={process.env.PUBLIC_URL + "assets/img/myschool.jpg"} alt="LCPS_School"></img>

              </div>
         
          </div>
    
       </div>
    );
}
 
export default Home;