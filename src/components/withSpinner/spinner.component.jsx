import React from "react";
import "./spinner.styles.scss";

const withSpinner = (WrappedComponent) => {
    class WithSpinner extends React.Component {
        render(){
            const { isLoading , ...otherProps} = this.props;
            return (
                isLoading 
                ? <div>
                   <div className="overlay">
                       <div className="spinner"></div>
                   </div>
                </div> 
                : <WrappedComponent {...otherProps}/>
           
            )
        }
    }
    return WithSpinner;
}


export default withSpinner;