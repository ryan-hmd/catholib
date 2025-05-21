import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Profil from './profil.js'

export default class Role extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string

    @hasMany(() => Profil)
    declare profiles: HasMany<typeof Profil>
}
