import { css } from '@emotion/css'

// Hero Background
const heroContainer = css`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ParaBG = css`
  opacity: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(41, 41, 41, 1) 100%
  );
  background-size: cover;
  background-position: center;
`
const ParaGrid = css`
  opacity: 1;
  background: url(/gui/grid.png);
  background-size: cover;
`

const AbsoluteGrid = css`
  position: absolute;
  height: 100%;
  width: 100%;
`

const CSS = { heroContainer, ParaBG, ParaGrid, AbsoluteGrid }
export default CSS