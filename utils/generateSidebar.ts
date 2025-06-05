import { glob } from "glob"
import fm from 'front-matter'
import { readFile } from "node:fs/promises"
const textMap = new Map([
  ['article', '文章列表'],
])
type Item = { text: string, link: string, }
export const generateSidebar = async () => {
  const list = await glob('docs/**/*.md', { nodir: true, ignore: 'docs/index.md', })
  const map = new Map<string, Item[]>()
  const orderMap = new Map<string, number>()
  for (const path of list) {
    const content = (await readFile(path)).toString()
    const { attributes: { title, createtime } } = fm<{ title: string, createtime: number }>(content)
    const pathArray = path.split('/')
    pathArray.shift()
    const fileName = pathArray.pop() ?? ''//?.replace('.md', '') 
    const groupName = pathArray.join('/')
    if (!map.has(groupName)) map.set(groupName, [])
    const list = map.get(groupName) ?? []
    const link = '/' + groupName + '/' + fileName
    list.push({ text: title, link })
    orderMap.set(link, createtime)
  }

  const groupList = ['article', 'bug']

  const result: { text: string, items: Item[] }[] = []
  for (let i = 0; i < groupList.length; i++) {
    const groupName = groupList[i]
    const list = (map.get(groupName) ?? []).toSorted((a, b) => {
      return (orderMap.get(a.link) ?? 0) - (orderMap.get(b.link) ?? 0)
    })

    const object: { text: string, items: Item[] } = {
      text: textMap.get(groupName) ?? groupName,
      items: []
    }
    for (let j = 0; j < list.length; j++) {
      const item = list[j]
      object.items.push(item)
    }
    result.push(object)
  }
  console.log(JSON.stringify(result, null, 4))
  return result
}
