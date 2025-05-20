import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'

export default class Address extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare housenumber: string

    @column()
    declare street: string

    @column()
    declare zipcode: string

    @column()
    declare city: string

    @column()
    declare country: string

    @column()
    declare latitude: number

    @column()
    declare longitude: number

    @belongsTo(() => Contact)
    declare contact: BelongsTo<typeof Contact>
}
