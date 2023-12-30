'use client';

import { Stack } from '@mui/material';
import PostItem from './PostItem';
import { useGetListPost } from '../common/hooks/useGetListPost';

const ListPost = () => {
  const { dataNewsPost, isLoadingData } = useGetListPost({});
  return (
    <Stack spacing={2} width={{ sm: '60%', xs: '100%' }}>
      {dataNewsPost?.items?.map((item) => (
        <PostItem
          key={item.id}
          postDetail={{
            content: item.content,
            createdAt: item.createdAt,
            description: item.description,
            id: item.id,
            image: item.image,
            title: item.title,
            user: item.user,
          }}
        />
      ))}
    </Stack>
  );
};

export default ListPost;
