import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps,null)(Sidebar);