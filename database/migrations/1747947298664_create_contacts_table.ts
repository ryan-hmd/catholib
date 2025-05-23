import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'contacts'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('email')
            table.string('phone')
            // FIXME: définir les champs comme unique, ou définir le couple unique ?
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
