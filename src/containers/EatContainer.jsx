import Eat from '../components/Eat';
import { connect } from 'react-redux';
import { actionEat } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionEat())
        }
    }
}

export default connect(null, mapDispatchToProps)(Eat);