export type User = {
  avatar_cropped_big_url: string
  avatar_original_url: string
  avatar_url: string
  can_evacuation: boolean
  card_loyalty_barcode_data: null
  card_loyalty_exist: boolean
  cinemas: any[]
  email: string
  game_character_id: null
  grade_sheet_pdf_url: string
  id: number
  phone_city: string
  phone_city_ext: string
  phone_mobile: string
  points_total: number
  position: string
  registered: boolean
  roles: string[]
  unit_head: boolean
  unit_name: string
  user_incoming_likes_count: number
  user_like_status: UserLikeStatus
  user_unit: null
  user_week_incoming_likes_count: number
  username: string
  vacation_days: number
  token: string
} | null

export type UserLikeStatus = {
  description: string
  name: string
  number: string
  range: string
  range_human: string
}
