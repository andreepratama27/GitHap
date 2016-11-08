@extends ('layout.base')

@section('title')
  GitHap - Cari repository
@endsection

@section('styles')
  <link rel="stylesheet" href="{!! asset('css/app.css') !!}">
@endsection

@section('contents')
  <div id="container"></div>
@endsection

@section('scripts')
    <!-- <script src="{!! asset('js/githap.js') !!}"></script> -->
    <script src="https://young-wildwood-98581.herokuapp.com/js/githap.js"></script>
@endsection
