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
        this.props.handleClick(this.state.petName);
        this.props.handleClick(this.state.petActivity);
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
                        Change Cat's Name:
                        <input
                            type='text'
                            name='petName'
                            placeholder="Enter cat name"
                            onChange={this._handleChange}>
                        </input>
                    </label>
                    <select name="petActivity" onChange={this.handleClick}>
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
        handleClick: (name) => {
            dispatch(setNewCat(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionNewCat);