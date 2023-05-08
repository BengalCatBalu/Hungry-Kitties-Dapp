const calculatePoints = (donated, number_of_hungry_kitties, extra_points) => {
    const points = donated * 10 + number_of_hungry_kitties * 5 + extra_points * 2;
    return points;
}

export default calculatePoints;