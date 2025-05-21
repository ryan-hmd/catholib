import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import Address from './address.js'
import Parish from './parish.js'

export default class Diocese extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare contactId: number

    @column()
    declare addressId: number

    @belongsTo(() => Contact)
    declare contact: BelongsTo<typeof Contact>

    @belongsTo(() => Address)
    declare address: BelongsTo<typeof Address>

    @hasMany(() => Parish)
    declare parishes: HasMany<typeof Parish>
}
