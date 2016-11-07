@extends ('layout.base')

@section('title')
  GitHap - Cari repository
@endsection

@section('styles')
  <link rel="stylesheet" href="{!! url('css/app.css') !!}">
@endsection

@section('contents')
  <div id="container"></div>
@endsection

@section('scripts')
    <script src="{!! url('js/githap.js') !!}"></script>
@endsection
