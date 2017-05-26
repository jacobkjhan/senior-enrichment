import React from 'react';

export default function Students (props){
	const students = props.students;
	const campuses = props.campuses;
	const remove = props.removeAStudent;
	const add = props.addAStudent;
	  return (
			<div>
			    <table className='table table-bordered'>
			      <thead>
			        <tr>
			          <th>Student ID</th>
			          <th>Name</th>
			          <th>Campus</th>
			          <th>Expell</th>
			          
			        </tr>
			      </thead>
			      <tbody>
			        {
			          students && students.map(student => (
			            <tr key={student.id}>
			            	<td>{student.id}</td>
			            	<td>{student.name}</td>
			            	<td>{student.campusId && campuses.find((campus)=>
			     					(campus.id === student.campusId)
			            		).name}</td>
			                <td>
			                  <button type="button" className="btn btn-default btn-xs" onClick={() => remove(student.id)}>
			                    <span className="glyphicon glyphicon-remove"></span>
			                  </button>
			                </td>
			            </tr>
			          ))
			        }
			      </tbody>
			    </table>
			    <div>
				    <form>
					  <div className="form-group">
					    <label>Student</label>
					    <input type="text" className="form-control" />
					  </div>
					  <div className="form-group">
					    <label>E-mail</label>
					    <input type="text" className="form-control" />
					  </div>
					<select class="custom-select">
					<option selected>Campuses</option>
						{
							campuses && campuses.map(campus => (
								<option value={campus.id} key={campus.id}> {campus.name} </option>
							))
						}
					</select>
					<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
);
}