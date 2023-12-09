import styled from "styled-components";
import Section from "./Section";

const Sections = ({ sections }) => {
    return (
        <Container>
            <div>
                {
                    sections.map((element, index) => (
                        <Section key={index} title={element.title} movies={element.movies} />
                    ))
                }
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding:0 0 26px;  
`;
export default Sections;