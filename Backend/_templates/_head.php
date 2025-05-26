<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Santhosh">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Login to MilkMate</title>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>MilkMate</title>
    <?php
    $cssPath = $_SERVER['DOCUMENT_ROOT'] . '/React_PHP/MilkMate/Backend/css/' . basename($_SERVER['PHP_SELF'], ".php") . ".css";
    if (file_exists($cssPath)) { ?>
        <link href="/React_PHP/MilkMate/Backend/css/<?= basename($_SERVER['PHP_SELF'], ".php") ?>.css" rel="stylesheet">
    <?php } ?>


</head>