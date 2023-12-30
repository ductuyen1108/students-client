export const reduceRating = (reviews: any) => {
  const totalReviews = reviews?.length;
  if (totalReviews === 0) {
    return null;
  }

  const initialSum = {
    accommodation: 0,
    destination: 0,
    meals: 0,
    overall: 0,
    transport: 0,
    valueForMoney: 0,
  };

  const sum = reviews?.reduce((accumulator: any, review: any) => {
    accumulator.accommodation += review.accommodation;
    accumulator.destination += review.destination;
    accumulator.meals += review.meals;
    accumulator.overall += review.overall;
    accumulator.transport += review.transport;
    accumulator.valueForMoney += review.valueForMoney;
    return accumulator;
  }, initialSum);

  const average = {
    accommodation: sum?.accommodation / totalReviews,
    destination: sum?.destination / totalReviews,
    meals: sum?.meals / totalReviews,
    overall: sum?.overall / totalReviews,
    transport: sum?.transport / totalReviews,
    valueForMoney: sum?.valueForMoney / totalReviews,
  };

  return average;
};
