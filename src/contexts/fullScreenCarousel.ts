import React from 'react'

const initialValue = {
  urls: [],
  currentIdx: null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  initialize: (urls: string[], currentIdx: number) => {},
  nextUrl: () => {},
  previousUrl: () => {},
  reset: () => {},
}

export const FullScreenCarouselContext = React.createContext(initialValue)
