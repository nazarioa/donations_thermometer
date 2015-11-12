CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Features
 * Requirements
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers



INTRODUCTION
------------

This module generates a "donation thermometer" which shows progress of an
organizations donation.

This is a fork of [sejtraav](https://www.drupal.org/u/sejtraav)'s
[donations_thermometer](https://www.drupal.org/project/donations_thermometer).

The current incarnation does not yet have an official home on Drupal.org.



FEATURES
--------

 * Classy.org or Manual data feed.
 * Multiple meters.
 * CSS3 version of meter.
 * Horizontal / Vertical orientation of the meters.
 * Preset meter colors.



REQUIREMENTS
------------

This module does not require any additional modules. It is designed to use
HTML5 and CSS3.

It does support the Panels module.



INSTALLATION
------------

 * Install as you would normally install a contributed Drupal module. See:
 https://drupal.org/documentation/install/modules-themes/modules-7
 for further information.



CONFIGURATION
-------------

 * Configure user permissions in Administration » People » Permissions:

 * Configure the number of Thermometer blocks you will need.
   - Administration » Configuration and modules » Donation Thermometer.

 * Configure individual blocks.
   - Navigate to Structure » Blocks

   - Click on configure for the block you wish to edit.

   - Set the block type. Manual allows a user to manually adjust the goal and
   current level. Classy.org allows the block to get it's data from the
   Classy.org platform.



TROUBLESHOOTING
---------------

There are no none issues. If you find one please
contact [Nazario A. Ayala](mailto:nazario@niztech.com)
