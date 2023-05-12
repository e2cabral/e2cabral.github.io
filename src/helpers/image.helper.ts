import type { Roles } from '@/domain/types/project.type'

import astronaut from '@/assets/img/astronauta.jpg'
import rocket from '@/assets/img/rocket.jpg'
import library from '@/assets/img/library.jpg'
import smartphone from '@/assets/img/smartphone.jpg'

export const getImageByRoleOrDefault = (role: Roles) => {
  switch (role) {
    case 'Back-end':
      return library

    case 'Front-end':
      return astronaut

    case 'Engineering':
      return rocket

    case 'Mobile':
      return smartphone

    default:
      return astronaut
  }
}
