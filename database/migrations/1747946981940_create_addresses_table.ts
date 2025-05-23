import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'addresses'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('housenumber')
            table.string('street')
            table.string('zipcode')
            table.string('city')
            table.float('latitude')
            table.float('longitude')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
