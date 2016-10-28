@extends('base')

@section('title')
  Laravel React
@endsection

@section('styles')
  <link rel="stylesheet" href="{!! url('css/app.css') !!}">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css">
@endsection

@section('content')
  <div id="container"></div>
@endsection

@section('scripts')
  <script src="{!! url('js/all.js') !!}"></script>
@endsection
