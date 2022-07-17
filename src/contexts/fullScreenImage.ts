import React from 'react'

export interface ContextObject {
    url: string
    setUrl: (url: string) => void
}

const obj: ContextObject = {
    url: null,
    setUrl: () => {},
}

const FullScreenImageContext = React.createContext(obj)
