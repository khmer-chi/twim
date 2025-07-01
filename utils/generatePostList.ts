import { glob } from "glob"
import { readFile } from "node:fs/promises"
import matter from 'gray-matter';
export const generatePostList = async () => {
  const pathList = (await glob('docs/**/*.md', { nodir: true, ignore: 'docs/index.md', }))
  const result = []
  for (let i = 0; i < pathList.length; i++) {
    const path = pathList[i]
    const { data: { title, createtime }, content } = matter((await readFile(path)).toString())
    result.push({ title, createtime, content, path })
  }


  const postList = result.toSorted((b, a) => {
    return a.createtime - b.createtime
  })
  return { postList }
}