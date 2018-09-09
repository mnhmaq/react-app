import React, {Component} from 'react';

// const withClassComp = (WrappedComponent, className) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent {...this.props} />
//                 </div>  
//             )
//         }
//     }
// }

// Passing ref or forwarding ref before React 16.3 and note: the Person should pass forwardedRef instead of ref.
// const withClassComp = (WrappedComponent, className) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
//                 </div>  
//             )
//         }
//     }
// }

const withClassComp = (WrappedComponent, className) => {
    const WithClassComp = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>  
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClassComp {...props} forwardedRef={ref} />
    })
}

export default withClassComp;