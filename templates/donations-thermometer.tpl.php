<?php
/**
 * @file
 * Donations Thermometer base output code.
 *
 * Available variables:
 * - $block_id (int): Contains the ID number of this block.
 * - $size (string): Size of the the thermometer used in CSS: 'small', 'large'
 * - $orientation (string): Orientation of the the thermometer used in CSS:
 * 'vertical', 'horizontal'
 * - $inlinecss (string): CSS that contins the size of the thermometer.
 * - $percent (double): percentage of the thermometer.
 * - $goal (double): Thermometer goal.
 * - $current (double): Current thermometer value.
 * - $prefix (string): Prefix to 'Current' and 'Goal'.
 * - $postfix (string): Prefix to 'Current' and 'Goal'.
 *
 * @see template_preprocess_forum_list()
 *
 * @ingroup themeable
 */
 ?>

<div id="donations_thermometer-<?php print $block_id ?>">
  <div class="gauge <?php print $size ?> <?php print $orientation ?> <?php print $color ?>">
    <span class="current-value" style="<?php print $inlinecss ?>">
      <span><?php print $percent; ?>% </span>
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
