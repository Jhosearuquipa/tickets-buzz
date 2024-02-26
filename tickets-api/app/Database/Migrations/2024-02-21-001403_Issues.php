<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class Issues extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned' => false,
                'auto_increment'    => True
            ],
            'title'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200
            ],
            'description'    => [
                'type'          => 'TEXT',
                'constraint'    => 11,
            ],
            'level'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 25,
            ],
            'created_by'    => [
                'type'          => 'INT',
                'constraint'    => 11,
            ],
            'created_at'    => [
                'type'    => 'TIMESTAMP',
                'default' => new RawSql('CURRENT_TIMESTAMP'),
            ],
            'updated_by'    => [
                'type'          => 'INT',
                'constraint'    => 11,
            ],
            'updated_at'    => [
                'type'    => 'TIMESTAMP',
                'default' => new RawSql('CURRENT_TIMESTAMP'),
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('issues', true);
    }

    public function down()
    {
        $this->forge->dropTable('issues');
    }
}
