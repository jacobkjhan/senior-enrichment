import React from 'react';
import {Link} from 'react-router';

export default function Campuses(props){
	const campuses = props.campuses;
	const handleSubmit = props.handleSubmit;
	console.log(campuses);
	return(
	<div>
	    <div>
	      <h3>Campuses</h3>
	      <div className="row">
	        {
	          campuses && campuses.map(campus => (
	            <div className="col-xs-4" key={ campus.id }>
	              <Link className="thumbnail" to={`/campus/${campus.id}`}>
	                <img src={ campus.image }/>
	                <div className="caption">
	                  <h5>
	                    <span>{ campus.name }</span>
	                  </h5>
	                </div>
	              </Link>
	            </div>
	          ))
	        }
	      </div>
	    </div>

		<form onSubmit={handleSubmit}>
		  <div className="form-group">
		    <label>
		    	Campus
		    	<input name="campus" type="text" className="form-control" />
		    </label>
		  </div>
		  <div className="form-group">
		    <label>
			    URL Picture
			    <input name="picture" type="text" className="form-control" />
		    </label>
		  </div>
		  <input type="submit" value="Submit" />
		</form>


	</div>
  );
}