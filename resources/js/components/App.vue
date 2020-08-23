<template>


  <div>

    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- /.navbar -->

     <!-- Main Sidebar Container -->
    <Sidebar></Sidebar>
    
     <!-- Content Wrapper. Contains page content -->
     <Content></Content>
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
    components: { Navbar, Sidebar, Content, Footer }
}
</script>

<style>

</style>