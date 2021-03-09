import ActionSetName from '../components/ActionSetName';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(setName())
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetName);