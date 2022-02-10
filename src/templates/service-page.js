import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ServicePageTemplate = ({
    image,
    title,
    main
}) => {
    console.log('main', main)
    const heroImage = getImage(image) || image;

    return (
        <div className="content min-page-height">
            <FullWidthImage img={heroImage} title={title} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="columns">
                                    <div className="column is-7">
                                        <h4 className="has-text-weight-semibold is-size-3">
                                            {main.heading}
                                        </h4>
                                        <p>{main.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ServicePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
    })
};

const ServicePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ServicePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                main={frontmatter.main}
            />
        </Layout>
    );
};

ServicePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ServicePage;

export const servicePageQuery = graphql`
query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            title
            image {
                childImageSharp {
                    gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
            }
            main {
                heading
                description
            }
        }
    }
}`;