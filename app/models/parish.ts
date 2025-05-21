import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import Address from './address.js'
import Diocese from './diocese.js'
import Profil from './profil.js'

export default class Parish extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare contactId: number

    @column()
    declare addressId: number

    @column()
    declare dioceseId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Contact)
    declare contact: BelongsTo<typeof Contact>

    @belongsTo(() => Address)
    declare address: BelongsTo<typeof Address>

    @belongsTo(() => Diocese)
    declare diocese: BelongsTo<typeof Diocese>

    @hasMany(() => Profil)
    declare parishioners: HasMany<typeof Profil>
}
