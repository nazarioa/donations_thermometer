  <div class="gauge-<?php print $size ?>">
    <div class="current-value" id="campaign-progress-current" style="height: <?php print $percent; ?>%;">
      <p><?php print $percent; ?>% </p>
    </div>
  </div>
  <p>
    <span class="donations_thermometer-label"><?php print t('Current:'); ?></span>
    <span class="donations_thermometer-amount"><?php print $prefix; ?><?php print $current; ?><?php print $postfix; ?></span>
  </p>
  <p>
    <span class="donations_thermometer-label"><?php print t('Target:'); ?></span>
    <span class="donations_thermometer-amount"><?php print $prefix; ?><?php print $target; ?><?php print $postfix; ?></span>
  </p>
