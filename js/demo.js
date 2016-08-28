/*
 * Bootstrap Image Gallery JS Demo
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global blueimp, $ */

$(function () {
  'use strict'
  
  var borderless = true;
  $('#blueimp-gallery').data('useBootstrapModal', !borderless)
  $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless)
})
