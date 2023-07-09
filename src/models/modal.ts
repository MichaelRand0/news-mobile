export type ContentType = {
  type: 'SUCCESS' | 'ERROR' | 'MESSAGE' | 'LOADING'
  message?: string
  timeout?: number
} | null
