import { User } from '@/types/User'
import { ColumnProps } from '@/types/ColumnProps'
import { PostProps } from '@/types/PostProps'

export interface RootState {
  user: User
  columns: ColumnProps[]
  posts: PostProps[]
}
