import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {navigate} from 'gatsby';

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  const handleSubscribe = () => {
    // alert("es");
    navigate('/contact');
  }

  return (
    <div className="content">
      <section id="#plans-pricing" className='pt-20 px-8 lg:px-32 pb-20'>
        <div
            data-aos="fade-up"
            // data-aos-duration="1000"
        >
            <h1 className='text-4xl'>
                Plans {"&"} Pricing
            </h1>
            <p>
                You can choose and manage 
                subscriptions from here. 
                Browse plans, start a subscription
                at any time.
            </p>
        </div>

        <div 
            data-aos="fade-up"
            data-aos-duration="2000"
            className='mt-10 md:space-y-0 space-y-10 md:grid grid-cols-4 gap-6'
        >
            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>            

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

        </div>
        
      </section>


      {/* <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro.blurbs} /> 
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
