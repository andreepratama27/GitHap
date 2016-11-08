@extends ('layout.base')

@section('title')
  GitHap - Cari repository
@endsection

@section('styles')
  <link rel="stylesheet" href="{!! secure_asset('css/app.css') !!}">
@endsection

@section('contents')
  <div id="container"></div>
@endsection

@section('scripts')
    <script src="{!! secure_asset('js/githap.js') !!}"></script>
@endsection
