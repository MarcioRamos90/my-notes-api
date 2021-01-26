import { HttpRequest } from '../protocols/http'
import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http/http-helper'

const fakeRequest = (body): HttpRequest => {
  return { body }
}
interface SutTypes {
  sut: SignUpController
}
const makeSut = (): SutTypes => {
  const sut = new SignUpController()
  return {
    sut
  }
}

describe('SignUpController', () => {
  it('Should SignUpController returns statusCode 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(fakeRequest({
      password: 'any_password',
      name: 'any_name'
    }))
    expect(response).toEqual(badRequest(new MissingParamError('email')))
  })

  it('Should SignUpController returns statusCode 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(fakeRequest({
      password: 'any_password',
      email: 'any_email'
    }))
    expect(response).toEqual(badRequest(new MissingParamError('name')))
  })

  it('Should SignUpController returns statusCode 400 if no password is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(fakeRequest({
      name: 'any_name',
      email: 'any_email'
    }))
    expect(response).toEqual(badRequest(new MissingParamError('password')))
  })
})
