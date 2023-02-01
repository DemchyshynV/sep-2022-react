import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {a: 0, b: 25}
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevState.a >= 7) {
            return 'a>=7'
        }
        return null
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1, b: prev.b - 1}))
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <div>NameFromProps: {this.props.name}</div>
                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}

export {ClassComponent}
