import React from 'react';

const WheatherForm = props => (
   <div className="card card-body">
      <form onSubmit={props.getWheather}>
           <div className="form-group">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>                
           </div>
           <div className="form-group">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control"/>                
           </div>
           <button className="btn btn-success btn-block">
                Get Wheather
           </button>
      </form>
   </div> 
);
export default WheatherForm;