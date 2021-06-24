<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Universitas Teknokrat Indonesia</title>
	<link rel="stylesheet" href="{{ url('app-assets/fonts') }}/feather-font/css/iconfont.css">
	<link rel="stylesheet" href="{{ url('app-assets/vendors') }}/core/core.css">
	<link rel="stylesheet" href="{{ url('app-assets/vendors') }}/bootstrap-datepicker/bootstrap-datepicker.min.css">
	<link rel="stylesheet" href="{{ url('app-assets/vendors') }}/flag-icon-css/css/flag-icon.min.css">
	<link rel="stylesheet" href="{{ url('app-assets/vendors') }}/datatables.net-bs4/dataTables.bootstrap4.css">
	<link rel="stylesheet" href="{{ url('app-assets/vendors') }}/sweetalert2/sweetalert2.min.css">
	<link rel="stylesheet" href="{{ url('app-assets/css') }}/demo_2/style.css">
  	<link rel="shortcut icon" href="{{ url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/UNIVERSITASTEKNOKRAT.png/1200px-UNIVERSITASTEKNOKRAT.png') }}" />
	<link rel="stylesheet" href="{{ url('assets/css') }}/costum.css">
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

<div class="main-wrapper">
@include('Frame.sidebar')