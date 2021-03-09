import { connect } from 'react-redux';

const Output = (props) => (
    <div>
        <h3>{props.name} is currently {props.activity}.</h3>
        <p>What would you like {props.name} to do?</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        name: state.name,
        activity: state.activity,
    }
}

export default connect(mapStateToProps)(Output);