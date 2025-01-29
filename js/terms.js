/** @format */

$(document).ready(function () {
  const $cardContainer = $("#card-container");

  $.each(tutorials, function (term, definition) {
    const $flipCard = $('<div class="flip-card"></div>');
    const $flipCardInner = $('<div class="flip-card-inner"></div>');
    const $flipCardFront = $('<div class="flip-card-front"></div>').html(definition[0] + "<br>" +
      "<img src='../assets/" + definition[3] + "'/>" + definition[1]
    );
    const $flipCardBack = $('<div class="flip-card-back"></div>');
    const $flipCardDef = $('<div class="definition-area"></div>').html(
      definition[2]
    );

    $flipCardBack.append($flipCardDef);
    $flipCardInner.append($flipCardFront, $flipCardBack);
    $flipCard.append($flipCardInner);
    $cardContainer.append($flipCard);
  });
});
