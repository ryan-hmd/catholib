import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import Address from './address.js'
import Parish from './parish.js'
import Role from './role.js'
import Collaborator from './collaborator.js'

export default class Profil extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare contactId: number

    @column()
    declare addressId: number

    @column()
    declare parishId: number

    @column()
    declare firstName: string

    @column()
    declare lastName: string

    @column()
    declare birthName?: string

    @column()
    declare gender?: 'F' | 'M'

    @column.dateTime({ autoCreate: false })
    declare birthdate: DateTime

    @column()
    declare birthplace: string

    @column()
    declare roleId: number

    @column()
    declare eula: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Contact)
    declare contact: BelongsTo<typeof Contact>

    @belongsTo(() => Address)
    declare address: BelongsTo<typeof Address>

    @belongsTo(() => Parish)
    declare parish: BelongsTo<typeof Parish>

    @belongsTo(() => Role)
    declare role: BelongsTo<typeof Role>

    @hasOne(() => Collaborator)
    declare collaborator: HasOne<typeof Collaborator>
}
