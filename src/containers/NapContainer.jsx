import Nap from '../components/Nap';
import { connect } from 'react-redux';
import { actionNap } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionNap())
        }
    }
}

export default connect(null, mapDispatchToProps)(Nap);