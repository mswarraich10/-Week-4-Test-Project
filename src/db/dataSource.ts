import { DataSource } from 'typeorm'
import ormconfig from '../../ormconfig'

export const dataSource = new DataSource({
  ...ormconfig,
  type: 'postgres',
  logger: 'simple-console',
})
