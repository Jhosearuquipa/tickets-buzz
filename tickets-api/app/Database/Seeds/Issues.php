<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Test\Fabricator;

class Issues extends Seeder
{
    public function run()
    {
        $fabricator = new Fabricator(\App\Models\Issues::class);
        $fabricator->create(10);
    }
}