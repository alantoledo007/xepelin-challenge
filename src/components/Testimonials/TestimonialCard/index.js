export default function TestimonialCard({
  avatar,
  fullname,
  job_title,
  onClick,
}) {
  return (
    <a href="#" onClick={onClick}>
      <div>
        <img src={avatar} />
        <div>
          <h5>{fullname}</h5>
          <span>{job_title}</span>
        </div>
      </div>
    </a>
  );
}
