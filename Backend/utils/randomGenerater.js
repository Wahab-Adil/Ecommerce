export default function () {
  const randomTxt = Math.random().toString(36).substring(7).toLocaleLowerCase();
  const randomNum = Math.floor(1000 + Math.random() * 90000);
  return randomTxt + randomNum;
}
