import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxExample() {
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        sx={{ m: 2 }}
        component='fieldset'
        variant='filled'
        fullWidth
      >
        <FormLabel component='legend'>Thanks</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                color='error'
              />
            }
            label='좋아요'
          />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
