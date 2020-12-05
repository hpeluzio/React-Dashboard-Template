import React, { useState, useEffect, useContext, createContext } from 'react'

const viewportContext = createContext({})

export default function ViewportProvider({ children }) {
    // This is the exact same logic that we previously had in our hook

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [layout, setLayout] = useState('none')
    const [toggle, setToggle] = useState(true)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    useEffect(() => {
        if (width >= 768) setLayout('desktop')
        else setLayout('mobile')
    }, [width])

    useEffect(() => {
        if (layout === 'desktop') setToggle(true)
        if (layout === 'mobile') setToggle(false)
    }, [layout])

    /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
    return (
        <viewportContext.Provider
            value={{ width, height, layout, toggle, setToggle }}
        >
            {children}
        </viewportContext.Provider>
    )
}

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export function useViewport() {
    /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
    const { width, height, layout, toggle, setToggle } = useContext(
        viewportContext
    )
    return { width, height, layout, toggle, setToggle }
}
