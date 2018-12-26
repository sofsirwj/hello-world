import React from 'react';

export default function withErrorBoundary(WrappedComponent){
    class WithErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }
    
        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }
    
        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            console.error(error, info);
        }
    
        render() {
            if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
            }
    
            return <WrappedComponent {...this.props} />;
        }
    }

    WithErrorBoundary.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

    return CompWithErrorBoundary;
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }