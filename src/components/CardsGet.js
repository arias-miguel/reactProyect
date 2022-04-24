import React, { Component } from 'react'
import { Container } from '../styles/containerCards'
import Cards from './Cards'



export default class CardsGet extends Component {
    constructor(){
        super()
        this.state ={
            datos:[]
        }
    }
    componentDidMount(){
        this.getDatos()
    }
    getDatos = async () =>{
        const url  ='https://api-r1.herokuapp.com/works/'
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)        

        this.setState({
            datos : data
        })
    }
    
  render() {
      console.log(this.state.datos);
    return (
        <Container>
            <div style={{ display:'flex',
                flexDirection:'column', flexWrap: 'wrap', backgroundColor: '#f0fafb'}}>
                    {
                        this.state.datos.map((dato,index) =>(
                            <Cards card = {dato} key={index}/>
                        )) 
                    }
            </div>
        </Container>
    )
  }
}
