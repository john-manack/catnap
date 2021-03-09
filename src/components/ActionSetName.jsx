import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

class ActionSetName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: '',
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
        this.setState({
            petName: ''
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
                    <button type="submit">Change Name</button>
                </form>
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(ActionSetName);