import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ProjectsPageTemplate = ({
    image,
    title,
    main,
    projects
}) => {
    console.log('projects', projects);
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
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <Projects projects={projects} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
ProjectsPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
    projects: PropTypes.shape({
        preview: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        images: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        ),
        text: PropTypes.string
    }),
};
const ProjectsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ProjectsPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                main={frontmatter.main}
                projects={frontmatter.projects}
            />
        </Layout>
    );
};
ProjectsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};
export default ProjectsPage;

export const ProjectsPageQuery = graphql`
query ProjectsPage($id: String!) {
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
            projects {
                preview {
                   childImageSharp {
                        gatsbyImageData(width: 150, quality: 80, layout: CONSTRAINED)
                    }
                }
                images {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                },
                text
            }
        }
    }
}`;