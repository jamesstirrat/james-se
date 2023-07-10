import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Modal from "react-modal";
import matter from "gray-matter";
import { readdirSync } from "fs";
import { motion } from "framer-motion";

import FooterNavigation from "../components/FooterNavigation";
import { HiArrowRight } from "react-icons/hi";

const photos = [
  {
    id: 1,
    src: "/images/golden-gate.png",
    caption: "Cycling across the Golden Gate Bridge, San Francisco, CA",
  },
  {
    id: 2,
    src: "/images/algarve.png",
    caption: "Skydiving across the Algarve, Portugal",
  },
  {
    id: 3,
    src: "/images/grindelwald.png",
    caption: "Via Ferrata in Grindelwald, Switzerland",
  },
  {
    id: 4,
    src: "/images/dolomites.png",
    caption: "Skiing in the Dolomites, Italy",
  },
  {
    id: 5,
    src: "/images/lough-erne.png",
    caption: "Watching my best friend get married in Northern Ireland",
  },
  {
    id: 6,
    src: "/images/snowdonia.png",
    caption: "Hiking in Snowdonia National Park, Wales",
  },
  {
    id: 7,
    src: "/images/riga.png",
    caption: "Huskey sledding near Riga, Latvia",
  },
  {
    id: 8,
    src: "/images/gdansk.png",
    caption: "Kayaking in Gdansk, Poland",
  },
  {
    id: 9,
    src: "/images/barcelona.png",
    caption: "Exploring my old home, Barcelona, Spain",
  },
];

const sortDates = (a, b) => {
  return compareDesc(
    new Date(a.frontmatter.publishedAt),
    new Date(b.frontmatter.publishedAt)
  );
};

export default function Home({ projectEntries, postEntries }) {
  const [photosModalIsOpen, setPhotosModalIsOpen] = useState(false);
  const [aboutMeModalIsOpen, setAboutMeModalIsOpen] = useState(false);

  const openPhotosModal = () => {
    setPhotosModalIsOpen(true);
  };

  const closePhotosModal = () => {
    setPhotosModalIsOpen(false);
  };

  const openAboutMeModal = () => {
    setAboutMeModalIsOpen(true);
  };

  const closeAboutMeModal = () => {
    setAboutMeModalIsOpen(false);
  };

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
        isOpen={photosModalIsOpen}
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
        contentLabel="What I've been up to"
      >
        <div
          onClick={closePhotosModal}
          className="flex items-center justify-center w-full border-none"
        >
          <motion.div
            initial={{ opacity: 0, top: "-50%", left: "-50%", rotate: 20 }}
            animate={{ opacity: 1, top: "2%", left: "-4%", rotate: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[0].src}
                alt={photos[0].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[0].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "100%", left: "-50%", rotate: -14 }}
            animate={{ opacity: 1, top: "50%", left: "-2%", rotate: -14 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[1].src}
                alt={photos[1].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[1].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "50%", left: "-25%", rotate: 8 }}
            animate={{ opacity: 1, top: "30%", left: "18%", rotate: 8 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-slide-in-from-left"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[2].src}
                alt={photos[2].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[2].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "-50%", left: "26%", rotate: -4 }}
            animate={{ opacity: 1, top: "-6%", left: "34%", rotate: -4 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[3].src}
                alt={photos[3].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[3].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "100%", left: "49%", rotate: -6 }}
            animate={{ opacity: 1, top: "64%", left: "45%", rotate: -6 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[4].src}
                alt={photos[4].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[4].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "-50%", left: "70%", rotate: 20 }}
            animate={{ opacity: 1, top: "27%", left: "62%", rotate: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-sm">
              <Image
                src={photos[5].src}
                alt={photos[5].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[5].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "100%", left: "100%", rotate: -9 }}
            animate={{ opacity: 1, top: "53%", left: "80%", rotate: -9 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-xs">
              <Image
                src={photos[6].src}
                alt={photos[6].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[6].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "-50%", left: "95%", rotate: -17 }}
            animate={{ opacity: 1, top: "-2%", left: "85%", rotate: -17 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-xs">
              <Image
                src={photos[7].src}
                alt={photos[7].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[7].caption}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, top: "-50%", left: "60%", rotate: 12 }}
            animate={{ opacity: 1, top: "-14%", left: "54%", rotate: 12 }}
            transition={{ duration: 0.5 }}
            className="absolute w-56 h-64 lg:w-80 lg:h-96 bg-white rounded shadow-md px-4 pt-4 pb-12 transform animate-enter"
          >
            <div className="group w-full aspect-1 bg-gray-600 items-center flex justify-center text-xs">
              <Image
                src={photos[8].src}
                alt={photos[8].caption}
                width={400}
                height={400}
              />
              <div className="absolute z-10 text-center px-8 bg-opacity-60 w-full bottom-8 font-medium text-xs hidden lg:block">
                {photos[8].caption}
              </div>
            </div>
          </motion.div>
        </div>
      </Modal>

      <Modal
        isOpen={aboutMeModalIsOpen}
        onRequestClose={closeAboutMeModal}
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
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
          },
        }}
        contentLabel="About Me"
      >
        <div
          onClick={closeAboutMeModal}
          className="flex items-center justify-center w-full h-full border-none flex-col text-xs md:text-sm lg:text-md"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-2xl">About</p>
            <p>
              I currently live in London & work on{" "}
              <a
                href="https://moot.app/#?ref=jamesstirratellis.com"
                className="text-blue-400"
              >
                Moot
              </a>
              . I grew up just outside of Belfast, Northern Ireland and studied
              at Harvard GSD, Imperial College London and the Royal College of
              Art.
            </p>
            <p>
              I was previously training as an architect, where the last thing I
              did in architecture was drop out of my masters at Harvard Graduate
              School of Design (I’ll come back to architecture at some point).
            </p>
            <p>
              Started a company to work on building great technology, hopefully
              won’t have to start another! That said, some areas of interest:
            </p>
            <p className="pl-8">
              ⦿ Architecture. Specifically building a new model of practicing
              architecture that re-adjusts incentives towards beauty, high time
              preference & large scale efficiency.
            </p>
            <p className="pl-8">
              {
                "⦿ Spatial computing. This is the paradigm shift where computing begins to wrap around the human experience, rather than the other way around. It's also where my passion for architecture (space) meets my passion for technology (computing)."
              }
            </p>
            <p className="pl-8">
              ⦿ Citizen science, specifically around medical research. I believe
              the incentives of the medical profession offer great possibility
              but sometimes cause more harm than good, and non-professionals can
              drive the field forward.
            </p>
            <p className="pl-8">
              ⦿ Freedom and ideas. Innovation is a child of freedom & ideas are
              precious. I have only been able to explore the way I have because
              of the privilege of being free, and being surrounded by people who
              see the value in ideas. I hope I can help others do the same.
            </p>

            <p>
              My idea of fun is vagabonding (meandering travel), skydiving
              (jumping out of airplanes), and building new things.
            </p>
          </div>
        </div>
      </Modal>

      <main className="flex flex-col justify-center items-center bg-gray-50 text-gray-800 min-h-screen lg:px-0 px-6">
        <div className="flex flex-col max-w-5xl justify-start lg:pr-32 pt-24 lg:pt-32 pb-8 mb-8 w-full">
          <div className="flex flex-row items-center mb-4">
            <div
              className="flex h-6 w-6 bg-primary rounded-full cursor-pointer ml-1 mr-2 ring-2 ring-offset-2 ring-primary"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event propagation
                openPhotosModal();
              }}
            >
              <Image
                src="/images/james-avatar.png"
                className="w-12 h-12 rounded-full"
                width={40}
                height={40}
                alt="James SE Avatar"
              />
            </div>
            {/* <div className="flex ml-1">
              <Image
                src="/sig.png"
                className="h-24 w-40"
                width={54}
                height={36}
                alt="James SE Signature"
              />
            </div> */}
          </div>
          <h1 className="text-4xl font-medium mb-2">
            {"Hey, I'm James Stirrat-Ellis"}
          </h1>
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
              projectEntries
                .sort(
                  (a, b) =>
                    a.frontmatter.homepageIndex - b.frontmatter.homepageIndex
                )
                .map((project) => (
                  <div
                    key={project.frontmatter.title}
                    className={
                      project.frontmatter.published ? "" : "cursor-wait"
                    }
                  >
                    <a
                      key={project.frontmatter.title}
                      href={project.frontmatter.url}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className={
                        project.frontmatter.published
                          ? ""
                          : "pointer-events-none"
                      }
                    >
                      <div className="flex flex-col">
                        <p className="mb-2 font-medium">
                          {project.frontmatter.title}
                        </p>
                        <p className="mb-6">{project.frontmatter.subtitle}</p>
                      </div>
                    </a>
                  </div>
                ))}
            <p className="font-medium opacity-60 cursor-wait">
              More projects uploaded soon
            </p>
          </div>
          <div className="w-full h-1 border-b-2 block lg:hidden" />
          <div className="flex flex-col">
            <h3 className="text-2xl mb-8 font-medium">Experiments</h3>
            {postEntries &&
              postEntries
                .sort(
                  (a, b) =>
                    new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
                )
                .map((post) => (
                  <div
                    key={post.title}
                    className={
                      post.frontmatter.published != false ? "" : "cursor-wait"
                    }
                  >
                    <a
                      href={`/posts/${post.frontmatter?.slug}/`}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="pointer-events-none"
                    >
                      <div className="flex flex-col">
                        <p className="mb-2 font-medium">
                          {post.frontmatter.title}
                        </p>
                        <p className="mb-6">
                          {post.frontmatter.subtitle}
                          <span className="ml-1 opacity-60">
                            {post.frontmatter.displayDate}
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
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
              href="https://moot.app/#?=jamesstirratellis.com"
              target="_blank"
              rel="nofollow noreferrer"
            >
              {" "}
              <p className="mr-1">{"What I'm currently working on"}</p>
              <HiArrowRight />
            </a>
            <div
              onClick={openAboutMeModal}
              className="font-medium w-fit bg-gray-200 rounded-md py-2 px-4 flex flex-row items-center mb-4 cursor-pointer"
            >
              <p className="mr-1">Learn more about me</p>
              <HiArrowRight />
            </div>
          </div>
        </div>
        {!aboutMeModalIsOpen && (
          <div className="absolute bottom-0 flex h-screen items-center w-32">
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
