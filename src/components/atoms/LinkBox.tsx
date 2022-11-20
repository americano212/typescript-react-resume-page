import React from "react";
import styled from "styled-components";

type LinkBoxProps = {
  placeholder: string;
  url: string;
};

function LinkBox(props: LinkBoxProps) {
  const url = props.url;
  const placeholder = props.placeholder;
  return (
    <div>
      <LinkText>
        &nbsp;(
        <LinkA href={url} target="_blank">
          {placeholder}
        </LinkA>
        )
      </LinkText>
    </div>
  );
}

const LinkText = styled.span`
  font-size: small;
`;

const LinkA = styled.a`
  &:visited {
    color: blue;
  }
`;

export default LinkBox;
