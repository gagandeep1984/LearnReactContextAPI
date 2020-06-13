import React, { useContext } from 'react';

import ThemeContext, { ValueProvider, ValueConsumer } from './Context/ThemeContext';

export default function FunctionalComponentProvider() {
    return (
        <ValueProvider value="Press Again">
            <ThemedButton />
        </ValueProvider>
    );
}

const ThemedButton = () => {
    return (
        <UIButton />
    )
}

/**
 * Functional component can access the Context values by followigs : 
 *      1. useContext() - React Hook
 *      2. ThemeContext.Consumer providing back value in the argument   
 **/

const UIButton = () => {
    // 1. Using React Hook useContext(Context)
    // const value = useContext(ThemeContext)
    return (
        // <button>{value}</button>

        // or 2. using Context.Consumer API 
        <ValueConsumer>
            {(value) => (
                <button>{value}</button>
            )
            }
        </ValueConsumer>
    )
}