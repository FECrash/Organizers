import userList from './userList';
import type { GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next';
import type { ParsedUrlQuery } from 'querystring';

// FIXME: 확장 가능
interface CallStaticPropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> extends GetStaticPropsContext {}

type CallStaticProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = (context: CallStaticPropsContext<Q, D>) => Promise<GetStaticPropsResult<P>>;

type CallStaticPropsOption = {
  useGithubApi?: {
    id?: number;
    userName?: string;
    nickName?: string;
  };
};

const withStaticApi =
  <T extends { [key: string]: any }>(
    getStaticProps: CallStaticProps,
    { useGithubApi }: CallStaticPropsOption,
  ) =>
  async (context: CallStaticPropsContext) => {
    if (useGithubApi) {
      const targetUser = userList.find(
        ({ id, userName, nickName }) =>
          id === useGithubApi.id ||
          userName === useGithubApi.userName ||
          nickName === useGithubApi.nickName,
      );

      if (!targetUser) return { props: { error: '옳지 못한 유저입니다.' } };

      try {
        const { id, userName, ...rest } = targetUser;
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        return { props: { ...data, ...rest } };
      } catch (error) {
        return { props: { error: (error as Error).message } };
      }
    }

    return await getStaticProps(context);
  };

export default withStaticApi;
