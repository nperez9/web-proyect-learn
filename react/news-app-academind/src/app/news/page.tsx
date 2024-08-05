import Link from 'next/link';

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <Link href="news/1">Go to number 1</Link>
    </div>
  );
};

export default NewsPage;
