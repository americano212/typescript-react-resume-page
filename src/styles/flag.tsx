import styled from "styled-components";

export const LangSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #999;
  user-select: none;
`;

export const LangOption = styled.span<{ $active: boolean }>`
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: ${({ $active }) => ($active ? "#000" : "#999")};

  &:hover {
    color: #000;
  }
`;
