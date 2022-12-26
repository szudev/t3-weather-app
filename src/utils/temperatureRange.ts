const temperatureRangeColors = (temperature: number | undefined) => {
  if (!temperature) return "text-black dark:text-white";
  if (temperature <= 13) return "text-blue-600";
  if (temperature > 13 && temperature <= 21) return "text-lime-400";
  if (temperature > 21 && temperature <= 29) return "text-amber-400";
  return "text-red-500";
};

export default temperatureRangeColors;
