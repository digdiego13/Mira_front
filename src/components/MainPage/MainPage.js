import styled from 'styled-components';
import Galleries from './Galleries'
import Arts from './Arts'

export default function MainPage() {
    return (
        <All>
            <Arts></Arts>
            <Galleries></Galleries>
        </All>
    )
}

const All = styled.div`
    width: 100vw;
    height: calc(100vh - 20px);
    padding-top: 70px;
    background-color: #000000;
`;

