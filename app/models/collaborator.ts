import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import Profil from './profil.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['authEmail'],
    passwordColumnName: 'password',
})

export default class Collaborator extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare profilId: number

    @column()
    declare authEmail: string

    @column({ serializeAs: null })
    declare password: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Profil)
    declare profil: BelongsTo<typeof Profil>
}
