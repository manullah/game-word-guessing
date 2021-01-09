const themes = [
  { name: "Programming Language", key: "programmingLanguage" },
  { name: "Framework", key: "framework" },
  { name: "Component Computer", key: "componentComputer" },
  { name: "Tools", key: "tools" },
];

(function ($, window, undefined) {
  // set if navbar back has clicked
  $("#navbarBack").click(function () {
    window.choosenTheme.testVar = "";
    $(".navbar-container").toggle("slide", { direction: "right" }, 250);
    $("#showHangman").toggle("slide", { direction: "right" }, 250);
    $(".choosenTheme").toggle("slide", { direction: "left" }, 500);
  });

  // set html for list themes
  var frag = "";
  $.each(themes, function (key, val) {
    frag += `<div class="card cardTheme mb-3" data-val="${val.key}">
      <div class="card-body">${val.name}</div>
    </div>`;
  });
  $(".listThemes").html(frag);

  // set if theme has clicked
  $(".cardTheme").click(function () {
    const found = themes.find(
      (element) => element.key == $(this).attr("data-val")
    );
    window.choosenTheme.testVar = found;
  });
})(jQuery, window);
