import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

const Problem = () => {
  const [counts, setCounts] = useState({
    problem: 0,
    correct: 0,
    incorrect: 0,
  });
  const { problem, correct, incorrect } = counts;

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [problemValues, setProblemValues] = useState({
    firstValue: getRandom(10, 99),
    secondValue: getRandom(10, 99),
  });
  const { firstValue, secondValue } = problemValues;

  const [inputValues, setInputValues] = useState({
    thousand: '',
    hundred: '',
    ten: '',
    one: '',
  });
  const { thousand, hundred, ten, one } = inputValues;

  const [isShowThousand, setIsShowThousand] = useState(true);
  const inputRefs = useRef([]);

  const onChange = (e, index) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });

    if (e.target.value.length >= e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onKeyDown = (e, index) => {
    if (e.target.value.length === 0 && e.keyCode === 8) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.keyCode === 39) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const problemInit = () => {
    setInputValues({
      thousand: '',
      hundred: '',
      ten: '',
      one: '',
    });

    setProblemValues({
      firstValue: getRandom(10, 99),
      secondValue: getRandom(10, 99),
    });
  };

  useEffect(() => {
    if (firstValue * secondValue <= 1000) {
      setIsShowThousand(false);
      console.log(isShowThousand);
      inputRefs.current[1].focus();
    } else {
      setIsShowThousand(true);
      console.log(isShowThousand);
      inputRefs.current[0].focus();
    }
  }, [firstValue, secondValue, isShowThousand]);

  const onSubmit = (e) => {
    e.preventDefault();
    const answer = 1000 * thousand + 100 * hundred + 10 * ten + 1 * one;

    if (answer === firstValue * secondValue) {
      setCounts({
        ...counts,
        problem: problem + 1,
        correct: correct + 1,
      });
    } else {
      setCounts({
        ...counts,
        problem: problem + 1,
        incorrect: incorrect + 1,
      });
    }
    problemInit();
  };

  return (
    <S.Wrapper>
      <S.Count>{`푼 문제 수 : ${problem}`}</S.Count>
      <S.Count>{`정답 수 : ${correct}`}</S.Count>
      <S.Count>{`오답 수 : ${incorrect}`}</S.Count>
      <S.ProblemContainer>
        <S.Expression>
          <S.ValueContainer>
            <S.Value>{parseInt(firstValue / 10)}</S.Value>
            <S.Value>{parseInt(firstValue % 10)}</S.Value>
          </S.ValueContainer>
          <S.ValueContainer>
            <S.Sign>×</S.Sign>
            <S.Value>{parseInt(secondValue / 10)}</S.Value>
            <S.Value>{parseInt(secondValue % 10)}</S.Value>
          </S.ValueContainer>
        </S.Expression>
        <S.InputContainer onSubmit={onSubmit}>
          {isShowThousand && (
            <S.AnswerBlank
              name="thousand"
              value={thousand}
              ref={(elem) => (inputRefs.current[0] = elem)}
              onChange={(e) => onChange(e, 0)}
              onKeyDown={(e) => onKeyDown(e, 0)}
              maxLength="1"
            />
          )}
          <S.AnswerBlank
            name="hundred"
            value={hundred}
            ref={(elem) => (inputRefs.current[1] = elem)}
            onChange={(e) => onChange(e, 1)}
            onKeyDown={(e) => onKeyDown(e, 1)}
            maxLength="1"
          />
          <S.AnswerBlank
            name="ten"
            value={ten}
            ref={(elem) => (inputRefs.current[2] = elem)}
            onChange={(e) => onChange(e, 2)}
            onKeyDown={(e) => onKeyDown(e, 2)}
            maxLength="1"
          />
          <S.AnswerBlank
            name="one"
            value={one}
            ref={(elem) => (inputRefs.current[3] = elem)}
            onChange={(e) => onChange(e, 3)}
            onKeyDown={(e) => onKeyDown(e, 3)}
            maxLength="1"
          />
          <button />
        </S.InputContainer>
      </S.ProblemContainer>
    </S.Wrapper>
  );
};

export default Problem;
