import React from 'react';
import Preloarder from '../components/common/Preloarder/Preloader';



export const withSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloarder />}>
            <Component {...props} />
        </React.Suspense>
    }
}

