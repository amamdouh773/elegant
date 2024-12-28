'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type storyProps = {
  name: string;
  date: string;
  story: string;
  id: string;
};

const StoryFull = ({ name, date, story, id }: storyProps) => {
  const t = useTranslations('Stories');
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-between items-start gap-6 p-6 bg-white shadow-lg rounded-xl border-2 border-primary transition-transform transform hover:scale-105">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-lg font-bold text-primary">{name}</p>
      </div>

      {/* Story Preview */}
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
        {story}
      </p>

      {/* Call to Action */}
      <Link
        href={`${pathname}/${id}`}
        className="bg-primary py-2 px-4 text-white font-medium text-sm rounded-lg shadow-md hover:bg-primary-dark transition-colors"
      >
        {t('know')}
      </Link>
    </div>
  );
};

export default StoryFull;
