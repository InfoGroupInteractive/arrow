import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    async componentDidCatch(error, info) {
        let errorInfo = '';        
        let lineBreak = '%0D%0A';
        try {
            // format the error information
            errorInfo = `${error.toString()}${
                info
                    ? info.componentStack.replace(
                          /\s{4}/gi,
                          `${lineBreak}    `
                      )
                    : ''
            }`;
        } catch (err) {
            // catch any errors in formatting the error information and log those
            console.error(err);
        }

        // Display fallback UI
        this.setState({
            hasError: true,
            errorInfo: errorInfo
        });
    }

    render() {
        const { errorInfo, hasError } = this.state;

        if (hasError) {
            return (
                <section className="error-boundary">
                    <h2>An Error has Occured.</h2>
                        <p>
                            {errorInfo}
                        </p>                    
                </section>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
