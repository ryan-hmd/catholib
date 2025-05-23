import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'profils'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('contact_id').unsigned().references('contacts.id')
            table.integer('address_id').unsigned().references('addresses.id')
            table.integer('parish_id').unsigned().references('parishes.id')
            table.string('first_name')
            table.string('last_name')
            table.string('birth_name')
            table.string('gender')
            table.timestamp('birthdate')
            table.string('birthplace')
            table.string('role_id').unsigned().references('roles.id')
            table.boolean('eula')
            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
