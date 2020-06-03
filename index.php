<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css\style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <title>Document</title>
</head>

<body>
    <nav>
        <div id="logo">
            <a href="#">Les Régions de France</a>
        </div>
    </nav>
    <main>
        <h1>Retrouvez ici les régions de notre France ainsi que leurs chef-lieux</h1>
        <p>Cliquez sur une région et découvrez son chef-lieu</p>
        <div class="map">
            <?php include('images\carte_france.svg') ?>
        </div>
        <div class="info-map">
            <h2>Nom de la région</h2>
        </div>
    </main>
    <script src="js\main.js" type="text/javascript"></script>
</body>

</html>