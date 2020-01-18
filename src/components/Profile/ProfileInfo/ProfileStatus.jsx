import React from 'react';
//import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMove: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({ editMove: true })
    }
    deActiveteEditMode = () => {
        this.setState({ editMove: false });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {

        console.log('componentDitUpdate')
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editMove &&
                    <div>
                        <span onDoubleClick={this.activeteEditMode} >{this.props.status || '---'}</span>
                    </div>
                }
                {
                    this.state.editMove &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveteEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus;
