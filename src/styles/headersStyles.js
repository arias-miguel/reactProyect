import styled from 'styled-components'

export const HeaderStyle = styled.div`
    color: #5da5a4;
    height: 0px;
    width: 100vw;
    display: none;
  @media (min-width: 381px) {
    display:block;
    width: 100vw;

  }
`;
export const HeaderStyle2 = styled.div`
    color: #5da5a4;
    width: 100vw;
    height: 0px;
    display: block;
    @media (min-width: 380px) {
        display:none
  }
`;
export const HeaderBgStyle = styled.figure`
   margin: 0%;
   width: 100vw;
`;
export const HeaderImgStyle = styled.img`
    background-color: #5da5a4;
    width: 100vw;
    margin: 0;
`;