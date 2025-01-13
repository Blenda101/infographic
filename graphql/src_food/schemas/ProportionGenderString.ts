import { Field, ID, ObjectType } from 'type-graphql';
import ProportionData from './PrportionData';
@ObjectType()
export default class ProportionGenderString {
  @Field()
  maleData: String;
  @Field()
  femaleData: string;
}
