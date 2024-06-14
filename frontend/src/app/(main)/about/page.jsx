import React from 'react'

const About = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-800 lg:text-4xl">
                  About <span className="text-blue-600">Us</span>
                </h1>
                <p className="mt-5 text-gray-600 dark:text-gray-700">
                  Welcome to Awesome Influencers, where we bring together brands and influencers to create impactful partnerships. Our platform is designed to connect businesses with the right influencers who can help promote their products and services to a targeted audience.
                  <br />
                  <br />
                  At Awesome Influencers, we understand the power of influencer marketing and the value it brings to both brands and influencers. We provide a seamless experience for brands to discover, connect, and collaborate with influencers who align with their brand values and target market.
                  <br />
                  <br />
                  For influencers, we offer a platform to showcase their creativity and reach new opportunities for collaboration with leading brands. Our goal is to empower influencers to monetize their influence while maintaining authenticity and credibility with their audience.
                  <br />
                  <br />
                  Whether you are a brand looking to amplify your marketing efforts or an influencer seeking new partnerships, Awesome Influencers is the go-to platform for making meaningful connections and driving impactful results.
                  <br />
                  <br />
                  Join us in redefining influencer marketing and creating authentic, engaging experiences for brands and influencers alike. Let's make collaboration truly awesome!
                  <br />
                  <br />
                  <span className="font-medium text-blue-600">Brand</span> is live.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </header>
      <section className='h-[100px] bg-gradient-to-t from-gray-300'>
      </section>
    </div>
  )
}

export default About;