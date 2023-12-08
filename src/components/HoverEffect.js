import styled from 'styled-components';

const HoverEffect = styled.div`
&:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transfom: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
    }
`;

export default HoverEffect;