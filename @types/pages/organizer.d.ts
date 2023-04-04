declare module 'pages/organizer' {
  type UserProps = {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    location?: string;
    company?: string;
    //
    nickName: string;
    blog?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    prLink?: string;
  };

  type ErrorProps = {
    error: string;
  };

  type OrganizerIdPageProps = UserProps | ErrorProps;
}
