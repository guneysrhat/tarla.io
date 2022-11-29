import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

export const Container = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
    0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
  width: 100%;
  overflow-x: auto;
  margin-top: 24px;
  display: block;
`;

export const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 650px;
  box-sizing: border-box;
  text-indent: initial;
`;

export const TableHead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: center;
`;

export const TableRow = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: center;
`;

export const TableCell = styled.th`
  padding: 12px 15px;
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid #dddddd;
`;

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;
