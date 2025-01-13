import { Field, ID, ObjectType } from 'type-graphql';
@ObjectType()
export default class ProportionData {
  @Field()
  _id: String;
  @Field()
  totalPopulation: Number;
  @Field()
  totalCount: Number;
  @Field()
  totalCrudeRate: Number;
  @Field()
  weightedAverage: Number;
  @Field()
  percentage: Number;
}
