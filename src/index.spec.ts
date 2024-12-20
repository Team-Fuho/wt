import WTClient from './index'

// Usage example
async function exampleUsage() {
  // Configuration with multiple options
  const blogQueries = new WTClient({
    endpoint: 'http://localhost:8000/api/graphql/',
    headers: {
      'Custom-Header': 'CustomValue'
    }
  })

  try {
    // List all blogs
    const blogList = await blogQueries.listBlogs()

    // Get preview with token
    const blogPreview = await blogQueries.getBlogPreview(
      'id=62:1tFtcq:ExamplenExamplesSyiGVihtqSJy8qRaNjeRJvIOYxUwxr8your-preview-token'
    )

    // Get live blog by slug
    const liveBlog = await blogQueries.getBlogBySlug(
      'tfh-album-anh-cua-team-fuho-ki-1'
    )

    return { blogList, blogPreview, liveBlog }
  } catch (error) {
    console.error('Blog Queries Error:', error)
    throw error
  }
}

const data = await exampleUsage()

console.log(
  'typesafe iterate test:',
  data.blogList?.items?.flatMap((t) => t?.involved?.map((i) => i?.name))
)

console.log(data.blogList?.items?.map((k) => k?.title))

console.log('tree view:', data, null, 5)
