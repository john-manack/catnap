import ActionSetName from '../components/ActionSetName';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetName);