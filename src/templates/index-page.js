import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import heroimage from '../img/heroimage.png';
import completedicon from '../img/completedicon.png';
import ratingicon from '../img/ratingicon.png';
import timelineicon from '../img/timelineicon.png';
import activityicon from '../img/activityicon.png';
import hearticon from '../img/hearticon.png';
import workicon from '../img/workicon.png';
import '../styles/global.css';


// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
}) => {
  const heroImage = getImage(image) || image;


  return (
    <div>
      <section  
      id="home"
      className='pt-20 px-8 lg:px-32 lg:grid grid-cols-2 gap-10'
      >
        <div className='herocontent flex justify-center items-center lg:mb-0 mb-6'>
          <div>
            <h1 className='leadig text-darker font-bold text-4xl md:text-6xl'>
              We Design Impactful Digital
              <span className='text-primary'>
                Products
              </span>
            </h1>

            <p className='mt-6 mb-4 md:text-xl'>
              Help find solutions with intitutive 
              and in accordance with client business 
              goals. we provide a high-quality services.
            </p>

            <div>
                <Link to="/plans-pricing">
                  <button 
                      className="px-6 py-3 text-sm             
                      font-semibold rounded-full border 
                      border-purple-200 bg-primary text-white"
                  >
                    Get Started
                  </button>
                </Link>              
            </div>
          </div>
        </div>

        <div className='heroimage xl:flex-1'>
          <img src={heroimage} alt="hero image" className='h-auto'/>
        </div>
      </section>

      <section className='my-10 px-8 lg:px-32 projects p-20'>
        <div className='block md:grid grid-cols-3 gap-4'>

            <div 
                data-aos="fade-up"
                className='flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={completedicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-4'>
                        Completed Projects
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        100 +
                    </h4>
                </div>
            </div>

            <div 
                data-aos="fade-up"
                className='my-12 md:my-0 flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={ratingicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-4'>
                        Customer Satisfaction
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        100 + Clients
                    </h4>
                </div>
            </div>

            <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                className='flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={timelineicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-3'>
                        Years in Business
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        2 years
                    </h4>
                </div>
            </div>

        </div>
      </section>

      <section 
        className='mt-8 px-8 lg:px-32 services py-16' 
        id="services"
      >
          
          <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              className='w-auto md:w-96'            
          >
              <p className='text-primary font-semibold  mb-2 uppercase'>
                  WHAT WE DO
              </p>
              
              <p className='font-bold text-xl'>
                  We provide the perfect solution to
                  your business growth
              </p>
          </div>

          <section 
              data-aos="fade-up"
              data-aos-duration="3000"
              className='mt-20 md:grid grid-cols-3 gap-4'
          >

            <div>
                <div className='mb-2'>
                    <img 
                        src={activityicon} 
                        alt="activity icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Grow Your Business
                </h6>

                <p className='text-sm'>
                    We help identify the best ways
                    to improve your business
                </p>
            </div>

            <div className='md:my-0 my-14'>
                <div className='mb-2'>
                    <img 
                        src={hearticon} 
                        alt="heart icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Improve brand loyalty
                </h6>

                <p className='text-sm'>
                    We help identify the best ways
                    to improve your business
                </p>
            </div>

            <div>
                <div className='mb-2'>
                    <img 
                        src={workicon} 
                        alt="work icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Improve Business Model
                </h6>

                <p className='text-sm'>
                    We help identify the best ways
                    to improve your business
                </p>
            </div>

          </section>

          <section             
              className='mt-24'            
          >
              <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className='flex justify-between items-center text-sm'
              >
                  <p className='text-darker text-xl font-semibold 
                  mb-2 uppercase'>
                      How it works
                  </p>  

                  <Link to="/products">
                      <button className='underline decoration-solid hover:no-underline'>
                          See pricing <span>
                          <i class="fa-solid fa-arrow-right"></i>    
                          </span>    
                      </button>  
                  </Link>                                             
              </div>

              <section 
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className='md:grid grid-cols-3 gap-4 mt-8'
              >

                  <div>
                      <div className=''>
                          <i className="fa-2x text-primary
                          p-4 fas fa-2x fa-save"></i>
                      </div>

                      <div>
                          <h6 className='mb-1 mt-4 font-semibold text-lg'>
                              Submit a topic
                          </h6>

                          <p className='text-sm'>
                              We get basic details on your desired 
                              topic and assign it an experienced writer. 
                          </p>
                      </div>
                  </div>

                  <div className='md:my-0 my-14'>
                      <div className=''>
                          <i className="
                          text-primary p-4 fa-2x
                          fa-solid fa-file-word"></i>
                      </div>

                      <div>
                          <h6 className='mb-1 mt-4 font-semibold text-lg'>
                              Writing
                          </h6>

                          <p className='text-sm'>
                              After your writer has researched and 
                              written your content, we deliver the 
                              final product to you.
                              We deliver a minimum of 4 articles each month. 
                          </p>
                      </div>
                  </div>

                  <div>
                      <div className=''>
                          <i className="text-primary p-4 fa-2x 
                          fa-solid fa-file-circle-check"></i>                        
                      </div>

                      <div>
                          <h6 className='mb-1 mt-4 font-semibold text-lg'>
                              Unlimited Revision
                          </h6>

                          <p className='text-sm'>
                              We offer unlimited revisions to make sure you are satisfied with the final content we have writtens
                          </p>
                      </div>
                  </div>

              </section>
          </section>

      </section>

      <section 
        data-aos="fade-up"
        data-aos-duration="1000"
        className='mt-20 text-center py-6'
      >

          <div className="px-8 md:px-0 md:w-2/4 mx-auto">
              <div className=''>
                  <p className='text-primary font-semibold  mb-2 uppercase'>
                      Subscribe
                  </p>
                  
                  <p className='font-bold text-xl'>
                      Subscribe to Get the Latest News
                      About us
                  </p>

                  <p className='text-xs'>
                      Please drop your e-mail below to 
                      get daily update about what we do
                  </p>

                  <div className='mt-6 flex justify-center items-center'>
                      <form>
                          <input
                              type="text"
                              placeholder="Enter Your Email Address"
                              className='py-2 px-4 rounded-xl border
                              border-darker w-full'
                          />
                      </form>
                  </div>
              </div>
          </div>

      </section>

      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
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
      }
    }
  }
`;
