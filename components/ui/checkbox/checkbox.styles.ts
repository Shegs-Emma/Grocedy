import styled from 'styled-components';

interface StyleProps {
  reg?: boolean;
}

const Check = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: ${({ reg }) => (reg ? '-1rem 0 0.1rem 0' : '0.6rem 0')};

  & input[type='checkbox'] {
    display: none;
  }

  & input[type='checkbox'] + span {
    display: inline-block;
    width: 0.9375rem;
    height: 0.9375rem;
    margin: 0.7rem 0 0 0.5rem;
    border-radius: 0.25rem;
    background-color: rgba(251, 221, 246, 0.5);
    border: 1px solid rgba(6, 64, 147, 0.2);
    cursor: pointer;
  }

  & input[type='checkbox'] + span {
    margin-right: 0.25rem;
  }
`;

const Ticker = styled.span`
  width: 0.9375rem;
  position: relative;
  top: -0.4rem;
  left: 0.1rem;
`;

export { Check, Ticker };
