import Link from 'next/link';

export const Cell = ({ item, path }) => {
  return (
    <Link href={item[path]}>
      <a>{item[path]}</a>
    </Link>
  );
};