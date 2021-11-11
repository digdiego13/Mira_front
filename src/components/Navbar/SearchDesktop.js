import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';
import { getRequisition } from '../../service';

export default function SearchDesktop() {

    const [search, setSearch] = useState("")
    const [found, setFound] = useState("")
    
    function searchRequire(){    

        if(search !== ""){
            console.log(search)
            getRequisition(search)
            .then((res) => {    
                setFound(res.data)                               
            }) 
            .catch((res) => {     
            alert("alguma mensagem de erro")                                
            });
        }                               
    } 
        
    return (
        <>
            <SearchandResultsStyled >
                <RelativeStyled>
                <DebounceInputStyled
                minLength={3}
                debounceTimeout={300}
                type="text" 
                placeholder="Search for galleries . . ."
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                onInput={searchRequire()}/>
                <Icon />                 
                </RelativeStyled>
                <BlockStyled >
                   {found && search !== ""  ? 
                        (found.map((gallery) => {
                            return(
                                <Link to={`/gallery}`} style={{textDecoration: 'none'}}> 
                                    <ResultsStyled>
                                        <GalleryNameStyled> {gallery.galery_name} </GalleryNameStyled>                                       
                                    </ResultsStyled>
                                </Link>    
                            )
                        }))                 
                        : 
                        null
                    }
                </BlockStyled>        
            </SearchandResultsStyled>
        </>          
    )
}

const BlockStyled = styled.div`
    border-radius: 8px;
    background: #000000;
    overflow-x: hidden;
    height: auto;
    width: 585px;
    margin: 0px auto 0 auto;
    max-height: 50vh;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
    width: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #E7E7E7;
    border-radius: 1000px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    }
`;

const DebounceInputStyled = styled(DebounceInput) `
    width: 530px;
    height: 45px;
    background: #000000;
    border-color: #000000;
    border-radius: 8px 0 0 8px;
    outline: 0;
    border-block: inherit;
    font-family: Lato;
    font-size: 19px;
    color: #E5E5E5;

    &::placeholder{
        padding-top: 17px;
        padding-left: 10px;
        line-height: 23px;
        color: #E5E5E5;
    }
`;

const ResultsStyled = styled.div `
    display: flex;
    width: 573px;
    font-family: Lato;
    font-size: 19px;
    line-height: 23px;
`;

const GalleryNameStyled = styled.p`
    margin: 10px 10px 5px 10px;
    color: #E5E5E5;
    width: 100%;
    height: 30px;
    overflow: hidden;         
    text-overflow: ellipsis;
`;

const SearchandResultsStyled = styled.div `
    @media(max-width: 930px){
        display:none
    }
`;

const Icon = styled(AiOutlineSearch)`
    color: #DB6D71;    
    width: 35px;
    height: 47px;
    padding-right: 10px;
    background: #000000;
    border-radius: 0 8px 8px 0;
    outline: 0;
    font-family: Lato;
    font-size: 19px;
    cursor: pointer;
`;

const RelativeStyled = styled.div `
    display: flex;
    background-color: #000000;
    width: 580px;
    align-items: center;
    margin-top: 15px;
    border-radius: 8px;
`;
