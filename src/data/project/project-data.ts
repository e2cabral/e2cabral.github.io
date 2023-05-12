import type { RouteParamValue } from 'vue-router'
import { flueryInnovations, flueryRollout } from '@/data/project/fleury'
import type { ProjectDetails } from '@/domain/types/project.type'
import { cpqi9thGear, cpqiM7consigned } from '@/data/project/cpqi'
import {darwin, doadin} from "@/data/project/iblue";

export default class ProjectData {
  static findAll() {
    return [flueryInnovations, flueryRollout, cpqi9thGear, cpqiM7consigned, doadin, darwin]
  }
  static findByKeyOrDefault(key: string | RouteParamValue[]): ProjectDetails {
    return this.findAll().find((p) => key === p.key) || flueryInnovations
  }
}
