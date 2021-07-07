export const formatPrice = (number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((uni) => uni[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["tudo", ...new Set(unique)];
};

export const getValues = (data, type) => {
  let unique = data.map((uni) => uni[type]);
  return unique.filter(function (el, i) {
    return unique.indexOf(el) === i;
  });
};
