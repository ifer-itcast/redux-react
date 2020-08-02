import React, { PureComponent } from 'react'
import store from '../store';

export function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceHOC(WrappedComponent) {
        return class extends PureComponent {
            state = {
                storeState: mapStateToProps(store.getState())
            }
            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(store.getState())
                    });
                });
            }
            componentWillUnmount() {
                store.unsubscribe(this.unsubscribe);
            }
            render() {
                return <WrappedComponent
                    {...this.props}
                    {...this.state.storeState}
                    {...mapDispatchToProps(store.dispatch)}
                />
            }
        }
    }
}