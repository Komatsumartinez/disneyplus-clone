import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import db from "../firebase";

const Search = (props) => {
    const [movies, setMovies] = useState([]);

    const handleSearch = (query) => {

        console.log('Search query:', query);
    };

    useEffect(() => {
        db.collection('movies').get().then((querySnapshot) => {
            const allMovies = [];

            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    allMovies.push({ id: doc.id, ...doc.data() });
                } else {
                    console.log(`No such document for ID: ${doc.id}`);
                }
            });

            setMovies(allMovies);

        }).catch((error) => {
            console.log("Error getting documents:", error);
        });
    }, []);

    return (
        <Container>
            <SearchBar onSearch={handleSearch} />
            <Title>
                <h4>Explore</h4>
            </Title>
            <Content>
                {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    );
};


const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

const Title = styled.div`
margin-top:150px;
position:relative;
`;

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
    margin-top:8px;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`;


const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0;
    border: 3px solid transparent;

    img{
        inset: 0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;
        transition: opacity 500ms ease-in-out 0s;
        width:100%;
        z-index:1;
        top :0;
    }

   
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transfom: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`;

export default Search;