import Link from 'next/link';

const BetterLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default BetterLink;
