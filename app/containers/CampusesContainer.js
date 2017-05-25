import React, {Component} from 'react';
import Campuses from '../components/Campuses';
import {connect} from 'react-redux';

const mapStateToProps = ({campus}) => ({
	campuses: state.campus.allCampuses
})

const mapDispatchToProps = ({})