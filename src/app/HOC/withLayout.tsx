import React from "react";
import LayoutPage from "../LayoutPage";

const withLayout = (WrappedComponent: any) => {
    class WithLayout extends React.Component {

        render() {
            return (
                <LayoutPage>
                    <WrappedComponent />
                </LayoutPage>
            );
        }
    }

    return WithLayout;
};

export default withLayout;