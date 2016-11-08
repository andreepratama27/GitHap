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
    <script src="{!! secure_asset('js/githap.js') !!}"></script>
@endsection
