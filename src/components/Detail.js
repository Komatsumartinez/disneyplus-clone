import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg"
                    alt="" />
            </Background>
        </Container>
    );
};

const Container = styled.div`
    position:relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display:block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px)
`;

const Background = styled.div`
    left:0px;
    opacity:0.8;
    position: fixed;
    right:0px;
    top: 0px;
    z-index:-1;

    img{
        width:100vh;
        height: 100vh;
    }

    @media(max-width:768px){
        width:initial;
    }
`;

export default Detail;