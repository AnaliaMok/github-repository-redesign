<?php
/**
 * File Name: index.php
 * Description: Main Page
 *
 * @author: Analia Mok
 */

require_once('partials/header.php');
?>

<main class="wrapper">
  <div id="image">
    <img src="social-github.png" alt="github logo">
  </div>
  <div id="content">
    <h1>Analia Mok | GitHub Respositories</h1>
    <div id="filter-bar">
      <?php
        $languages = array('PHP', 'Java', 'C', 'JavaScript', 'HTML', 'CSS');
      ?>
      <select id="language-select">
        <!-- TODO: Change to custom dropdown -->
        <!-- TODO: Still need to add chevron -->
        <?php foreach($languages as $language): ?>
          <option value="<?php echo $language; ?>"><?php echo $language; ?></option>
        <?php endforeach; ?>
      </select>

      <span class="right-items">
        <i class="ion ion-grid"></i>
        <i class="ion ion-navicon"></i>
      </span>

    </div><!-- #filter-bar -->

    <div class="grid">
      <?php
        $temp_title = 'Repository Name';
        $temp_excerpt = 'Pastry tiramisu sweet carrot cake sweet roll. Cupcake
        halvah chocolate bar biscuit jelly beans.';
        $temp_lang = 'PHP';
        $counter = 0;
      ?>

      <?php while($counter < 9): ?>
        <div class="card">
          <h2><?php echo $temp_title; ?></h2>
          <div class="card-content"><?php echo $temp_excerpt; ?></div>
          <div><span class="language"><?php echo $temp_lang ?></span></div>
        </div>
        <?php $counter++; ?>
      <?php endwhile; ?>

    </div>

  </div><!-- #content -->
</main>



<?php require_once('partials/footer.php'); ?>
