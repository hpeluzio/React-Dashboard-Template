import React from 'react'

import Main from './containers/Main'
import StoreProvider from './store/StoreContext'
const App = () => {
    return (
        <StoreProvider>
            <Main></Main>
        </StoreProvider>
    )
}

export default App
