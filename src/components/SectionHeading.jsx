export default function SectionHeading({ eyebrow, title, description, titleId }) {
  return (
    <div className="section-heading reveal">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="section-heading__body">
        <h1 id={titleId}>{title}</h1>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  )
}