import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const heroContainer = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: 120px;
    font-weight: 600;
    color: ${Color.Primary};
  }
  & button {
    border: 1px solid ${Color.Primary};
    border-radius: 3px;
    padding: 2px 8px;
    color: ${Color.Primary};
    background-color: ${Color.Background};
    box-shadow: 6px 6px 24px rgba(0, 0, 0, 0.5);
    transition-duration: 300ms;
    &:hover {
      background-color: ${Color.Primary};
      color: black;
      transition-duration: 50ms;
      transform: translate3d(3px, 3px, 0);
      box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.0);
    }
  }

  @media (max-width: 1339.98px) {
    & h1 {
      font-size: 100px;
    }
  }
  @media (max-width: 1199.98px) {
    & h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 991.98px) {
    & h1 {
      font-size: 64px;
    }
  }
  @media (max-width: 767.98px) {
    & h1 {
      font-size: 48px;
    }
  }
  @media (max-width: 479.98px) {
    & h1 {
      font-size: 32px;
    }
  }
`
