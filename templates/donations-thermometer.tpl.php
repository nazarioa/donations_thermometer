<div id="donations_thermometer-<?php print $block_id ?>">
  <div class="gauge <?php print $size ?> <?php print $orientation ?> red">
    <span class="current-value" style="<?php print $inlinecss ?>">
      <!-- <p><?php print $percent; ?>% </p> -->
    </span>
  </div>
  <p>
    <label><?php print t('Current:'); ?></label>
    <span class="donations_thermometer-amount"><?php print $prefix; ?><?php print $current; ?><?php print $postfix; ?></span>
  </p>
  <p>
    <label><?php print t('Goal:'); ?></label>
    <span class="donations_thermometer-amount"><?php print $prefix; ?><?php print $goal; ?><?php print $postfix; ?></span>
  </p>
</div>
