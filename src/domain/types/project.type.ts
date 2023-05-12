export type ProjectDetails = {
  key: string
  projectName: string
  description: string[]
  technologies: string[]
  stats: Stats[]
  roles: Role[]
}

export type Stats = {
  increase: string
  description: string
}

export type Role = {
  role: Roles
  description: string
}

export type Roles = 'Front-end' | 'Back-end' | 'Engineering' | 'Mobile'
