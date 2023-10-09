import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

export default function IndexPage() {


    return (
        <Layout>
            <h1>Hello World!</h1>
            <Link to="/about">Go to About</Link>
        </Layout>
    );
}