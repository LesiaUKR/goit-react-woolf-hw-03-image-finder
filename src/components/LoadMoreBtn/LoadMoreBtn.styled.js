import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: rgba(9, 8, 9, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 2px 2px 6px 2px rgba(69, 33, 52, 0.8),
    2px 2px 6px 2px rgba(69, 33, 52, 0.8), 2px 2px 6px 2px rgba(69, 33, 52, 0.8);
  &:hover,
  &:focus {
    background-color: rgba(65, 10, 38, 0.8);
  }
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
