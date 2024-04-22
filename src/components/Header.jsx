import React from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

export default function Header() {
    return (
        <NavBar>
            <Logo href="/App"
            src='/images/At.png' alt="Logo de ATMNL" />
            <ContentContainer>
                <Title>Asociación de Tenis de Mesa de <Span>Nuevo León</Span></Title>
                <NavLinks>
                    <NavLink path="/Acerca">Acerca de Nosotros</NavLink>
                    <NavLink href="/Noticias">Ultimas Noticias</NavLink>
                    <NavLink href="/Calendario">Calendario</NavLink>
                    <NavLink href="/Eventos">Eventos</NavLink>
                    <NavLink href="/Ranking">Ranking</NavLink>
                </NavLinks>
                
            </ContentContainer>
            <div className='burger'> 
                <BurgerButton/>
            </div>
        </NavBar>
    );
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #2d4062;
    padding: 10px;
    z-index: 10;
    BurgerButton{
        margin-right: .60rem;
    }
    .burger {
        @media (min-width: 768px) {
            display:none;
        }
    }
`;
const ContentContainer = styled.div`
    position: fixed center;
    justify-content: center;
    text-align:center;
    display: flex;
    flex-direction: column;
    margin-right:auto;
    margin-left: auto;
    align-items: flex-center; // Alinea el título y los enlaces a la izquierda
    row-gap: 10px;
    border: 1ox solid black;
`;
const Title = styled.h2`
    font-weight: 400;
    color: white;
    margin: 0; // Elimina márgenes por defecto
`;
const Span = styled.span`
    font-weight: bold; 
`;
const NavLinks = styled.div`
    display: flex; // Esto mantendrá tus enlaces en fila
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 768px) {
        display: none;
    }
`;
const NavLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 1rem; // Espacio entre los enlaces
    &:last-child {
        margin-right: 0; // No hay margen derecho para el último elemento
    }
`;
const Logo = styled.img`
    position: fixed start;
    flex-shrink: 0;
    max-width: 100%;
    max-height: 60px;
    height: auto;
    margin-left: .60rem;
    margin-right: auto;
    align-self: flex-start;
    @media (min-width: 768px) {
        position: absolute;
        flex-shrink: 1;
    }
`;