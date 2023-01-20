import React from "react";
import Image from "next/image";
import Link from "next/link";
const callouts = [
  {
    name: "sg blog",
    description: "React, Node.js 로 만든 블로그",
    imageSrc: "/sg_blog.png",
    imageAlt: "blog_img",
    href: "https://github.com/PARKGAIN/sg_blog",
  },
  {
    name: "board",
    description: "React, Spring boot로 만든 게시판",
    imageSrc: "/board.png",
    imageAlt: "board_img",
    href: "https://github.com/PARKGAIN/board",
  },
  {
    name: "login",
    description: "React, Recoil로 만든 로그인 페이지 ",
    imageSrc: "/login.png",
    imageAlt: "login_img",
    href: "https://github.com/PARKGAIN/login",
  },
  // {
  //   name: "login",
  //   description: "React, Recoil로 만든 로그인 페이지 ",
  //   imageSrc: "/login.png",
  //   imageAlt: "login_img",
  //   href: "https://github.com/PARKGAIN/login",
  // },
];
function CardView() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <span className="text-gray-900 invisible group-hover:visible">
                  👇click to see the code
                </span>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="group h-full w-full object-cover object-center"
                    width={900}
                    height={191}
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
