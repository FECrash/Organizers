import { useState } from 'react';
import styled from '@emotion/styled';

import type { OrganizerIdPageProps } from 'pages/organizer';

import MobileLayout from './layout';

import { Modal } from '../../components/Modal';
import { Chip } from '../../components/Chip';

import ParangBook from 'assets/images/ParangBook.svg';
import Frontend from 'assets/images/Frontend.svg';
import Dreamer from 'assets/images/Dreamer.svg';

const OrganizerIdPage = (props: OrganizerIdPageProps) => {
  return (
    <MobileLayout>
      <Wrapper>
        <Modal>
          <Modal.Trigger>
            <Center>
              <ParangBook />
            </Center>
          </Modal.Trigger>

          <Modal.Content>
            <Container>
              <div>
                <Box>
                  <h1>파랑</h1>
                  <h3>소인성 / Dreamer</h3>
                  <Chip icon={<Dreamer />} color="#716AEE" backgroundColor="#B9B6ED">
                    Dreamer
                  </Chip>
                  <Chip icon={<Frontend />} color="#FFBE03" backgroundColor="#FFE69F">
                    Frontend Developer
                  </Chip>
                </Box>

                <Box>
                  <Title>
                    Introduce<BlueText>;</BlueText>
                  </Title>
                  <Description>
                    책에서 추려낸 지식의 페이지는 많아야 하고, 공부는 힘들고 어려워야하며 고민은
                    다양하게, 경험은 깊어야 한다.
                  </Description>
                </Box>

                <Box>
                  <Title>
                    Links<BlueText>;</BlueText>
                  </Title>
                  <Description>
                    <ul>
                      <li>
                        <Link href="https://github.com/inseong-so" target="_blank">
                          https://github.com/inseong-so
                        </Link>
                      </li>
                      <li>
                        <Link href="https://parang.gatsbyjs.io/" target="_blank">
                          https://parang.gatsbyjs.io/
                        </Link>
                      </li>
                    </ul>
                  </Description>
                </Box>
              </div>

              <form
                action="https://join.slack.com/t/pagers-org/shared_invite/zt-1vkjfwiya-Ox1tEotvzHLBgt1P7DuYuA"
                target="_blank"
              >
                <Button>Pagers 슬랙 참여하기</Button>
              </form>
            </Container>
          </Modal.Content>
        </Modal>
      </Wrapper>
    </MobileLayout>
  );
};

export default OrganizerIdPage;

const Wrapper = styled.div`
  height: 55vh;

  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='357' height='224' fill='none'%3E%3Crect width='3' height='7' x='21.343' y='5.464' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(10.548 21.343 5.464)'/%3E%3Crect width='3' height='7' x='19.146' y='17.262' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(10.548 19.146 17.262)'/%3E%3Crect width='3' height='7' x='11.464' y='14.814' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-79.452 11.464 14.814)'/%3E%3Crect width='3' height='7' x='23.262' y='17.011' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-79.452 23.262 17.01)'/%3E%3Crect width='3' height='7' x='331.928' y='172.5' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-30 331.928 172.5)'/%3E%3Crect width='3' height='7' x='337.928' y='182.892' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-30 337.928 182.892)'/%3E%3Crect width='3' height='7' x='330.5' y='186.026' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-120 330.5 186.026)'/%3E%3Crect width='3' height='7' x='340.892' y='180.026' fill='%23DAF2FF' fill-opacity='.5' rx='1.5' transform='rotate(-120 340.892 180.026)'/%3E%3Crect width='2.123' height='4.954' x='218.528' y='23.882' fill='%23DAF2FF' fill-opacity='.5' rx='1.062' transform='rotate(-12.479 218.528 23.882)'/%3E%3Crect width='2.123' height='4.954' x='220.363' y='32.174' fill='%23DAF2FF' fill-opacity='.5' rx='1.062' transform='rotate(-12.479 220.363 32.174)'/%3E%3Crect width='2.123' height='4.954' x='214.682' y='32.706' fill='%23DAF2FF' fill-opacity='.5' rx='1.062' transform='rotate(-102.479 214.682 32.706)'/%3E%3Crect width='2.123' height='4.954' x='222.974' y='30.871' fill='%23DAF2FF' fill-opacity='.5' rx='1.062' transform='rotate(-102.479 222.974 30.871)'/%3E%3Cpath fill='%23DAF2FF' fill-opacity='.5' stroke='%23DAF2FF' stroke-linecap='round' stroke-linejoin='round' stroke-width='5' d='M319 66a4 4 0 0 1-4 4 4 4 0 0 1 4 4 4 4 0 0 1 4-4 4 4 0 0 1-4-4ZM7 213a4 4 0 0 1-4 4 4 4 0 0 1 4 4 4 4 0 0 1 4-4 4 4 0 0 1-4-4Z'/%3E%3Ccircle cx='37' cy='124' r='5' fill='%23DAF2FF' fill-opacity='.5'/%3E%3Ccircle cx='352' cy='5' r='5' fill='%23DAF2FF' fill-opacity='.5'/%3E%3Ccircle cx='136' cy='49' r='5' fill='%23DAF2FF' fill-opacity='.5'/%3E%3C/svg%3E"),
    linear-gradient(360deg, rgba(118, 195, 236, 0) 0%, rgba(118, 195, 236, 1) 100%);
`;
const Center = styled.div`
  display: flex;
  height: 95vh;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 55vh;
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 35%);

  h1 {
    color: #0a2533;
    font-weight: 800;
    font-size: 27px;
  }
  h3 {
    color: #0a2533;
    margin: 3px 0 12px 0;
    font-size: 15px;
  }
`;
const Box = styled.div`
  margin-bottom: 17px;
`;
const Title = styled.h2`
  color: #0a2533;
  font-weight: 700;
  font-size: 17px;
  margin: 5px 0 7px 0;
`;
const Description = styled.p`
  color: #7c7c7c;
  font-size: 15px;

  & ul {
    padding-left: 20px;
    li {
      margin-bottom: 3px;
    }
  }
`;
const Link = styled.a`
  color: #7c7c7c;
  font-size: 15px;
`;
const BlueText = styled.b`
  color: #2a99d3;
  margin-left: 2px;
  font-weight: 900;
`;
const Button = styled.button`
  color: #2a99d3;
  background-color: #d0efff;
  width: 100%;
  height: 60px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;

  &:active {
    transform: scale(0.98);
  }
`;
