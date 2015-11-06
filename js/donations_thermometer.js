"use strict";
(function($){
  Drupal.behaviors.donations_thermometer = {
    attach: function(context, settings) {
      var BLOCK_ID = Drupal.settings.donations_thermometer.block_number;
      var ORIENTATION = Drupal.settings.donations_thermometer.orientation;
      var PERCENTAGE = Drupal.settings.donations_thermometer.percent;

      $.gauge = {

        goalHeight : 0,
        goalWidth : 0,
        progressMeter : new Object(),

        init : function() {
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          // this.resetValue();
          // setTimeout(this.animateGauge(), 10000);
        },

        resetValue : function() {
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          if(ORIENTATION === 'vertical'){
            this.progressMeter = $('#donations_thermometer-' + BLOCK_ID + ' .current-value');
            this.goalHeight = this.progressMeter.outerWidth();
            this.progressMeter.css('height', 0);
          }
          else if (ORIENTATION === 'horizontal') {
            this.progressMeter = $('#donations_thermometer-' + BLOCK_ID + ' .current-value');
            this.goalWidth = this.progressMeter.outerHeight();
            this.progressMeter.css('width', 0);
          }
        },

        animateGauge : function(){
          if (!$('#donations_thermometer-' + BLOCK_ID)) {
            return false;
          }
          if(ORIENTATION === 'vertical'){
            var currHeight = this.progressMeter.outerHeight();

            if (currHeight < this.goalHeight){
              var interval = Math.ceil((this.goalHeight - currHeight) / 10);
              this.progressMeter.css('height', (currHeight + interval) );
              setTimeout("jQuery.gauge.animateGauge()",30);
            }
          }
          else if (ORIENTATION === 'horizontal') {
            var currWidth = this.progressMeter.outerWidth();

            if (currWidth < this.goalWidth){
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
