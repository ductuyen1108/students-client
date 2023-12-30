import { DescPage } from '@/common/config/text';
import { Grid, InputBase, InputBaseProps } from '@mui/material';

type Prop = {
  text: string;
};

type Props = Prop & InputBaseProps;

const TextFieldInput = ({ text, ...other }: Props) => {
  return (
    <Grid item container alignItems="center" rowSpacing={1}>
      <Grid item md={4} sm={4} xs={12}>
        <DescPage text={text} color="#333333" />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <InputBase
          {...other}
          sx={{ padding: '10px 20px 10px 14px', width: '100%', backgroundColor: '#ecf0f1', borderRadius: '24px' }}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldInput;
