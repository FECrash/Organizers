import React from 'react';
import styled from '@emotion/styled';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MobileLayout;

const Wrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
`;
