import styled from 'styled-components'


export const CardsStyle = styled.div`
    background-color: white;
    margin: 30px auto;
    width: 75vw;
    border-radius: 8px;
    box-shadow:0 0 12px #5da5a4;
    &:focus{
        background-color: black;
    }
    @media (min-width: 800px) {
        width: 85vw;
        &:hover{
        border-left: solid 5px #245151; 
    }
  }
`;

export const ImgStyle = styled.img`
    position: relative;
    top: -40px;
    left: 20px;
    width: 75px;
    @media (min-width: 381px) {
        top: 40px;
        left: 25px;
        width: 85px;
  }
`;
export const ContBusStyle = styled.div`
    display: flex;
    flex-direction: row;
    /* @media (min-width: 381px) {
        position: relative;
        left: 110px;
  } */
`;
export const DescriStyle = styled.div`
    @media (min-width: 381px) {
        margin-left: 100px;
  }
`;
export const BusinessStyle = styled.h4`
    position: relative;
    top: -50px;
    left: 20px;
    color:#5ba5a5;
`;
export const StatusOneStyle = styled.h5`
    position: relative;
    text-align: center;
    top: -50px;
    left: 30px;
    width: 40px;
    color: white;
    background-color:#5ba5a5;
    border-radius: 20px;
    padding: 3px;
`
export const StatusTwoStyle = styled.h5`
    position: relative;
    text-align: center;
    top: -50px;
    left: 40px;
    width: 70px;
    color: white;
    background-color:#2b3b3a;
    border-radius: 20px;
    padding: 3px;
`;

export const PositionStyly = styled.h3`
    color: #2b3b3a;
    position: relative;
    top: -65px;
    left: 20px;
    height: 0px;
`;
export const ListaOfStyle = styled.div`
    display:flex;
    flex-direction: row;
    padding: 0%;
    @media (min-width: 381px) {
        margin-left: 15px;
  }
`;
export const LiStyle = styled.p`
    color:#b4bbbb;
    font-size:0.8rem;
    position: relative;
    top: -50px;
    left: 0px;
    padding: 2%;
    padding-top: 0%;
    padding-bottom: 0%;
`;
export const HrStyle = styled.hr`
    width:80%;
    position: relative;
    top: -25px;
    @media (min-width: 800px) {
    display:none;
  }
`;
export const ListaSkillsStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    margin-left:50px;

`;

export const SkillsStyle = styled.p`
    background-color: #edf7f5;
    color:#5ba5a5;
    margin: 10px;
    padding: 2px 10px;
    border-radius: 5px;
    margin-bottom: 30px;
    @media (min-width: 700px) {
     display: block;
     margin-bottom: 110px;     
  }
`;

export const ContainerTextosStyle = styled.div`
    @media (min-width: 800px) {
        display: flex;
    flex-direction: row;
  }
`;