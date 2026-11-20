export default function CharacterIllustration({ pose, className = '' }) {
  const isSeated = pose === 'desk' || pose === 'laptop'

  return (
    <div
      className={`character-spot character-spot--${pose} reveal ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`character character--${pose}`}
        viewBox="0 0 260 300"
        focusable="false"
      >
        <ellipse className="character__ground" cx="130" cy="281" rx="68" ry="8" />
        {isSeated && (
          <g className="character__chair">
            <path d="M91 145h78v55H91z" />
            <path d="M101 200v58m58-58v58m-58-20h58" />
          </g>
        )}

        <g className="character__figure">
          {isSeated ? (
            <g className="character__legs character__legs--seated">
              <path d="M104 179h54l9 39h-42l-19 34H83l22-47z" />
              <path d="M150 185h18l15 38 31 16-8 14-44-13-16-36z" />
              <path className="character__shoe" d="M82 246h31q8 0 11 8l2 7H78q-7 0-5-7 1-5 9-8zm128 2 22 11q6 3 4 9h-49q-8 0-9-6l-1-4 23-10z" />
            </g>
          ) : (
            <g className="character__legs">
              <path d="m104 184-5 67 18 2 14-62 7 62 19-1 5-68z" />
              <path className="character__shoe" d="M97 247h21q7 0 9 7l1 7H92q-7 0-6-6 1-5 11-8zm37 0h19q8 0 10 7l1 7h-37q-7 0-6-6 1-5 13-8z" />
            </g>
          )}

          <path className="character__torso" d="M105 107q25-12 51 0l17 77q-40 20-91 0z" />
          <path className="character__collar" d="m116 105 14 15 14-15 8 7-11 20h-22l-11-20z" />
          <path className="character__shirt-detail" d="M130 125v47" />
          <circle className="character__button" cx="130" cy="145" r="2" />
          <circle className="character__button" cx="130" cy="158" r="2" />

          {pose === 'wave' && (
            <>
              <g className="character__arm character__arm--wave">
                <path className="character__sleeve" d="M106 125q-18 2-27 19l-7-25 16-21 17 10z" />
                <path className="character__skin-stroke" d="m80 118-2-29 5-27q1-6 5-4 4 1 2 7l-1 12 6-16q2-5 6-3 4 2 1 7l-5 15 8-11q4-4 7 0 2 3-2 8l-11 20-3 22" />
              </g>
              <path className="character__sleeve" d="M158 124q17 3 24 20l-5 18q-12-8-28-10z" />
              <path className="character__skin-stroke" d="m175 153 13 14" />
            </>
          )}

          {pose === 'point' && (
            <>
              <path className="character__sleeve" d="M106 124q-16 0-22 14l-2 15 23 5 15-20z" />
              <path className="character__skin-stroke" d="m87 145-24-2-24 2q-6 0-6-4 0-4 6-4l18-1-13-5q-5-2-3-6 2-4 7-2l18 7 22-1" />
              <path className="character__sleeve" d="M158 124q17 3 24 20l-5 18q-12-8-28-10z" />
              <path className="character__skin-stroke" d="m175 153 13 14" />
            </>
          )}

          {pose === 'certificate' && (
            <>
              <path className="character__sleeve" d="M106 124q-15 2-19 16l2 16 24-2 10-19z" />
              <path className="character__skin-stroke" d="m93 149 17-8" />
              <path className="character__sleeve" d="M158 124q16 3 20 18l-5 16-23-4-10-19z" />
              <path className="character__skin-stroke" d="m171 151-18-9" />
              <g className="character__certificate">
                <rect x="99" y="126" width="64" height="45" rx="2" />
                <path d="M108 137h45m-45 8h29" />
                <circle cx="145" cy="157" r="6" />
                <path d="m142 162-2 9 5-3 5 3-2-10" />
              </g>
            </>
          )}

          {pose === 'envelope' && (
            <>
              <path className="character__sleeve" d="M106 124q-15 2-20 17l3 15 24-2 11-20z" />
              <path className="character__skin-stroke" d="m95 151 21-4" />
              <path className="character__sleeve" d="M158 124q17 3 20 18l-5 16-23-4-10-19z" />
              <path className="character__skin-stroke" d="m173 153 9 2" />
              <g className="character__envelope">
                <rect x="145" y="137" width="54" height="36" rx="2" />
                <path d="m147 140 25 20 25-20" />
              </g>
            </>
          )}

          {isSeated && (
            <>
              <path className="character__sleeve" d="M106 125q-15 3-18 20l4 15 20-5 9-18zm52 0q16 3 19 20l-4 15-20-5-9-18z" />
              <path className="character__skin-stroke" d="m94 153 20 21m69-21-19 21" />
            </>
          )}

          <path className="character__neck" d="M119 88h22v24h-22z" />
          <ellipse className="character__face" cx="130" cy="65" rx="29" ry="34" />
          <path className="character__hair" d="M101 65q-5-37 25-42 33-4 37 29l-8 13-7-19q-17 10-37 4l-6 21z" />
          <path className="character__hair-side" d="M102 63q-4 16 5 24l-3 16q-13-7-13-24 0-13 11-16zm55-3q10 10 6 24l-7 12-4-20z" />
          <path className="character__ear" d="M100 67q-9-4-8 6 1 7 9 7m58-13q9-4 8 6-1 7-9 7" />
          <g className="character__eyes">
            <ellipse cx="119" cy="67" rx="2.2" ry="3" />
            <ellipse cx="141" cy="67" rx="2.2" ry="3" />
          </g>
          <path className="character__brow" d="m114 59 9-1m14 0 9 1" />
          <path className="character__smile" d="M124 82q6 5 12 0" />
        </g>

        {isSeated && (
          <g className="character__desk">
            <path d="M28 199h204l-8 10H36z" />
            <path d="M47 209v48m166-48v48" />
            <path className="character__laptop" d="M101 151h62v43h-62z" />
            <path className="character__laptop-screen" d="M107 157h50v31h-50z" />
            <path className="character__laptop-base" d="m95 194h74l12 6H84z" />
            <path className="character__laptop-mark" d="M126 172h12m-6-6v12" />
          </g>
        )}
      </svg>
    </div>
  )
}