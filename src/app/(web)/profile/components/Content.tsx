import { Paper, Stack } from '@mui/material';
import TabContent from './TabContent';

const Content = () => {
  return (
    <Stack spacing={2} sx={{ width: { sm: '70%', xs: '100%' } }}>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: '10px' }}>
        <Stack direction={'row'} spacing={2}>
          <TabContent />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Content;
