import { SignUpController } from './signup'

describe('SignUpController', () => {
  it('Should SignUpController returns statusCode 400 if no email is provided', async () => {
    const sut = new SignUpController()
    const promise = await sut.handle({
      body: {
        password: 'any_password',
        name: 'any_name'
      }
    })
    expect(promise).toEqual({
      statusCode: 400,
      body: new Error('No email was provided')
    })
  })

  it('Should SignUpController returns statusCode 400 if no name is provided', async () => {
    const sut = new SignUpController()
    const promise = await sut.handle({
      body: {
        password: 'any_password',
        email: 'any_email'
      }
    })
    expect(promise).toEqual({
      statusCode: 400,
      body: new Error('No name was provided')
    })
  })
})
