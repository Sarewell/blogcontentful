import Card from '@/component/card/card';
import Layout from '@/component/layout/Layout'
import { createClient } from 'contentful'
import Link from 'next/link';

export default function Home({posts}) {
  console.log(posts);
  return (
    <Layout>
  
      <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full max-h-full'>
        {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}
          key={post.sys.id} > 
          <Card 
          img={post.fields.fituredImage.fields.file.url}
          title={post.fields.title} 
          extract={post.fields.extract}
          />
          </Link>
        ))
      }
      </div>
      
    </Layout>
  )}

  export async function getStaticProps( ) {
//1 connect to contentful
const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 recuperer data en cas de success pour le content_type => escciBlog
//je limite a 8 posts
const data = await client.getEntries({
  content_type: 'blogescci',
  order:"sys.createdAt",
  limit: 9,
});

console.log(data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }
}