import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LabelEl = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const InputEl = styled(Field)`
  height: 40px;
  padding-right: 12px;
  padding-left: 12px;
  background-color: rgba(127, 86, 217, 0.04);
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.75;

  &:focus {
    outline: 1px solid #7f56d9;
  }
`;
