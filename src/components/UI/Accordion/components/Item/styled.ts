import styled from 'styled-components';

export const ItemWrapper = styled.li<{ show: boolean; big?: boolean; }>`
  // min-height: 52px;
  width: 100%;
  // overflow-y: auto;
  // padding-bottom: 52px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center; // space-between;
  
  &:first-child {
    border-top: 1px solid #000;
  }
  &:last-child {
    border-bottom: 0 none;

    & > button {
      border-bottom: 0 none;
    }
  }

  ${({ show }) => (
    show
      ?
      `
      // background-color: rgb(115, 115, 115, .05);
      border-bottom: 1px solid #000;
      height: 67%;
      // flex-grow: 1;

      &:last-child {
        & > button {
          border-bottom: 1px solid #000;
        }
      }

      @media only screen and (max-width: 770px) {
        height: 60%; // 80%;
      }

      @media only screen and (max-width: 480px) {
        height: 50%; // 80%;
      }
      `
      : ''
  )}
`;

export const ItemBtn = styled.button<{ second?: boolean; }>`
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  display: flex;
  // padding: .75rem 0 0 0;
  outline: 0;
  // flex: none;
  width: ${({ second }) => (second ? '35%' : '100%')};
  flex-direction: column-reverse;
  font-size: 1.05rem;
  transition: all .3s;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  white-space: normal;
  color: #000;
  padding: 3rem 3rem 1rem 3rem;
  height: fit-content;

  /* &:first-child {
    // padding-left: 1rem;
  }
  &:last-child {
    padding-right: 1rem;
  } */

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media only screen and (max-width: 980px) {
    padding: 5rem;
  }

  @media only screen and (max-width: 770px) {
    width: 80%; // 50%;
    margin: 0 10%;
    padding: 3rem 3rem 1rem 3rem;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 3rem 1rem 3rem;
  }

`;

export const CheckMark = styled.div<{ selected: boolean; desc?: boolean; }>`
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: ${({ selected }) => selected ? '4px solid rgba(33,28,23,.65)' : '4px solid transparent'};
  // margin: 0 1rem 0 0.5rem; // 0 0.5rem;
  padding: 0.5rem; // 0 0.75rem 1rem 0.75rem;
  position: relative;
  display: flex;
  flex-direction: ${({ desc }) => (desc ? 'row' : 'column')}; // column;
  height: 80%;
  min-width: -webkit-fill-available;
  overflow: hidden;

  &:hover {
    border: ${({ selected }) => selected ? '4px solid rgba(33,28,23,.35)' : '4px solid rgba(33,28,23,.35)'};
    
    &:before {
      content: '\\2713';
      color: #fff;
      width: 15%;
      height: 15%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(33,28,23,.35);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${({ selected }) => (
    selected && `
    &:before {
      content: '\\2713';
      color: #fff;
      width: 15%;
      height: 15%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(33,28,23,.65);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover::before  {
      background-color: rgba(33,28,23,.35)!important;
    }
    `
  )}
  
  @media only screen and (min-width: 770px) {
    flex-wrap: wrap;
  }
`;

export const ItemSpanTitle = styled.h5`
  font-size: 1.25rem;
  margin: 0.5rem 0;

  @media only screen and (max-width: 770px) {
    clear: both;
    display: inline-block;
    width: 100%;
  }
`;

export const ItemImg = styled.img<{ single?: boolean; }>`
  max-width: 90%!important;
  // margin: 0.75rem 0.75rem 0.75rem 0;
  // height: 80%!important;
  // margin: 0.75rem auto;
  margin: 0 auto!important;

  @media only screen and (max-width: 770px) {
    margin: 0 auto;
    width: ${({ single }) => (single ? '50%' : '40%')};
    float: ${({ single }) => (single ? 'none' : 'left')};
  }

  @media only screen and (min-width: 780px) {
    max-width: 70%!important;
  }

  @media only screen and (min-width: 980px) {
    max-width: 50%!important;
  }
`;

export const ItemSpanDesc = styled.span`
  text-align: left;
  padding-left: 0.5rem;
  font-size: 1rem;

  @media only screen and (max-width: 770px) {
    // width: 55%;
    // float: right;
    font-size: .75rem;
  }
`;

export const ItemColor = styled.div<{ color: string }>`
  background-color: ${({ color }) => `#${color}`};
  width: 50%;
  padding-top: 40%;
  margin: 20% 0.75rem 0.75rem 0;
  box-sizing: border-box;

  @media only screen and (max-width: 770px) {
    margin: 10% auto 0 auto;
    width: 40%;
    padding-top: 40%;
  }
`;

export const CarouselNav = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
`;

export const CarouselNavBtn = styled.button<{ left?: boolean }>`
  pointer-events: all;
  border: 0;
  background: rgba(4, 4, 4, 0.25);
  color: #fff;
  outline: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  
  &:hover {
    background: rgba(4, 4, 4, 0.85);
  }
  ${({ left }) => left ? 'left: 0.5rem;' : 'right: 0.5rem;'}
`;

export const ContainerForSecond = styled.div<{ show?: boolean; second?: boolean; moreHeight?: boolean; }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  height: calc(100% - 70px);
  position: relative;
  ${({ second }) => second && 'overflow: auto; flex-direction: column;'}

  @media only screen and (max-width: 770px) {
    height: ${({ moreHeight }) => (moreHeight ? '100%' : 'auto')};
  }
`;

export const CarouselWrapper = styled.div<{ second?: boolean; show?: boolean; moreHeight?: boolean; }>`
  display: ${({ show }) => show ? 'flex' : 'none'};
  // height: calc(100% - 50px);
  position: relative;
  // height: 100%!important;
  // ${({ second }) => (second && 'margin-top: 0.5rem;')}

  @media only screen and (max-width: 770px) {
    // height: ${({ moreHeight }) => (moreHeight ? '100%' : 'auto')};
    margin-top: 0;
  }
`;

export const ItemContent = styled.div<{ horizontal?: boolean; show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  width: 100%;
`;

export const Button = styled.button<{ horizontal?: boolean; show: boolean }>`
  background-color: ${({ show }) => show ? 'rgba(33, 28, 23, .65)' : '#fff'};
  border: 0 none;
  border-bottom: 1px solid #000;
  border-radius: 0;
  color: ${({ show }) => show ? '#fff' : '#35342D'}!important;
  width: 100%;
  text-align: center;
  outline: none;
  position: ${({ show }) => (show ? 'absolute' : 'sticky')}; //absolute; // sticky;
  ${({ horizontal }) => (horizontal ? 'top' : 'top')}: -1px;
  font-family: "Josefin Sans", Sans-serif;
  font-size: 1.15rem;
  text-transform: uppercase;
  transition: all .3s;
  padding: 1.5rem;
  margin: 0;
  z-index: 1;

  &:hover {
    background-color: rgba(33, 28, 23, .65);
    color: #fff;
  }

  @media only screen and (max-width: 770px) {
    padding: .75rem 0;
    font-size: 1rem;
  }
`;
