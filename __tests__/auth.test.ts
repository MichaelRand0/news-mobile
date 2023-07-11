import { User } from '~models/user'
import getAsyncUser from 'helpers/getAsyncUser'
import { expectTypeOf } from 'expect-type'

test('getAsyncUser should return user data from localStorage or null', async () => {
  return getAsyncUser().then((data: User) => {
    expectTypeOf(data).toEqualTypeOf<User>()
  })
})
