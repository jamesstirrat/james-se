import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Modal from "react-modal";
import matter from "gray-matter";
import { readdirSync } from "fs";

import FooterNavigation from "../components/FooterNavigation";
import { HiArrowRight } from "react-icons/hi";

const photos = [
  {
    id: 1,
    src: "/images/1.jpg",
    caption: "Via Ferrata in Grindelwald, Switzerland",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    caption: "Skydiving in Évora, Portugal",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    caption: "Cycling in San Francisco, CA",
  },
  {
    id: 4,
    src: "/images/4.jpg",
    caption: "Visiting a neon museum in Warsaw, Poland",
  },
  {
    id: 5,
    src: "/images/5.jpg",
    caption: "Watching my best friend get married in Northern Ireland",
  },
  {
    id: 6,
    src: "/images/6.jpg",
    caption: "Huskey sledding near Riga, Latvia",
  },
  {
    id: 7,
    src: "/images/6.jpg",
    caption: "Huskey sledding near Riga, Latvia",
  },
  {
    id: 8,
    src: "/images/6.jpg",
    caption: "Huskey sledding near Riga, Latvia",
  },
  {
    id: 9,
    src: "/images/6.jpg",
    caption: "Huskey sledding near Riga, Latvia",
  },
  {
    id: 9,
    src: "/images/6.jpg",
    caption: "Huskey sledding near Riga, Latvia",
  },
];

const sortDates = (a, b) => {
  return compareDesc(
    new Date(a.frontmatter.publishedAt),
    new Date(b.frontmatter.publishedAt)
  );
};

export default function Home({ projectEntries, postEntries }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openPhotosModal = () => {
    setModalIsOpen(true);
  };

  const closePhotosModal = () => {
    setModalIsOpen(false);
  };

  const photoRefs = useRef(photos.map(() => React.createRef()));

  return (
    <div className="">
      <Head>
        <title>James SE</title>
        <meta
          name="description"
          content="The landing page of James Stirrat-Ellis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closePhotosModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            margin: "0 auto",
          },
          content: {
            position: "absolute",
            border: "none",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
        contentLabel="Example Modal"
      >
        <div
          onClick={closePhotosModal}
          className="flex items-center justify-center w-full border-none"
        >
          <p className="w-full h-full flex items-center justify-center">
            Some things about me: Grew up just outside of Belfast, Northern
            Ireland. Previously trained as an architect, where the last thing I
            did in architecture was drop out of my masters at Harvard Graduate
            School of Design (I’ll come back to architecture at some point).
            Started a company to work on building great technology, hopefully
            won’t have to start another! Currently split time between London
            (two thirds of year) and anywhere else that is sunny (for the other
            third). My idea of fun is vagabonding (meandering travel), skydiving
            (jumping out of airplanes), and building new things.
          </p>
          {photos.map((photo, index) => {
            const total = photos.length;
            const rotation = (1240 / total) * index;
            const position = (index / total) * (2 * Math.PI);
            const left = 35 + 50 * Math.cos(position);
            const top = 25 + 50 * Math.sin(position);

            const slightRotation = position < Math.PI ? 15 : -15;

            return (
              <div
                className="absolute w-80 h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform scale-125"
                style={{
                  transform: `rotate(${rotation + slightRotation}deg)`,
                  top: `${top}%`,
                  left: `${left}%`,
                  scale: 1.5,
                }}
                key={photo.id}
              >
                <div
                  className="w-full h-full transform relative scale-125"
                  style={{
                    transform: `rotate(${-rotation - slightRotation}deg)`,
                  }}
                >
                  <div
                    className="absolute w-full h-full aspect-square bg-slate-400 items-center flex justify-center text-sm"
                    style={{
                      transform: `rotate(${rotation + slightRotation}deg)`,
                    }}
                  >
                    {photo.caption}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>

      <main className="flex flex-col justify-center items-center bg-gray-50 text-gray-800 min-h-screen lg:px-0 px-6">
        <div className="flex flex-col max-w-5xl justify-start lg:pr-32 pt-24 lg:pt-32 pb-8 mb-8 w-full">
          <div className="flex flex-row items-center mb-4">
            <div
              className="flex h-6 w-6 bg-primary rounded-full cursor-pointer ml-1 mr-2 ring-2 ring-offset-2 ring-primary"
              onClick={openPhotosModal}
            >
              <Image
                src="/images/james-avatar.png"
                className="w-12 h-12 rounded-full"
                width={40}
                height={40}
              />
            </div>
            <div className="flex h-6">
              <Image
                src="/images/sig.png"
                className="h-12 w-20"
                width={45}
                height={30}
              />
            </div>
          </div>
          <h1 className="text-4xl font-medium mb-2">Hey, I'm James</h1>
          <h2 className="text-3xl text-left w-full">
            A <span className="line-through">designer</span>{" "}
            <span className="line-through">engineer</span> founder living in
            London, UK. <br className="hidden md:block" />
            My two goals in life are to build and explore the extraordinary.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full max-w-5xl justify-start pt-8 mb-32 w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-2xl mb-8 font-medium">Projects</h3>
            {projectEntries &&
              projectEntries.map((project) => (
                <a
                  key={project.frontmatter.title}
                  href={project.frontmatter.url}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <div className="flex flex-col">
                    <p className="mb-2 font-medium">
                      {project.frontmatter.title}
                    </p>
                    <p className="mb-6">{project.frontmatter.subtitle}</p>
                  </div>
                </a>
              ))}
            <p className="font-medium opacity-60 cursor-wait">
              More projects uploaded soon
            </p>
          </div>
          <div className="w-full h-1 border-b-2 block lg:hidden" />
          <div className="flex flex-col">
            <h3 className="text-2xl mb-8 font-medium">Experiments</h3>
            {postEntries &&
              postEntries.map((post) => (
                <a
                  className="cursor-pointer"
                  key={post.frontmatter.title}
                  href={post.frontmatter.url}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <div className="flex flex-col">
                    <p className="mb-2 font-medium">{post.frontmatter.title}</p>
                    <p className="mb-6">
                      {post.frontmatter.subtitle}
                      <span className="ml-1 opacity-60">
                        {post.frontmatter.displayDate}
                      </span>
                    </p>
                  </div>
                </a>
              ))}
            <p className="font-medium opacity-60 cursor-wait">
              More experiments coming soon
            </p>
          </div>
          <div className="w-full h-1 border-b-2 block lg:hidden" />
          <div className="flex flex-col">
            <h3 className="text-2xl mb-8 font-medium">Links</h3>
            <a
              className="font-medium w-fit bg-gray-200 rounded-md py-2 px-4 flex flex-row items-center mb-4"
              href="https://moot.app"
              target="_blank"
              rel="nofollow noreferrer"
            >
              {" "}
              <p className="mr-1">{"What I'm currently working on"}</p>
              <HiArrowRight />
            </a>
            <a
              className="font-medium w-fit bg-gray-200 rounded-md py-2 px-4 flex flex-row items-center mb-4"
              href="https://moot.app/#?ref=jamesstirratellis.com"
              target="_blank"
              rel="nofollow noreferrer"
            >
              {" "}
              <p className="mr-1">Learn more about me</p>
              <HiArrowRight />
            </a>
          </div>
        </div>
        {!modalIsOpen && (
          <div className="absolute left-0 top-0 flex h-screen items-center w-32">
            <FooterNavigation />
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps({ ...ctx }) {
  const projects = readdirSync(process.cwd() + "/projects/");
  const projectSlugs = projects.map((file) =>
    file.replace(/ /g, "-").slice(0, -3).trim()
  );

  let projectEntries = await Promise.all(
    projectSlugs.map(async (slug) => {
      const content = await import(`/projects/${slug}.md`);
      const data = matter(content.default);
      const projectData = {
        frontmatter: data.data,
        markdownBody: data.content,
      };

      return projectData;
    })
  );

  const posts = readdirSync(process.cwd() + "/posts/");
  const postSlugs = posts.map((file) =>
    file.replace(/ /g, "-").slice(0, -3).trim()
  );

  let postEntries = await Promise.all(
    postSlugs.map(async (slug) => {
      const content = await import(`/posts/${slug}.md`);
      const data = matter(content.default);
      const postData = {
        frontmatter: data.data,
        markdownBody: data.content,
      };

      return postData;
    })
  );

  return {
    props: {
      projectEntries: projectEntries,
      postEntries: postEntries,
    },
  };
}

// export async function getStaticProps({ ...ctx }) {

// }
