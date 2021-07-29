import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Header = styled.header`
  position: fixed;
  right: calc(40% - 480px);
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & * {
    font-size: 40px;
    margin: 10px 50px;
  }

  & button {
    font-size: 30px;
    cursor: pointer;
    outline: none;
  }
`;

export const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  & span {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Expression = styled.div`
  width: 540px;
  padding-bottom: 20px;
  border-bottom: 10px solid black;
`;

export const ValueContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const Value = styled.span`
  font-size: 200px;
`;

export const Sign = styled.span`
  position: absolute;
  left: 0;
  font-size: 200px;
`;

export const InputContainer = styled.form`
  width: 540px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-top: 30px;

  & button {
    display: none;
  }
`;

export const AnswerBlank = styled.input`
  width: 120px;
  height: 200px;
  border: 2px solid black;
  font-size: 200px;
`;
