import { css } from '@emotion/css'

export const Container = css`
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  & > p {
    opacity: 0.6;
    font-size: 20px;
  }
  & > h1 {
    font-size: 50px;
    font-weight: 600;
  }
  & > h2 {
    font-size: 20px;
    opacity: 0.8;
    margin: -10px 0 40px 0;
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 15px;
    }
    & > h1 {
      font-size: 30px;
    }
    & > h2 {
      font-size: 12px;
    }
  }
`

export const BTN = css`
  border: solid 1px #fff;
  color: #fff;
  padding: 2px 6px;
  opacity: 0.5;
  transition-duration: 500ms;
  &:hover {
    color: #fff;
    opacity: 1;
    transition-duration: 250ms;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
