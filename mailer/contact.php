<?php

if (isset($_REQUEST) && !empty($_REQUEST)) {
  echo (!empty($_POST)) ? 'Daten per POST erhalten' : 'Daten per GET erhalten';

  echo '<pre>';
  echo print_r($_REQUEST);
  echo '</pre>';
  // mail($to);
} else {
  echo 'Keine Daten erhalten.';
}
