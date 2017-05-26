import Campus from '../components/Campus';
import {connect} from 'react-redux';
import {addAStudent, removeAStudent, updateAStudent} from '../reducers/student-reducer';
import {updateACampus} from '../reducers/campus-reducer';


const mapStateToProps = ({campus, student}) => ({
	campus: campus.oneCampus,
	students: student.allStudents
});

const mapDispatchToProps = {addAStudent, removeAStudent, updateAStudent, updateAStudent}

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
