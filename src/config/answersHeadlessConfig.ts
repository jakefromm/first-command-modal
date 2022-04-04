import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: '7a8bbf9f6fb3b05b29db26ca74e96ffe',
  experienceKey: 'first-command-answers',
  locale: 'en',
  sessionTrackingEnabled: true
};