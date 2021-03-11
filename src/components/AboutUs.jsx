import React from 'react';
 
const About = () => {
    return (
       <div>
           <br></br>
          <h1 className="text-center">About US</h1>
          <br></br>
          <div className="container">
            <div className="col-sm-6 offset-md-3 text-center">
            <img className="img-fluid center-block center" src={process.env.PUBLIC_URL + "assets/img/myschool.jpg"} alt="LCPS_School"></img>

              
              </div>
              <h2 >History</h2>
              <p>
              We launched Learning Curve Public School in 2001 & since then have rapidly changed the face of Pre-
              Primary,Primary and Secondary education in the City. Our success as one of the leading education service
              providers raised the expectations of many hopeful parents, who were keen to see their children continue to
              blossom under our guidance.
              </p>
              <h2>Vision</h2>
              <p>
              Learning Curve Public School seeks to provide the best place for a child to learn, to grow and to evolve into a
              balanced and strong individual. The School intends to strive to become a second home for your child. The
              School located Hinjawadi Pune.</p>
            </div>
         
       </div>
    );
}
 
export default About;