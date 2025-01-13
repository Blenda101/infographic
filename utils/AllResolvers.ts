import FoodResolver from '../graphql/src_food/resolvers/FoodResolver';
import InfoDeathResolver from '../graphql/src_food/resolvers/InfoDeathResolver';
import CancerResolver from '../graphql/src_food/resolvers/CancerResolver';
import AllCancerResolver from '../graphql/src_food/resolvers/NewAllCancerResolver';

export default function getAllResolvers() {
  return [FoodResolver, InfoDeathResolver, CancerResolver, AllCancerResolver];
}
