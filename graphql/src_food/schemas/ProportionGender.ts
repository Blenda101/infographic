import { Field, ID, ObjectType } from 'type-graphql';
import ProportionData from './PrportionData';
@ObjectType()
export default class ProportionGenderData {
  @Field(type => [ProportionData])
  maleData: [ProportionData]
  @Field(type => [ProportionData])
  femaleData: [ProportionData]
}
