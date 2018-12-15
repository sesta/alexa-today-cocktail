import { Context, handler, Request, RequestBody } from 'alexa-sdk'

import { getCocktail } from './cocktail'

const APP_ID: string = undefined

export const handle = (event: RequestBody<Request>, context: Context): void => {
  const alexa = handler(event, context)
  alexa.appId = APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers: {[key: string]: () => void} = {
  'LaunchRequest'(): void {
    const cocktail = getCocktail()
    const message = `今日のオススメは${cocktail}です`

    // tslint:disable-next-line:no-invalid-this
    this.emit(':tellWithCard', message)
  },
  'AMAZON.HelpIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':ask', 'ヘルプのメッセージが入るよ', 'どうしますか？')
  },
  'AMAZON.CancelIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':tell', 'さようなら')
  },
  'AMAZON.StopIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':tell', 'さようなら')
  },
  'SessionEndedRequest'(): void {
    // Nothing to do
  }
}
