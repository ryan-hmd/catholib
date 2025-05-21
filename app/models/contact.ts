import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Contact extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare email: string

    @column()
    declare phone: string
}
