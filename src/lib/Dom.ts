/**
 *
 */
export const $ = <K extends keyof HTMLElementTagNameMap>(
  selectors: string,
  ctx: Document = document,
): HTMLElementTagNameMap[K] | null => ctx.querySelector(selectors)

/**
 *
 */
export const $$ = <K extends keyof HTMLElementTagNameMap>(
  selectors: string,
  ctx: Document = document,
): NodeListOf<HTMLElementTagNameMap[K]> => ctx.querySelectorAll(selectors)
