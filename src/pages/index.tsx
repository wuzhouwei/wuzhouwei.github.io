import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import ContentFirst from '@site/src/components/ContentFirst'
import ContentSecond from '@site/src/components/ContentSecond'
import Head from '@docusaurus/Head'

export default function Home(): JSX.Element {

  return (
    <>
      <Head>
        <meta name="author" content="wzw" />
        <title>御心狐</title>
      </Head>
      <Layout
        description="Description will go into a meta tag in <head />">
        <div className={styles.adornBg}/>
        <article className={styles.contentWrap}>
          <ContentFirst/>
          <ContentSecond/>
        </article>
      </Layout>
    </>

  );
}
