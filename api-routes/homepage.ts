import { client } from '@/sanity/lib/client'

const getHomepage = async () => {
  return await client.fetch(`*[_type == "homepage"][0]`)
}

export { getHomepage }
