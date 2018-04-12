// Shamelessly copied from https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md

// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

export const Sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const Media = Object.keys(Sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = Sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})