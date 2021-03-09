import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNewCat } from '../redux/actions';

class ActionNewCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: '',
            petActivity: '',
        }
    }

    // this function updates the state in real time for the named field and value pass through as an argument
    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleClick(this.state.petName, this.state.petActivity);
        this.setState({
            petName: '',
            petActivity: '',
        });
    }

    render() {
        return(
            <>
                <form onSubmit={this._handleSubmit}>
                    <label>
                        Pet Name:
                        <input
                            type='text'
                            name='petName'
                            value={this.state.petName}
                            onChange={this._handleChange}
                            required>
                        </input>
                    </label>
                    <select name="petActivity" onChange={this._handleChange} required>
                        <option disabled selected value=''>Make A Selection</option>
                        <option value='playing'>Play</option>
                        <option value='eating'>Eat</option>
                        <option value='napping'>Nap</option>
                    </select>
                    <button type="submit">Add Cat</button>
                </form>
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name, activity) => {
            dispatch(setNewCat(name, activity))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionNewCat);