// SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Call the onSearch callback with the query
        onSearch(query);
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Title, character or gender"
                value={query}
                onChange={handleInputChange}
            />
            {/* <Button onClick={handleSearch}>
        <Icon src="/search-icon.png" alt="Search" />
      </Button> */}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    background: rgb(75,78,90);
    position: absolute;
    width: 100vw;
    left:0px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    text-overflow: ellipsis;
    z-index: 2;
    border: none;
    color: rgb(168, 169, 173);
    height: 100px;
    padding-left: calc(3.5vw + 24px);
    width: 100vw;
    

    input {
        border:none;
        background: rgb(75,78,90);
        font-weight: bold;
        font-size: 38px;
        letter-spacing: .11px;
        line-height: 1.2;
        color:rgb(168, 169, 173);

        &:focus{
            border-bottom: none;
            color: rgb(249, 249, 249);
            outline: none;
        }
    }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  background-color: #0063e5;
  border: none;
  padding: 12px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export default SearchBar;
