<template>
<div class="content-header">
     <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m0 text-dark">Usuario</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
      <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Usuario</h1>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="content container-fluid">
            <div class="card">
                <div class="card-header">
                    <div class="card-tools">
                        <template >
                            <router-link class="btn btn-info btn-sm" :to="'/'">
                                <i class="fas fa-plus-square"></i> Nuevo Usuario
                            </router-link>
                        </template>
                    </div>
                </div>
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Criterios de Búsqueda</h3>
                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-md-3 col-form-label">Nombre</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-md-3 col-form-label">Usuario</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-md-3 col-form-label">Correo Electronico</label>
                                                <div class="col-md-9">
                                                    <input type="email" class="form-control" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-md-3 col-form-label">Estado</label>
                                                <div class="col-md-9">
                                                    <el-select  >
                                                        <el-option>
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md-4 offset-4">
                                        <button class="btn btn-flat btn-info btnWidth" >Buscar</button>
                                        <button class="btn btn-flat btn-default btnWidth" >Limpiar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Bandeja de Resultados</h3>
                            </div>
                            <div class="card-body table-responsive">
                                <template >
                                    <table class="table table-hover table-head-fixed text-nowrap projects">
                                        <thead>
                                            <tr>
                                                <th>Fotografia</th>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                                <th>Usuario</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td>
                                                    <template >
                                                        <li class="user-block">
                                                            <img src="/img/avatar.png"  class="profile-avatar-img img-fluid img-circle">
                                                        </li>
                                                    </template>
                                                    <template v-else>
                                                        <li class="user-block">
                                                            <img  class="profile-avatar-img img-fluid img-circle">
                                                        </li>
                                                    </template>
                                                </td>
                                                <td ></td>
                                                <td ></td>
                                                <td ></td>
                                                <td>
                                                    <template >
                                                        <span class="badge badge-success" ></span>
                                                    </template>
                                                    <template >
                                                        <span class="badge badge-danger" ></span>
                                                    </template>
                                                </td>
                                                <td>
                                                    <template >
                                                        <router-link class="btn btn-flat btn-primary btn-sm" :to="'/'">
                                                            <i class="fas fa-folder"></i> Ver
                                                        </router-link>
                                                    </template>
                                                    <template >
                                                        <template >
                                                            <router-link class="btn btn-flat btn-info btn-sm" :to="'/'">
                                                                <i class="fas fa-pencil-alt"></i> Editar
                                                            </router-link>
                                                        </template>
                                                        <template >
                                                            <router-link class="btn btn-flat btn-success btn-sm" :to="'/'">
                                                                <i class="fas fa-key"></i> Permiso
                                                            </router-link>
                                                        </template>
                                                        <template>
                                                            <button class="btn btn-flat btn-danger btn-sm" >
                                                                <i class="fas fa-trash"></i> Desactivar
                                                            </button>
                                                        </template>
                                                    </template>
                                                    <template >
                                                        <template >
                                                            <button class="btn btn-flat btn-danger btn-sm" >
                                                                <i class="fas fa-check"></i> Activar
                                                            </button>
                                                        </template>
                                                    </template>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="card-footer clearfix">
                                        <ul class="pagination pagination-sm m-0 float-right">
                                            <li class="page-item" >
                                                <a href="#" class="page-link" >Ant</a>
                                            </li>
                                            <li class="page-item" >
                                                <a href="#" class="page-link" >  </a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link" >Post</a>
                                            </li>
                                        </ul>
                                    </div>
                                </template>
                                <template >
                                    <div class="callout callout-info">
                                        <h5>No se encontraron resultados...</h5>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>

</style>