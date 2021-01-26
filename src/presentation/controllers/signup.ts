import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('No email was provided')
      }
    }
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('No name was provided')
      }
    }
    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new Error('No password was provided')
      }
    }
    return null
  }
}
