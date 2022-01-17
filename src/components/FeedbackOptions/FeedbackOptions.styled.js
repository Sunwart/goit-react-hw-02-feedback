import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 8px;
  min-width: 72px;
  text-transform: capitalize;
  border: none;
  border-radius: 4px;
  background-color: teal;
  color: white;
  transition: color 300ms linear, background-color 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    color: teal;
  }
`;
