import { useState, useEffect } from 'react'

export enum Breakpoint {
    XXL,
    XL,
    LG,
    MD,
    SM,
    XSM,
}

function getWindowDimensions(hasWindow) {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null

    let breakpoint = Breakpoint.XXL

    if (width >= 1200 && width < 1400) {
        breakpoint = Breakpoint.XL
    } else if (width >= 992 && width < 1200) {
        breakpoint = Breakpoint.LG
    } else if (width >= 768 && width < 992) {
        breakpoint = Breakpoint.MD
    } else if (width >= 576 && width < 768) {
        breakpoint = Breakpoint.SM
    } else if (width >= 320 && width < 576) {
        breakpoint = Breakpoint.XSM
    }

    return {
        width,
        height,
        breakpoint,
    }
}

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined'

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(hasWindow)
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions(hasWindow))
        }

        if (hasWindow) {
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow])

    return windowDimensions
}
