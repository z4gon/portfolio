import React from 'react'

const initialValue = {
    urls: [],
    currentIdx: null,
    initialize: (urls: string[], currentIdx: number) => {},
    nextUrl: () => {},
    previousUrl: () => {},
    reset: () => {},
}

export const FullScreenCarouselContext = React.createContext(initialValue)
