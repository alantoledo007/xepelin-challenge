import textPlainToParagraphs from '@/utils/textPlainToParagraphs';

export default function TestimonailDetails({ title, stars, text }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <span>{stars}</span>
      </div>
      {textPlainToParagraphs(text)}
    </div>
  );
}
