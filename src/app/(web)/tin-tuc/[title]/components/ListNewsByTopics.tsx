'use client';

import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetLatestNews } from '../../common/hooks/useGetLatestNews';
import { convertDate, convertSlug } from '@/common/utils/convertData';

const ListNewsByTopic = ({ id }: { id?: number }) => {
  const { push } = useRouter();
  const { listLatestNews, isLoadingListLatestNews } = useGetLatestNews({});
  const listSuggestNews = listLatestNews?.filter((item) => item.id !== id);

  return (
    <Box sx={{ background: '#fff', border: '1px solid #dce0e0', borderRadius: '5px', padding: '24px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Tin tức liên quan</Typography>
      <Box sx={{ pt: '15px', borderTop: '1px solid #dce0e0', mt: '5px' }}>
        <Grid container rowSpacing={3}>
          {listSuggestNews?.map((it) => (
            <Grid key={it.id} item>
              <Box sx={{ display: 'flex', gap: '20px', alignItems: 'normal' }}>
                <Link href={`/tin-tuc/${convertSlug({ data: it.title })}`}>
                  <Image
                    src={it.thumbnail.url}
                    alt=""
                    width={1000}
                    height={800}
                    style={{ borderRadius: '12px', width: '95px', height: '80px' }}
                  />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#222',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                      ':hover': {
                        cursor: 'pointer',
                        color: PRIMARY_MAIN,
                      },
                    }}
                    onClick={() => push(`/tin-tuc/${convertSlug({ data: it.title })}`)}
                  >
                    {it.title}
                  </Typography>
                  <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#999999', textTransform: 'uppercase' }}>
                    {convertDate({ data: it.createdAt })}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ListNewsByTopic;
