import React from 'react'
import { connect } from '../utils/connect';
import { addAction } from '../store/actionCreators';

const Home = (props) => {
    return (
        <div>
            Home
            <p>{props.num}</p>
            <button onClick={() => props.add(1)}>加1</button>
            <button onClick={() => props.add(3)}>加3</button>
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
        add: num => {
            dispatch(addAction(num));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);