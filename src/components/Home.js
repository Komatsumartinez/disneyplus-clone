import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Sections from "./Sections";
import db from "../firebase";
import { selectUserName } from "../features/user/userSlice";
import { selectRecommend, selectNewDisney, selectOriginal, selectTrending, setMovies } from "../features/movie/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const movieCollection = 'movies';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {

        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trendings = [];

        db.collection(movieCollection).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;

                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case 'trending':
                        trendings = [...trendings, { id: doc.id, ...doc.data() }];
                        break;
                }
            })

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trendings
            }));

        });
    }, [userName]);

    const sections = [
        {
            title: 'Recommended for you',
            movies: useSelector(selectRecommend)
        },
        {
            title: 'New to Disney+',
            movies: useSelector(selectNewDisney)
        },
        {
            title: 'Originals',
            movies: useSelector(selectOriginal)
        },
        {
            title: 'Trending',
            movies: useSelector(selectTrending)
        }
    ];

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Sections sections={sections} />
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


export default Home;