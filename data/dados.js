export const DATA = [
  { id: 1, name: "Abajur", image: require("../assets/images/01-tablelamps.png") },
  { id: 2, name: "Lâmpada de teto", image: require("../assets/images/02-ceilinglamps.png") },
  { id: 3, name: "Arandela", image: require("../assets/images/03-sconces.png") },
  { id: 4, name: "Luminária de chão", image: require("../assets/images/04-floorlamps.png") },
  { id: 5, name: "Lightdecor", image: require("../assets/images/05-lightdecor.png") },
  { id: 6, name: "Arandela", image: require("../assets/images/06-garlands.png") },
];

export const getProduct = (id) => {
  return DATA.find((product) => product.id == id);
};
