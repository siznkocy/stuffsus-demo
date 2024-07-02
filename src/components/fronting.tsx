"use client";
import {
  PauseIcon,
  PlayIcon,
  SparklesIcon,
  Volume2Icon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";

/**
 * todo: New arrivals product
 */

const icon_Features = [];

export default function Fronting() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  function togglePlayPause() {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  }

  return (
    <section>
      {/* column 1 */}
      <div className="my-5">
        <div className="md:aspect-video aspect-square w-full ">
          <div className="absolute right-0 left-0 w-full">
            <video
              ref={videoRef}
              className="relative object-cover md:aspect-video aspect-square z-0"
              muted
              loop
            >
              <source
                src={
                  "https://cdn.dribbble.com/users/345135/screenshots/16724362/media/394bedf4070ad64785b8e596e9969e79.mp4"
                }
              />
            </video>
            <div className="z-50 bg-black bg-opacity-45 text-white relative lg:bottom-36 bottom-48 lg:pb-10 pb-4 lg:px-20 px-4 lg:h-36 h-48 flex flex-col">
              <button
                className="bg-primary w-fit py-2 px-2 md:px-4 rounded-3xl text-extralight text-sm absolute -top-4 left-4 md:left-16 flex gap-1 flex-nowrap items-center"
                onClick={togglePlayPause}
              >
                {isPaused ? (
                  <>
                    <PlayIcon className="size-4" />
                    <span>play video</span>
                  </>
                ) : (
                  <>
                    <PauseIcon className="size-4" />
                    <span>pause video</span>
                  </>
                )}
              </button>
              <div className="mt-auto">
                <h3 className="text-white md:text-4xl text-2xl font-medium">
                  When Your Home feels modern with Stuffsus
                </h3>
                <p className="text-sm font-extralight">{`Stay on top with the latest designs the newest with Kontrapunkt recliner. Never cease the moment to relax, read and enhancing your living space with one of the their chairs collection of finest materials `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className="flex gap-10 md:flex-row-reverse flex-col justify-between bg-opacity-50 py-10">
        <div className="md:w-2/5 w-full md:aspect-square aspect-video relative">
          <Image
            className="object-cover rounded-lg overflow-hidden border "
            src={
              "https://cdn.dribbble.com/users/6343016/screenshots/14542847/media/a2fe9fbc908a12749bb777c217b65a8e.jpg?resize=1000x750&vertical=center"
            }
            alt="latest"
            fill
          />
        </div>
        <div className="flex flex-col md:w-3/5 gap-y-6">
          {/*sub column 1 */}
          <div className="w-full space-y-1">
            <p className="uppercase text-sm font-medium text-muted-foreground">
              New Arrival
            </p>
            <h3 className="text-primary font-semibold md:text-3xl text-xl">
              Apple HomePod mini
            </h3>
            <p className="text-muted-foreground text-sm">
              {`Having powerful audio everywhere in the house couldn‘t be simpler and each HomePod mini gives you total control, no matter where you are.`}
            </p>
          </div>
          {/*sub column 2 */}
          <div className="flex flex-col md:gap-2 gap-3 mt-auto">
            {/* icon feature */}
            <Features
              icon={<Volume2Icon />}
              title="Super Sound"
              text="Just the right home sound quality you need"
            />
            <Features
              icon={<ZapIcon />}
              title="Power"
              text="Comes with 20W power adapter."
            />
            <Features
              icon={<SparklesIcon />}
              title="Clean Design"
              text="It blends with your home decor."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  text: string;
  title: string;
}) {
  return (
    <div className="flex flex-row space-y-gap-10 gap-2 items-center">
      <div className="rounded-full p-gap-10 size-12 bg-muted flex items-center justify-center *:stroke-1">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-base font-bold">{title}</h4>
        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
    </div>
  );
}
