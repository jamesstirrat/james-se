import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Modal from "react-modal";
import matter from "gray-matter";
import { readdirSync } from "fs";

import FooterNavigation from "../components/FooterNavigation";

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
        <title>James Stirrat-Ellis</title>
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

      <main className="flex flex-col justify-center items-center bg-gray-50 text-gray-800 h-screen">
        <div className="flex flex-col max-w-5xl justify-start pr-32 pt-32 pb-8 mb-8 w-full">
          <div
            className="flex h-6 w-6 bg-primary rounded-full cursor-pointer mb-4"
            onClick={openPhotosModal}
          />
          <h1 className="text-4xl font-medium mb-2">Hey, I'm James</h1>
          <h2 className="text-3xl text-left w-full">
            A <span className="line-through">designer</span>{" "}
            <span className="line-through">engineer</span> founder living in
            London, UK. <br />
            My two goals in life are to build and explore the extraordinary.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 h-full max-w-5xl justify-start pt-8 pb-16 w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-2xl mb-4">Projects</h3>
            {projectEntries &&
              projectEntries.map((project) => (
                <p>{project.frontmatter.title}</p>
              ))}
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4">Experiments</h3>
            {postEntries &&
              postEntries.map((post) => <p>{post.frontmatter.title}</p>)}
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4">Links</h3>
            <p>code for links here</p>
          </div>
        </div>
        <FooterNavigation />
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
