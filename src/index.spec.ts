import { BlogQueries } from './index'

// Usage example
async function exampleUsage() {
  // Configuration with multiple options
  const blogQueries = new BlogQueries({
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
      'id=62:1tFtcq:yZgGvM8QuYZsSyiGVihtqSJy8qRaNjeRJvIOYxUwxr8your-preview-token'
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

console.log(await exampleUsage(), null, 5)
