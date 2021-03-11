import React from 'react';
 
const ContactUs = () => {
    return (
  
       <div className="footer">
         <h1 className="text-center">Contact US</h1>
         <br/>
         <br/>
         <div className="container">
         <div className="col-sm-6 offset-md-3 text-center">
            <img className="img-fluid center-block center" src={process.env.PUBLIC_URL + "assets/img/myschool.jpg"} alt="LCPS_School"></img>
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className="row">
            <div className="col-sm">
               <h2>Phone</h2>
               <h4>Pre-Primary</h4>
               <p>+91 9503115106</p>
               <h4>Primary and Secondary</h4>
               <p>+91 9503115107</p>
            </div>
            <div className="col-sm">
            <h2>Email</h2>
            <h4>Pre-Primary</h4>
            <p>lcps.preprimary@learningcurve.in</p>
            <h4>Primary and Secondary</h4>
            <p>lcps.primarysec@learningcurve.in</p>
            </div>
            <div className="col-sm">
            <h2>Location</h2>
            <p>Phase-1, Hinjawadi, Pimpri-Chinchwad <br/>
            Near Hotel Lemon Tree, Pune, <br/>
            Maharashtra 411057</p>
            </div>
         </div>
</div>
       </div>
    );
}
 
export default ContactUs;