import styled from 'styled-components';

export const Wrapper = styled.div`
  & span {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  padding: 10px 50px;
`;

export const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
