import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { increment } from '@/store/actions/index';
import styles from './index.scss';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      window.document.title = '首页'
    }

    onClick() {
        this.props.dispatch(increment())
    }

    onClick2() {
        this.props.dispatch({ type: 'INCREMENT_ASYNC' })
    }

    render() {
        return (
            <div>
                <div className='index-style'>
                  <div>react-router 测试</div>
                  <nav>
                      <ul>
                      <li>
                          <Link to="/about/">页面一</Link>
                      </li>
                      <li>
                          <Link to="/users/">页面二</Link>
                      </li>
                      </ul>
                  </nav>

                  <br/>
                  <div>首页</div>
                  <div>current number： {this.props.number} <button onClick={()=>this.onClick()}>点击+1</button></div>
                  <div>current number： {this.props.number} <button onClick={()=>this.onClick2()}>点击2秒后+1</button></div>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.number
    })
)(Index);
