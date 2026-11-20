export default function SectionHeading({ number, eyebrow, title, description, titleId }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span>{number}</span>{eyebrow}</p>
      <div className="section-heading__body">
        <h1 id={titleId}>{title}</h1>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  )
}