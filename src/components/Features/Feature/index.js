export default function Feature({ img, title, description, link }) {
  return (
    <div>
      <a href={link}>
        <img src={img} />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}>Explorar</a>
    </div>
  );
}
