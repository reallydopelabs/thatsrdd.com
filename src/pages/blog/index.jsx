import Link from 'next/link'
import { getPosts } from 'lib/posts'
import { Container } from '@/components/Container'
import { ActionLink } from '@/components/ActionLink'

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}

export default function Index({ ...props }) {
  return (
    <>
      <header className="pb-12">
        <Container className="text-center">
          <h1 className="my-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-white md:mt-5 md:max-w-3xl">
            The latest news, thoughts, and ideas from the Really Dope Digital
            team.
          </p>
        </Container>
      </header>

      <Container>
        <div className="mx-auto max-w-3xl">
          <ul>
            {props.posts.map((post) => (
              <li key={post.id} className="block border-y border-zinc-800 py-8">
                <h3 className="mb-4 text-xl font-bold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="my-8">{post.excerpt}</p>

                <ActionLink color="emerald" href={`/blog/${post.slug}`}>
                  Read more
                </ActionLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
