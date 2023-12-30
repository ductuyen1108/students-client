import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/Tour';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';

export const navigation = [
  { text: 'Trang chủ', path: '/', icon: HomeIcon },
  { text: 'Tin tức', path: '/tin-tuc', icon: NewspaperIcon },
  { text: 'Thông tin điểm', path: '/diem', icon: NewspaperIcon },
  { text: 'Thông tin điểm danh', path: '/diem-danh', icon: TourIcon },
  { text: 'Trang cá nhân', path: '/profile', icon: InfoIcon },
];
