function init() {
  getData();
}
init();

function getData() {

  $.ajax({

    url: "album.php",
    method:"GET",
    success:function(data){
      console.log(data);
          var source = document.getElementById("entry-template").innerHTML;
          var template = Handlebars.compile(source);

      for (var i = 0; i < data.length; i++) {

        var titolo = data[i].title;
        var image = data[i].poster;
        var author = data[i].author;
        var year = data[i].year;

        // console.log(data[i]);
        var context = {
                        title: titolo,
                        image : image,
                        author:  author,
                        year: year
                      };
        var html = template(context);

        console.log(titolo);
        document.getElementById("container").innerHTML += html;

      }
    }
  });
};
// function getData(){
//   $.ajax({
//     url: "album.php",
//     method: "GET",
//     success : function(data){
//       console.log(data);
//       // var source = document.getElementById("entry-template").innerHTML;
//       // var template = Handlebars.compile(source);
//       // var context = { title: "My New Post", body: "This is my first post!" };
//       // var html = template(context);
//     },
//     error : function(err){
//       console.error(err);
//     }
//
//
//   });
// }
