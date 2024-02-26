<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Issues extends ResourceController
{
    protected $modelName = 'App\Models\Issues';
    protected $format    = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    public function show($id = null)
    {
        return $this->respond($this->model->find($id));
    }

    public function create()
    {
        $form = $this->request->getJSON(true);

        if (!$id = $this->model->insert($form)) {
            return $this->failValidationErrors($this->model->errors());
        }

        $issue = $this->model->find($id);

        return $this->respondCreated(['message' => 'Issue creado correctamente.', $issue]);
    }

    public function update($id = null)
    {
        $form = $this->request->getJSON(true);

        if (empty($form)) {
            return $this->failValidationErrors('Issue inválido para actualizar.');
        }

        if (!$this->model->find($id)) {
            return $this->failNotFound();
        }

        if (!$this->model->update($id, $form)) {
            return $this->failValidationErrors($this->model->errors());
        }

        return $this->respondUpdated([
            'message' => 'Issue actualizado con éxito.',
            'data' => $this->model->find($id)
        ]);
    }

    public function delete($id = null)
    {
        if (!$this->model->find($id)) {
            return $this->failNotFound();
        }

        $this->model->where('id', $id)->delete();

        return $this->respondDeleted([
            'message' => 'Issue eliminado con éxito.'
        ]);
    }
}
