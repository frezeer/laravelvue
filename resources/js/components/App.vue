<template>

  <div>
    <!-- Navbar -->
    <Navbar :ruta="ruta" ></Navbar>
    <!-- /.navbar -->

     <!-- Main Sidebar Container -->
    <Sidebar :ruta="ruta" ></Sidebar>
    
     <!-- Content Wrapper. Contains page content -->
     <div class="content-wrapper">
            <transition name="slide-fade" mode="in-out" >
                <router-view></router-view>
            </transition>
     </div>

     <!-- /.content -->

  <Footer></Footer>
  <!-- Content Wrapper. Contains page content -->
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->


  </div>

  
</template>

<script>
  import Navbar  from './plantilla/Navbar'
  import Sidebar from './plantilla/Sidebar'
  import Content from './plantilla/Content'
  import Footer  from './plantilla/Footer'

export default {
    props: ['ruta'],
    components: { Navbar, Sidebar, Content, Footer }
}
</script>

<style>

</style>