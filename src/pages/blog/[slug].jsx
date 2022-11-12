import { Container } from "@/components/Container"
import { getSinglePost, getPosts } from "lib/posts"

// PostPage page component
export default function ({ ...props }) {
  // Render post title and content in the page from props
  return (
    <>
      <header className="mb-12 pb-12 border-b border-zinc-800">
        <Container className="text-center">
          <h1 className="my-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {props.post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-white md:mt-5 md:max-w-3xl">
            {props.post.excerpt}
          </p>
        </Container>
      </header>

      <Container>
        <div className="mx-auto prose prose-lg prose-invert" dangerouslySetInnerHTML={{ __html: props.post.html }} />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}
