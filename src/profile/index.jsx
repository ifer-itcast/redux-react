import React from 'react'
import { connect } from '../utils/connect';
import { subAction } from '../store/actionCreators';

const Profile = (props) => {
    return (
        <div>
            Profile
            <p>{props.num}</p>
            <button onClick={() => props.sub(1)}>减1</button>
            <button onClick={() => props.sub(3)}>减3</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        num: state.num
    };
};
const mapDispatchToProps = dispatch => {
    return {
        sub: num => {
            dispatch(subAction(num));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);