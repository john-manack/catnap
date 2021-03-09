import { connect } from 'react-redux';
import ActionSetActivity from './ActionSetActivity';

const Output = (props) => (
    <div>



        <h3>{props.catObj} is currently {props.activity}.</h3>
        <p>What would you like {props.name} to do?</p>
        <ActionSetActivity />
    </div>
);

const mapStateToProps = (state) => {
    return {
        catObj: state.cats['foo'].name
    }
}

export default connect(mapStateToProps)(Output);