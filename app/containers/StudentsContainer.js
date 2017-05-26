import {connect} from 'react-redux';
import Students from '../components/Students';
import {removeAStudent, addAStudent} from '../reducers/student-reducer';

const mapStateToProps = ({student, campus}) => ({
	students: student.allStudents,
	campuses: campus.allCampuses
});

const mapDispatchToProps = {removeAStudent, addAStudent};

export default connect(mapStateToProps, mapDispatchToProps)(Students);