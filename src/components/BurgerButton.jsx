import React from 'react'
import styled from 'styled-components'

export default function BurgerButton() {
    return (
        <Burger>
            <div className="icon nav-icon-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burger>
    )
}


const Burger = styled.div`
    body{
  padding: 0;
  margin: 0;
  background:#3F51B5;
  background-image: linear-gradient(#7E57C2 50%, #3F51B5);
  text-align: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height:100vh;
    }
    h1{
    color:#fff;
    font-family: 'Lato';
    font-weight:100;
    padding:30px;
    display:block;
    
    margin-right: .60rem;
    }
    .wrapper{
    position:absolute;
    top:20%;
    left:50%;
    transform:translate(-50%, -20%);
    }
    .wrapper .icon{
    margin:20px;
    }

    .nav-icon-2{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    }
    .nav-icon-2 span{
    background-color:#FFF;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    }
    .nav-icon-2 span:nth-child(1){
    width: 100%;
    height:  4px;
    display: block;
    top: 0px;
    left: 0px;
    }
    .nav-icon-2 span:nth-child(2){
    width: 100%;
    height:  4px;
    display: block;
    top: 13px;
    left: 0px;
    }
    .nav-icon-2 span:nth-child(3){
    width: 100%;
    height:  4px;
    display: block;
    bottom: 0px;
    left: 0px;
    }
    .nav-icon-2:not(.open):hover span:nth-child(1){
    width: 100%;
    height:  4px;
    display: block;
    top: -2px;
    left: 0px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    }
    .nav-icon-2:not(.open):hover span:nth-child(2){
    width: 100%;
    height:  4px;
    display: block;
    top: 13px;
    left: 0px;
    transition: .4s cubic-bezier(.8, .5, .2, 1.4);
    }
    .nav-icon-2:not(.open):hover span:nth-child(3){
    width: 100%;
    height:  4px;
    display: block;
    bottom: -2px;
    left: 0px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    }
    .nav-icon-2.open span:nth-child(1){
    left:3px;
    top: 12px;
    width: 30px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
    }
    .nav-icon-2.open span:nth-child(2){
    left:2px;
    top: 20px;
    width: 20px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
    }
    .nav-icon-2.open span:nth-child(3){
    left:14px;
    top: 20px;
    width: 20px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
    }
`