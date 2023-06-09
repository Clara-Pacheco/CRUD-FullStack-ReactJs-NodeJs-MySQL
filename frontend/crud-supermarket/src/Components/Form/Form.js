import styled from "styled-components";

export const Container=styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  background-color:${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.COLORS.BOX_SHADOW};
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label=styled.label``;

export const Input=styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid ${({ theme })=> theme.COLORS.INPUT};
  border-radius: 5px;
  height: 40px;

`;

export const Button = styled.button`
  height: 42px;
  width: 150px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BTN};
  color: ${({ theme })=> theme.COLORS.WHITE};
`;