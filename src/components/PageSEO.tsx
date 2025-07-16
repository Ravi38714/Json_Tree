/**
 * @author Suraj Singh Chahar
 * @description SEO component for page metadata
 */

import Head from "next/head";

type PageSEOProps = {
  title: string;
  description: string;
};

export function PageSEO(props: PageSEOProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}
