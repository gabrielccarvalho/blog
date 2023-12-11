import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        My posts:
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 group"
            href={`/blog/${post.slug}`}
          >
            <div className='flex justify-between items-center w-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded px-3 py-4'>
              <div className="flex gap-2">
                <Suspense fallback={
                  <Image
                    src='/images/placeholder.png'
                    alt={post.metadata.title}
                    width={100}
                    height={100}
                    className='rounded'
                  />
                }>
                  <Image
                    src={post.metadata.image ?? '/images/placeholder.png'}
                    alt={post.metadata.title}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </Suspense>
                <div className='flex flex-col'>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </p>
                  <Suspense fallback={<p className="h-6" />}>
                    <Views slug={post.slug} />
                  </Suspense>
                </div>
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
