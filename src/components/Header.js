import React from "react";
import styled from "@emotion/styled";
import { ConnectButton } from "./ConnectButton";

const Logo = styled.h1`
  font-size: 1.56em;
  margin: 0;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.m}px;
`;

export const Header = () => (
  <StyledHeader>
    <div>
      <Logo> CoinFlip - Double your MATIC </Logo>
    </div>
    <div>
      <ConnectButton />
    </div>
  </StyledHeader>
);
