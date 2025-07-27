import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BaseEntity {
  @Field(() => ID)
  id: string

  @Field()
  is_active: boolean

  @Field()
  created_at: string

  @Field()
  updated_at: string
}
