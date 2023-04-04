import React from 'react';
import Link from 'next/link';
import type { User } from 'pagers';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.userName}
  </Link>
);

export default ListItem;
