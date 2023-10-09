import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

export default function About() {


    return (
        <Layout
            title="About Page"
            description="More information about this site."
        >
            <h1>About Page </h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    );
}