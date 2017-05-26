import Campuses from '../components/Campuses';
import {connect} from 'react-redux';
import {addACampus} from '../reducers/campus-reducer';
import React, {Component} from 'react';

class CampusesContainer extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt){
		evt.preventDefault();
		const campus = {
			campus: evt.target.campus.value,
			picture: evt.target.picture.value
		};
		this.props.addACampus(campus);
		evt.target.campus.value = "",
		evt.target.picture.value = ""
	}

	render(){
		return (
			<Campuses
			{...this.props}
			handleSubmit = {this.handleSubmit}
			/>
		)

	}
}

const mapStateToProps = ({campus}) => ({
	campuses: campus.allCampuses
});

const mapDispatchToProps = {addACampus}

export default connect(mapStateToProps, mapDispatchToProps)(CampusesContainer);

