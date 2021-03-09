import ActionSetActivity from '../components/ActionSetActivity';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(setActivity())
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetActivity);