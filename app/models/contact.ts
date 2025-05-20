import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Address from './address.js'

export default class Contact extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare addressId: string

    @column()
    declare email: string

    @column()
    declare phone: string

    @hasOne(() => Address)
    declare address: HasOne<typeof Address>
}
