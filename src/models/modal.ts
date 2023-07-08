export type ContentType = {
  type: 'SUCCESS' | 'ERROR' | 'MESSAGE'
  message: string
  timeout?: number
} | null
