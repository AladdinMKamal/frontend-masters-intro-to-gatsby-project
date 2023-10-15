import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import '../styles/global.css'
import { Seo } from '../components/seo';
import { header, content } from '../styles/layout.module.css';

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
            <header className={header}>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main className={content}>{children}</main>
        </>
    )
}