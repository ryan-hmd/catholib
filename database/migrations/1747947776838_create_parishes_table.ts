import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'parishes'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name')
            table.integer('contact_id').unsigned().references('contacts.id')
            table.integer('address_id').unsigned().references('addresses.id')
            table.integer('diocese_id').unsigned().references('dioceses.id')
            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
