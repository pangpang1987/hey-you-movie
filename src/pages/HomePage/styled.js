import styled from 'styled-components';

export const Heading = styled.div`
  font-weight: bold;
  margin-right: 20px;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
`

export const SearchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: ${props => (props.isListDisplay ? 'static' : 'absolute')};

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 50px 100px;
  background-color: #00457C;
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 10px 50px;
  border: 1px solid #333;
  color: #0f0f0f;
  font-size: 16px;
`;

export const MovieListSection = styled.div`
  min-width: 100%;
  min-width: calc(100% + 18px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -9px;

`
