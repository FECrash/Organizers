import * as React from 'react';
import type { User } from 'pagers';

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.userName}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
