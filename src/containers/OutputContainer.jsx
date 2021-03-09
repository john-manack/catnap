import Output from '../components/Output';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        name: state.name,
        activity: state.activity,
    }
}

export default connect(mapStateToProps)(Output);