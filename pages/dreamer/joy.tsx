import withStaticApi from '../../utils/withStaticApi';
import OrganizerDetail from '../../templates/organizer/OrganizerDetail';
import type { OrganizerIdPageProps } from 'pages/organizer';

const OrganizerIdPage = (props: OrganizerIdPageProps) => {
  return <OrganizerDetail {...props} />;
};

export default OrganizerIdPage;

export const getStaticProps = withStaticApi(async () => ({ props: {} }), {
  useGithubApi: { nickName: '조이' },
});
