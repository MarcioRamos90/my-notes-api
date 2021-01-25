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
})
