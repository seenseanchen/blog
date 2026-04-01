import { getPageContent } from './pageContent'

interface Project {
  title: string
  description: string
}

const projectsData: Project[] = getPageContent('en').projects.entries.map((entry) => ({
  title: entry.title,
  description: entry.summary,
}))

export default projectsData
