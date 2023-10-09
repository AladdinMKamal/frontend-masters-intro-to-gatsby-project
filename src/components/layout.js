import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import { Seo } from '../components/seo';

export default function Layout({
    children,
    path = false,
    title = false,
    image = false,
    description = false
}) {
    const data = useStaticQuery(graphql`
    query GetSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }      
    `);

    const meta = data?.site?.siteMetadata ?? {};

    return (
        <>
            <Seo
                path={path}
                title={title}
                image={image}
                description={description}
            />
            <header style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}