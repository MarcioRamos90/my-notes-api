export class MissingParamError extends Error {
  constructor (param: string) {
    super(`No ${param} was provided`)
    this.name = 'MissingParamError'
  }
}
