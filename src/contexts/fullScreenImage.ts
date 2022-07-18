import React from 'react'

const initialValue = {
    url: null,
    setUrl: (url: any) => {},
}

export const FullScreenImageContext = React.createContext(initialValue)
