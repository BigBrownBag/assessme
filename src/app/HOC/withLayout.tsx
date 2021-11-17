import React from "react";

const withLayout = (WrappedComponent: any) => {
    class WithLayout extends React.Component {

        render() {
            return (
                <WrappedComponent />
            );
        }
    }

    return WithLayout;
};

export default withLayout;