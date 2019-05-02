import { css } from 'react-emotion';
import theme from '../../config/theme';

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
  }
  .headroom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    width: 100%;
    padding: 1rem 1.5rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.primary.base};
      }
    }
  }
  .headroom--unfixed {
    align-items: center;
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    align-items: center;
  }
  .headroom--scrolled {
    align-items: center;
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    align-items: center;
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    align-items: center;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.primary.base};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
         img{
            
         }
        color: ${theme.colors.white.base};
        &:hover {
          border-color: ${theme.colors.black.base};
          color: ${theme.colors.black.base};
        }
        &:focus {
          color: ${theme.colors.black.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.white.base};
    }
  }
`;

export default headroom;
