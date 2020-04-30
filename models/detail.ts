export interface Symptom {
  date: string
  description: string
}

export interface ActionHistory {
  title?: string
  description: string
}

export interface DetailInfo {
  date: String
  residence: String
  age: String
  gender: String
}

export interface Detail {
  step: Number
  info: DetailInfo
  symptoms: Symptom[]
  actionHistories: ActionHistory[]
}
