import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Diocese from './diocese.js'
import Parish from './parish.js'
import Profil from './profil.js'

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

    @hasOne(() => Diocese)
    declare diocese: HasOne<typeof Diocese>

    @hasOne(() => Parish)
    declare parish: HasOne<typeof Parish>

    @hasMany(() => Profil)
    declare profiles: HasMany<typeof Profil>
}
