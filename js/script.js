// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function updates a slider value.
 */
function myButtonClicked () {
  const age = parseInt(document.getElementById("age").value)

  if (age >= 18) {
    document.getElementById('response').innerHTML = 'You can Watch any Movie!'
  } else if (age >= 13) {
    document.getElementById('response').innerHTML = 'You can Watch pg 13!'
  } else {
    document.getElementById('response').innerHTML = 'You cannot Watch any Movie, Sorry'
  }
}
