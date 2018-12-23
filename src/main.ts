import { HandlerInput, Skill, SkillBuilders } from 'ask-sdk'
import { Context, RequestEnvelope, Response, ResponseEnvelope } from 'ask-sdk-model'

import { getCocktail } from './cocktail'

let skill: Skill

export const handler = async(event: RequestEnvelope, context: Context): Promise<ResponseEnvelope> => {
  if (!skill) {
    skill = SkillBuilders.custom()
      .addRequestHandlers(launchRequestHandler)
      .addErrorHandlers(errorHandler)
      .create()
  }

  return skill.invoke(event, context)
}

const launchRequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle(handlerInput: HandlerInput): Response {
    const cocktail = getCocktail()
    const message = `今日のおすすめは「${cocktail.name}」です。${cocktail.description}`

    return handlerInput.responseBuilder
      .speak(message)
      .withSimpleCard(cocktail.name, cocktail.description)
      .getResponse()
  }
}

const errorHandler = {
  canHandle(): boolean {
    return true
  },
  handle(handlerInput: HandlerInput, error: Error): Response {
    console.log(error)

    return handlerInput.responseBuilder
      .speak('申し訳ありません、メンテナンス中ですので時間をおいてお試しください')
      .getResponse()
  }
}
