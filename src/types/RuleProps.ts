export interface RuleProps {
  type: 'required' | 'email' | 'phone'
  message: string
}

export type Rule = RuleProps[]
