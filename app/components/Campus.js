import React from 'react';


export default function Campus (props){
	const campus = props.campus
	const students = props.students
	console.log(props)
	return (
	<div>
	  	<div className="campus">
	      <div>
	        <h3>{ campus.name }</h3>
	        <img src={ campus.image } className="img-thumbnail"/>
	      </div>
	    </div>
	    <table className='table table-bordered'>
	      <thead>
	        <tr>
	          <th>Student ID</th>
	          <th>Name</th>
	          <th>Expell</th>
	          
	        </tr>
	      </thead>
	      <tbody>
	        {
	        	students && students.filter(student => (
	        		student.campusId === campus.id
	        	)).map((campusStudent) => (
	        		<tr key={campusStudent.id}>
	        		<td>{campusStudent.id}</td>
	        		<td>{campusStudent.name}</td>
	        		<td>
	                	<button className="btn btn-default btn-xs" onClick={() => remove(student.id)}>
	                  		<span className="glyphicon glyphicon-remove"></span>
	                	</button>
	              	</td>
	              	</tr>
	        	))
			}
	      </tbody>
	    </table>
	   </div>
	);
};

