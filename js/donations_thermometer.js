"use strict";
(function($){
  Drupal.behaviors.donations_thermometer = {
    attach: function(context, settings) {
      var BLOCK_ID = Drupal.settings.donations_thermometer.block_number;
      var ORIENTATION = Drupal.settings.donations_thermometer.block_number;

      $.gauge = {

        goalHeight : 0,
        goalWidth : 0,
        progressMeter : new Object(),

        init : function() {
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          console.log('Made it here: ' + BLOCK_ID);
          this.resetValue();
          this.animateGauge();
        },

        resetValue : function() {
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          this.progressMeter = $('#donations_thermometer-' + BLOCK_ID + ' .current-value');
          this.goalHeight = this.progressMeter.outerHeight();
          this.goalWidth = this.progressMeter.outerWidth();
          this.progressMeter.css('height', 0);
        },

        animateGauge : function(){
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          if(ORIENTATION === 'vertical'){
            var currHeight = this.progressMeter.outerHeight();

            if (currHeight < this.goalHeight){
              //animate growth
              var interval = Math.ceil((this.goalHeight - currHeight) / 10);
              this.progressMeter.css('height', (currHeight + interval) );
              setTimeout("jQuery.gauge.animateGauge()",30);
            }
          }
          else if (ORIENTATION === 'horizontal') {
            var currWidth = this.progressMeter.outerWidth();

            if (currWidth < this.goalWidth){
              //animate growth
              var interval = Math.ceil((this.goalWidth - currWidth) / 10);
              this.progressMeter.css('width', (currWidth + interval) );
              setTimeout("jQuery.gauge.animateGauge()",30);
            }
          }
        }
      };

      $.gauge.init();
    }

  };
})(jQuery);
