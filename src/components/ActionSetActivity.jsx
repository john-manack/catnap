import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const ActionSetActivity = (props) => (
    <>
        <button onClick={() => props.handleClick('playing')}>Play</button>
        <button onClick={() => props.handleClick('eating')}>Eat</button>
        <button onClick={() => props.handleClick('napping')}>Nap</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetActivity);