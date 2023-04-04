import { GetStaticProps } from 'next';
import userList from '../utils/userList';
import OrganizerDetail from '../templates/organizer/OrganizerDetail';
import type { OrganizerIdPageProps } from 'pages/organizer';

const OrganizerIdPage = (props: OrganizerIdPageProps) => {
  return <OrganizerDetail {...props} />;
};

export default OrganizerIdPage;

export const getStaticProps: GetStaticProps<OrganizerIdPageProps> = async () => {
  const targetUser = userList.find(({ id }) => id === 1);
  if (!targetUser) return { props: { error: '옳지 못한 유저입니다.' } };

  try {
    const { id, userName, ...rest } = targetUser;
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return { props: { ...data, ...rest } };
  } catch (error) {
    return { props: { error: (error as Error).message } };
  }
};
