import { stories } from "@/app/assets/stories";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const user = stories.find((story) => story.id === id);

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500">Story not found</div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-16 px-6 py-12">
      {/* Video Section */}
      <div className="w-full max-w-4xl">
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
          <video
            src={user.video}
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>


      {/* Story Header */}
      {/* <div className="text-start"></div> */}

      {/* Story Content */}
      <div className="w-full max-w-4xl text-left">
        <p className="text-lg font-normal text-gray-800 leading-relaxed">
          <h1 className="text-4xl font-bold text-primary">{user.name}</h1>
          <p className="text-lg text-gray-500 my-2">{user.Date}</p>
          {user.story}
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full max-w-6xl bg-primary-light p-10 rounded-lg shadow-md">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-3xl font-bold text-primary">
            Be The Next Success Story
          </p>
          <p className="text-2xl font-bold my-4 text-gray-700">
            Canada Is One Click Away
          </p>
          <Button text="Contact Us" />
        </div>
        <Image
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
          className="w-72 h-72 object-contain"
        />
      </div>
    </div>
  );
};

export default Page;
