export default function textPlainToParagraphs(text) {
  const arrayTexts = text.split('\n');
  return arrayTexts.map((item, key) => <p key={key}>{item}</p>);
}
