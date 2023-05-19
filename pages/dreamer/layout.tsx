import React from 'react';
import localFont from 'next/font/local';
import styled from '@emotion/styled';

const Pretendard = localFont({
  src: [
    {
      path: '../../assets/fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper className={Pretendard.className}>{children}</Wrapper>;
};

export default MobileLayout;

const Wrapper = styled.main`
  font-family: ${Pretendard.style.fontFamily};
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
`;
