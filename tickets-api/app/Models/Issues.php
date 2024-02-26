<?php

namespace App\Models;

use CodeIgniter\Model;
use Faker\Generator;

class Issues extends Model
{
    protected $table            = 'issues';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'title',
        'description',
        'level',
        'closed_on',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at',
    ];

    protected bool $allowEmptyInserts = false;

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        'title' => [
            'label' => 'title',
            'rules' => 'required'
        ],
        'description' => [
            'label' => 'description',
            'rules' => 'required'
        ],
        'level' => [
            'label' => 'level',
            'rules' => 'required'
        ],
    ];
    protected $validationMessages   = [
        'title' => [
            'required' => 'El campo {field} es requerido.'
        ],
        'description' => [
            'required' => 'El campo {field} es requerido.'
        ],
        'level' => [
            'required' => 'El campo {field} es requerido.'
        ],
    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    public function fake(Generator &$faker)
    {
        return [
            'title'  => $faker->words(10, true),
            'description'  => $faker->text(),
            'level'  => $faker->randomElement(['easy', 'medium', 'hard']),
            'created_by'  => $faker->randomDigit(),
            'updated_by'  => $faker->randomDigit(),
            'created_at'  => $faker->dateTimeThisYear()->format('Y-m-d H:i:s'),
            'updated_at'  => $faker->dateTimeThisYear()->format('Y-m-d H:i:s'),
        ];
    }
}
