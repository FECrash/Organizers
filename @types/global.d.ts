declare module 'pagers' {
  type User = {
    id: number;
    userName: string;
  };

  type OptionalDefine = Partial<{
    nickName: string;
    blog: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    prLink: string;
  }>;
}
