import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Diocese from './diocese.js'
import Parish from './parish.js'

export default class Contact extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare email: string

    @column()
    declare phone: string

    @hasOne(() => Diocese)
    declare diocese: HasOne<typeof Diocese>

    @hasOne(() => Parish)
    declare parish: HasOne<typeof Parish>
}
