import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>James Stirrat-Ellis</title>
        <meta name="description" content="The landing page of James Stirrat-Ellis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center bg-gray-50 text-black'>
        <div className='max-w-4xl'>
          <div className='my-4 flex flex-row items-center'>
          <a href="https://twitter.com/jamesse_">
            <div className='rounded-full w-11 h-11 justify-center items-center flex ring-2 ring-offset-0 ring-primary'>
                <Image
                src='/images/james-avatar.png'
                className='w-12 h-12 rounded-full'
                width={40}
                height={40}
                />
              </div>
            </a>
            <h1 className='ml-2 text-xl font-bold'>James Stirrat-Ellis</h1>
          </div>
          <div className='mb-6'>
              <p>I’m an entrepreneur, engineer, designer.</p>
          </div>
          <div className='mb-8'>
              <p className='text-md'>Some things about me:</p>
              <ul className='text-sm list-disc ml-8'>
                <li>Grew up just outside of Belfast, Northern Ireland</li>
                <li>Previously trained as an architect, where the last thing I did in architecture was drop out of my masters at Harvard Graduate School of Design (I’ll come back to architecture at some point).</li>
                <li>Started <a className="text-blue-500" href='https://trymoot.com'>a company</a> to work on building great technology, hopefully won’t have to start another!</li>
                <li>Currently split time between London (two thirds of year) and anywhere else that is sunny (for the other third).</li>
                <li>My idea of fun is vagabonding (meandering travel), skydiving (jumping out of airplanes), and building new things.</li>
              </ul>
          </div>
          <div className='mb-8'>
              <p className='text-md'>Some things I believe:</p>
              <ul className='text-sm list-disc ml-8'>
                <li>Everything is driven by the force of evolution, the greatest force in the universe.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>As human beings (the most consious force of life that we are currently aware), our imperative is to shape the world to our liking, and any consequence of that is an outcome of evolution (not bad).</li>
                  <li>Evolution communicates through iteration, and iteration leads to innovation (new things). Bad iterations (bad things) can’t be stopped. But neither can good.</li>
                  <li>Innovation (new things) allow us to do more with less, and thus our time is currently best spent in raising the ceiling of human progress, not the floor.</li>
                  {/* <li>Raising the floor will eventually erase all objective poverty, but never relative poverty.</li> */}
                </ul>
                <li>Human experience is not base reality, therefore we can not come to conclusions about truth.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Humans can only experience 0% of the full electromagnetic spectrum, since the spectrum is infinite, therefore we cannot grasp reality through observation (although we shouldn’t stop trying).</li>
                  <li>The things we believe are often wrong (as proven by history), and we are not even close to asking the right questions.</li>
                  <li>Our definitions of consiousness are pretty consistent, but consiousness is only one interface for interacting with the universe.</li>
                </ul>
                <li>Science and religion are pointing to the same thing, despite seemingly being at odds.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Out of all the interrogatives (what, which, when, where, who, whom, whose, why, whether and how), what and why are the two that are most important as they relate how we interpret meaning.</li>
                  <li>Therefore 80% of meaning comes from 20% of these interrogatives! </li>
                  <li>Science seeks to answer ‘what’, religion seeks to answer ‘why’.</li>
                  <li>Therefore it is as important to be curious about why, as it is about what.</li>
                </ul>
                <li>Life is a ponzi scheme & everything a scam</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>A ponzi scheme is defined as an investment scheme that pays existing investors with new investors.</li>
                  <li>Humans are constructed on the will to meaning (as per Victor Frankl), and meaning in life is dependent on the investment into creating new things (children, objects, ideas).</li>
                  <li>So the only thing to do in the end is grow, enjoy that growth, and pass that growth onto others so that they can repeat the cycle in a higher plane of being.</li>
                </ul>
                <li>The greatest period of architecture (by modern standards) was the Europe in the late 19th century.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>We were able to take millenia of architectural wisdom and apply it collectively. Since the introduction and development of Modernism, this is far from the case today.</li>
                  <li>The consequences of this period of building were also extraordinarily democratic, in our ability to build equitably, with speed, for the most populated cities.</li>
                  <li>We were able to take greatest advantage of venacular construction and materiality, in a way that was greatest for quality of life & relationship to the built environment.</li>
                  <li>The average lifespan of a building today is 30 years, yet there are more homes in England today which were built before 1900, than any other era.</li>
                  <li>Our goal should be to understand the principles that embodied this period and evolve them through contemporary technology.</li>
                </ul>
                <li>One of these principles is in the idea of Design Driven Development, where there is equal spread over the creative, technical and economic facets of the built environment.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Another one of these is in open-sourcing architectural patterns, so that no two buildings need to be independently designed.</li>
                </ul>
                <li>True sustainability is hollistic & most measures and ideals we have around sustainability are wrong.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Sustainability is embodied. The thing in question is made from materials that contain a neutral or positive amount of carbon.</li>
                  <li>Sustainability is operational. The thing in question runs neutral or positive in its carbon consumption.</li>
                  <li>Sustainability is ecological. The thing in question has a positive or neutral effect on ecology.</li>
                  <li>Sustainability is social. The thing in question is loved, so it is maintained.</li>
                  <li>Sustainability is economic. The thing in question adds, and continues to add wealth to society after its inception.</li>
                </ul>
                <li>The goal of life is love, and love is freedom. Whether in relationships, management, or philosophy.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Great individuals should be empowered to exercise their judgement, and your goal should be to interact and grow alongside great individuals.</li>
                  <li>This will bring on mistakes, but likely less mistakes than if judgement is controlled by one person.</li>
                  <li>You can take all that misdirected micromanaging (worry) time, and put it into positively reinforcing activities.</li>
                </ul>
                <li>China is a massive blind spot in the West, and we’re going to pay for it.</li>
                <li>The future of work is both remote and asyncronous.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>As covered previously, evolution is the greatest force in the universe, and evolution always tends towards optimisation.</li>
                  <li>Remote work is a massive optimisation on work in general, both from a time (productivity) perspective as well as an economic and environmental perspective.</li>
                  <li>For it’s downsides, we are in early days and it is only going to 10x in terms of experience (as it has the past 10).</li>
                </ul>
                <li>Smaller teams are better, so keep things as small as you can for as long as you can.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>Faster decisions, fewer meetings, more fun.</li>
                  <li>Can grow faster as individuals as constantly stretched.</li>
                  <li>No room for mediocre people (for the above reasons).</li>
                  <li>With technology, a lot can be done with very little. This is increasingly the case. Entire products with millions of users have been built with teams that can be counted on one hand.</li>
                </ul>
                <li>You can have your cake and eat it, meaning you can achieve everything you want to.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>The only caveat is that you can’t have it all at once and the desire will take on a different form that you imagined it to.</li>
                </ul>
                <li>Most human problems stem from issues in communication.</li>
                <ul className='text-sm list-disc ml-8'>
                  <li>There is always room for new products that iterate and evolve how we communicate, making it better, faster and cheaper to do so.</li>
                  <li>In the past I have chosen not to speak, because I thought it was better to be quiet than misunderstood. Now I think the opposite.</li>
                  <li>I like to be wrong, when there is a proposal for a better way.</li>
                  <li>If you disagree with anything on this list, reach out and i’ll be happy to have a conversation about it!</li>
                </ul>
              </ul>
          </div>
          <div className='border-t border-gray-500 my-4'/>
          <div className='mb-12 mt-8'>
              <p className='text-md'>Things I have an hunch about, but am not yet sure:</p>
              <ul className='text-sm list-disc ml-8'>
                <li>Augmented and Mixed Reality will be the dominant computing force for consumer tech within the next 5-10 years (not VR or personal computing), simply because it solves the majority of problems people have with current technology (it takes away from their ‘real’ life).</li>
                <li>Money is collective communication and a means to an end. All economics are laughable in time due to the creation of wealth by society. Therefore raw ideas are the true currency of humanity and truely timeless creation lies in the hands of art rather than industry.</li>
                <li>The New Testament eg. the teachings of Jesus are the closest thing to universal truth for how to behave as a human. The inclusion of the old testament and the Jewish ideas tied in by Paul are a flaw that bring fear and stunt humanity.</li>
                <li>BTC (PoW), ETH (and other PoS chains) & Fiat are mutually compatable. There is room for all of them.</li>
                <li>BTC will become the worlds main reserve currency, creating a dynamic between the centralised control of nation states and the decentralised web. Post nation world order & post war society?</li>
                <li>COVID was an unintentional lab leak, that somehow proved that engineered biology can be paired with strong policy to attack other nations. Warfare of the future will be conducted in this way.</li>
                <li>Much of modern medicine that involves pharamacuticals is a complete scam, and much of the promised effects of treatment can be solved (or prevented) through lifestyle (diet, exercise & mental) changes. Including depression & cancer.</li>
              </ul>
          </div>
        </div>
      </main>
{/* 
      <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
