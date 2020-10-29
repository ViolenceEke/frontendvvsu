import styled, { css } from "styled-components"

export const WrapperManipulate = styled.div`
  margin-top: 100px;
`

export const Table = styled.div`
  margin: auto;
  border-radius: 5px;
  border: 1px solid #828282;
  max-width: 640px;
  & > div {
    margin: 0 !important;
    border-bottom: 1px solid #828282;
    &:last-child {
      border-bottom: none;
    }
    transition: background-color 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #f6f8fa;
    }
  }
`

export const RowItem = styled.div<{ preWrap?: boolean }>`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:first-child {
    border-right: 1px solid #828282;
  }
  ${({ preWrap }) =>
    preWrap &&
    css`
      white-space: pre-wrap;
      background-color: #f6f8fa;
    `}
`

export const TitleTable = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`
