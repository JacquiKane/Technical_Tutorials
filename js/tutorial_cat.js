/** @format */

$(document).ready(function () {
  const items = [
    { title: "Web Development", link: ".\\webdev\\index.html" },
    {
      title: "Networking",
      link: "#",
    },
    { title: "Database Technology", link: "#" },
  ];

  items.forEach((item) => {
    const card = $('<div class="card"></div>').text(item.title);
    card.on("click", function () {
      window.location.href = item.link;
    });
    $("#card-container").append(card);
  });
});
