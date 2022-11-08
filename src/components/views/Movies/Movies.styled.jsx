import styled from '@emotion/styled';

export const Input = styled.input`
  margin-top: 10px;
  width: 400px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    outline: 1px solid #5860f7;
  }
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  margin-left: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #5860f7;
    color: white;
  }
`;

export const List = styled.div`
  padding: 20px;
`;
