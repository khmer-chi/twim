import { glob } from "glob"
import { readFile } from "node:fs/promises"
import matter from 'gray-matter';
export const generatePostList = async () => {
  const pathList = (await glob('docs/**/*.md', { nodir: true, ignore: 'docs/index.md', }))
  const result = []
  for (let i = 0; i < pathList.length; i++) {
    const path = pathList[i]
    const { data: { title, createtime, description }, content } = matter((await readFile(path)).toString())
    result.push({
      title,
      createtime: createtime.toString().replace(
        /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/,
        "$1年$2月$3日$4點$5分"
      ),
      content: (description || content.trim()).substring(0, 50) + "...",
      path: path.replace(/docs\/([\d\D]+)\.md/, '$1.html'),
    })
  }


  const postList = result.toSorted((b, a) => {
    return a.createtime - b.createtime
  })
  return { postList }
}