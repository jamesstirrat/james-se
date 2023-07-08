import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { readdirSync } from 'fs'
import Container from '../../components/landing/Container/Index'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Head from 'next/head'
import CallToActionShort from '~/components/landing/General/CallToActionShort'

export default function BlogTemplate(props) {
  const { children, ...customMeta } = props
  const meta = {
    title: props.frontmatter.title,
    description: props.frontmatter.summary,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title} - Moot Blog</title>
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`https://www.moot.app/blog/${props.frontmatter?.slug}`}
        />
        <link
          rel="canonical"
          href={`https://www.moot.app/blog/${props.frontmatter?.slug}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Moot" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={`${props.frontmatter.title} - Moot Blog`}
        description={props.frontmatter.summary}
        canonical={`https://www.moot.app/blog/${props.frontmatter?.slug}`}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `https://www.moot.app/images/blog/${props.frontmatter?.slug}.webp`,
          title: props.frontmatter.title,
          description: props.frontmatter.summary,
          images: [
            {
              url: `https://www.moot.app/images/blog/${props.frontmatter?.slug}.webp`,
              alt: props.frontmatter.title,
              width: 1280,
              height: 720,
            },
          ],
          site_name: 'Moot',
        }}
        twitter={{
          handle: '@moot_hq',
          site: '@moot_hq',
          cardType: 'summary_large_image',
        }}
      />
      <Container>
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
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <div className="ring-color-primary h-12 w-12 cursor-pointer rounded-full ring-1 ring-primary ring-offset-2">
                        <a
                          className="rounded-full"
                          href={props.frontmatter.authorSocial}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            alt={props.frontmatter.author}
                            src={props.frontmatter.authorAvatar}
                            className="rounded-full"
                            width={960}
                            height={960}
                          />
                        </a>
                      </div>
                      <div className="ml-4 items-start text-left">
                        <p className="text-start font-medium">
                          {props.frontmatter.author}
                        </p>
                        <p className="text-start font-light">
                          {props.frontmatter.authorRole}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 font-light">
                      {props.frontmatter.displayDate}
                    </p>
                  </div>
                </header>
              </div>
            </div>
          </section>
          <section className="relative max-w-6xl px-4 flex items-center flex-col lg:px-48">
            <div className="mb-4 flex justify-center border border-base-300 rounded-xl">
              <Image
                src={props.frontmatter.heroImage}
                alt="Moot - Make meetings engaging for your team"
                className="rounded-xl"
                width={1440}
                height={720}
                priority
              />
            </div>
            <div className="mt-auto flex justify-center py-6">
              <article className="prose prose-stone w-full">
                <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
              </article>
            </div>
          </section>
          <CallToActionShort />
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`/posts/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = readdirSync(process.cwd() + '/posts/')
  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.replace(/ /g, '-').slice(0, -3).trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
