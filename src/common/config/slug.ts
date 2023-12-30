import slugify from 'slugify';

interface SlugProps {
  slug: string;
}

const FormatSlug = ({ slug }: SlugProps) => {
  return slugify(slug, {
    replacement: '-',
    locale: 'vi',
    lower: false,
  });
};

export default FormatSlug;
