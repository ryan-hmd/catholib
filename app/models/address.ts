import { BaseModel, column } from '@adonisjs/lucid/orm'
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
}
