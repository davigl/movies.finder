import Vibrant from 'node-vibrant';

const getDominantColor = async (image) => Vibrant.from(image).getPalette().then((data) => data);

export { getDominantColor };
