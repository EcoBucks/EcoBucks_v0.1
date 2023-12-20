export const currencyFormatted = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

export const calculateCarbonEmissions = (usedCookingOil: number): number => {
  const emissionFactor = 0.5;
  const carbonEmissions = usedCookingOil * emissionFactor;

  return carbonEmissions;
};
