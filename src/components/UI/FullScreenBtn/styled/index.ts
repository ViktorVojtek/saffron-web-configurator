import styled from 'styled-components';

interface IFSBtn {
  fullscreen: boolean;
}

const btnSize: number = 30;

const FSBtn = styled.button<IFSBtn>`
  display: ${({ fullscreen }) => fullscreen ? 'none' : 'block'};
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: ${btnSize}px;
  height: ${btnSize}px;
  border: 0 none;
  outline: none;
  background: url('./static/images/fullscreen-icon.png');
  background-size: ${btnSize}px;
`;

// ${({ fullscreen }) => !fullscreen ? 'fullscreen-icon' : 'fullscreen-icon-off'}.png');

export default FSBtn;
