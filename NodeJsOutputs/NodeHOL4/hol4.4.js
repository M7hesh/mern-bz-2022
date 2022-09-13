const areaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};

const circumferenceOfCircle = (radius) => {
  return 2 * Math.PI * radius;
};

module.exports = { areaOfCircle, circumferenceOfCircle };
