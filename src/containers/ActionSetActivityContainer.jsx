import ActionSetActivity from '../components/ActionSetActivity';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetActivity);