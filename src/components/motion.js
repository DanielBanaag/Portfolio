export function moveTowardPointer(event) {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (event.pointerType !== 'mouse' || !isFinePointer || prefersReducedMotion) return

  const bounds = event.currentTarget.getBoundingClientRect()
  const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12
  const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.12

  event.currentTarget.style.setProperty('--magnetic-x', `${Math.max(-5, Math.min(5, offsetX))}px`)
  event.currentTarget.style.setProperty('--magnetic-y', `${Math.max(-5, Math.min(5, offsetY))}px`)
}

export function resetMagneticPosition(event) {
  event.currentTarget.style.setProperty('--magnetic-x', '0px')
  event.currentTarget.style.setProperty('--magnetic-y', '0px')
}

export const magneticHandlers = {
  onPointerMove: moveTowardPointer,
  onPointerLeave: resetMagneticPosition,
  onPointerCancel: resetMagneticPosition,
}