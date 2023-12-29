import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 2px solid #ddd;
    padding: 0 10px;
    border-radius: 2px;
    margin-top: 5px;

    &:focus {
      border-color: ${colors.primaryColor};
    }
  }
`;
