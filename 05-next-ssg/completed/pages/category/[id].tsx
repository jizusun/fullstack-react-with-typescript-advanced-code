import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { categoryPaths } from "../../shared/staticPaths";
import { Post } from "../../shared/types";
import { fetchPosts } from "../../api/category";
import { Section } from "../../components/Section";
import { Loader } from "../../components/Loader";

interface CategoryProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const posts = await fetchPosts(params.id as string);
  return { props: { posts } };
};

export async function getStaticPaths() {
  return { paths: categoryPaths, fallback: true };
}

const Category: FunctionComponent<CategoryProps> = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return <Section posts={posts} title={router.query.id as string} />;
};

export default Category;
