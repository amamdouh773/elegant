import { stories } from "@/app/assets/stories";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = stories.filter((story) => story.id === id)[0];
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center p-6 gap-28">
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-start gap-7">
              <Image
                src={user.icon}
                alt={user.name}
                width={200}
                height={200}
                className="w-48 h-48"
              />
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="text-5xl font-bold">{user.name}</p>
                <p className="text-xl font-normal text-gray-500">{user.Date}</p>
              </div>
            </div>
            <p className="text-xl font-normal text-gray-800">{user.story}</p>
          </div>
          <video
            src={user.video}
            controls={true}
            width={700}
            about="About Video"
            className="self-center"
          />
        </div>
        <div className="flex justify-between items-center w-full mb-14">
            <div className="flex flex-col items-center justify-center">
                <p className="text-primary text-4xl font-bold">Be The Next Success Story</p>
                <p className="text-4xl font-bold mt-4 ml-14 mb-24">Canada Is One Click Away</p>
                <Button text="Contact Us" />
            </div>
            <Image src="/logo.png" width={400} height={300} className="w-96 h-72 mr-20" alt="logo"/> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
