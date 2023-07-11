import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { readdirSync } from "fs";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Head from "next/head";

export default function ProjectTemplate(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: props.frontmatter.title,
    description: props.frontmatter.summary,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title} - James Stirrat-Ellis</title>
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`https://jamesstirratellis.com/projects/${props.frontmatter?.slug}`}
        />
        <link
          rel="canonical"
          href={`https://jamesstirratellis.com/projects/${props.frontmatter?.slug}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="James Stirrat-Ellis" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={`${props.frontmatter.title} - James Stirrat-Ellis`}
        description={props.frontmatter.summary}
        canonical={`https://jamesstirratellis.com/projects/${props.frontmatter?.slug}`}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://www.jamesstirratellis.com/images/james-se-open-graph.png`,
          title: props.frontmatter.title,
          description: props.frontmatter.summary,
          images: [
            {
              url: `https://www.jamesstirratellis.com/images/james-se-open-graph.png`,
              alt: props.frontmatter.title,
              width: 1280,
              height: 720,
            },
          ],
          site_name: "James Stirrat-Ellis",
        }}
        twitter={{
          handle: "@jamesse_",
          site: "@jamesse_",
          cardType: "summary_large_image",
        }}
      />
      <div
        data-theme="light"
        className="bg-repeat bg-pixel-noise flex flex-col items-center"
      >
        <section className="relative mb-8">
          <div className="px-[20px] md:px-[70px] lg:px-[30px]">
            <div className="mx-[max(15vh,_10em)_0_0em]">
              <header className="mx-auto mt-auto text-center max-w-6xl">
                <h1 className="antialised mb-6">
                  <p className="mt-[10px] pt-6 text-[24px] font-medium leading-none sm:text-[18px] md:text-[32px] lg:text-[36px] md:px-24">
                    {props.frontmatter.title}
                  </p>
                </h1>
              </header>
            </div>
          </div>
        </section>
        <section className="relative max-w-6xl px-4 flex items-center flex-col lg:px-48">
          <div className="mt-auto flex justify-center py-6">
            <article className="prose prose-stone w-full">
              <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`/projects/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const projects = readdirSync(process.cwd() + "/projects/");
  //remove path and extension to leave filename only
  const projectSlugs = projects.map((file) =>
    file.replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = projectSlugs.map((slug) => `/projects/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
