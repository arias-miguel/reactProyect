import React, { Component } from "react";
import { BusinessStyle, CardsStyle, ContainerTextosStyle, ContBusStyle, DescriStyle, HrStyle, ImgStyle, ListaOfStyle, ListaSkillsStyle, LiStyle, PositionStyly, SkillsStyle, StatusOneStyle, StatusTwoStyle } from "../styles/cardsStyles";

export default class Cards extends Component {
    render() {
        const { business, image, position, ofert, status, skills} = this.props.card
        return (
            <CardsStyle>
                <ImgStyle src={image}/>
                <ContainerTextosStyle>
                    <DescriStyle>
                        <ContBusStyle>
                            <BusinessStyle>{business}</BusinessStyle>
                            {
                                status[0]&&(
                                    <StatusOneStyle>{status[0]}</StatusOneStyle>
                                )
                            }
                            {
                                status[1]&&(
                                    <StatusTwoStyle>{status[1]}</StatusTwoStyle>
                                )
                            }
                        </ContBusStyle>
                        <PositionStyly>{position}</PositionStyly>
                        <ListaOfStyle>
                            {
                                ofert.map(element => {
                                    return<LiStyle>{element}</LiStyle>  
                                })
                            }
                        </ListaOfStyle>
                    </DescriStyle>
                    <HrStyle/>
                    <ListaSkillsStyle>
                    {
                        skills.map(element => {
                            return<SkillsStyle>{element}</SkillsStyle> 
                        })
                    }
                    </ListaSkillsStyle>
                </ContainerTextosStyle>
            </CardsStyle>
            
        );
    }
}