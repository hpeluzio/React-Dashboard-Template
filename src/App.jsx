import React from 'react'

import StoreProvider from './store/StoreContext'
import ViewportProvider from './store/ViewportContext'
import Main from './containers/Main'
const App = () => {
    return (
        <StoreProvider>
            <ViewportProvider>
                <Main></Main>
            </ViewportProvider>
        </StoreProvider>
    )
}

export default App
