var hr = new Date().getHours();

if(hr>=4 && hr<=11) {
document.getElementById('msg').innerHTML = "morning";
document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4tFsqzgfLhW1L-Y__tg7st4p4EJFM_49qWQ_pgGwoqTEowodJ&usqp=CAU";
}
else if(hr>=12 && hr<=16) {
document.getElementById('msg').innerHTML = "afternoon";
document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQK0CHiesoPMkzBTdrv6nMQcat8j-QNZFuMT2swPsCKHqAoJ5z&usqp=CAU";
}
else if(hr>=17 && hr<=21) {
document.getElementById('msg').innerHTML = "evening";
document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNkrrrrBYK8o8wQAl_BewKsEaVItfP-PEuTBlA2gE7rHFG2MVl&usqp=CAU";

}
else {
  document.getElementById('msg').innerHTML = "night";
  document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm0MNL4PgE3KX8tCr8R0s5lIPenD-LiBtosHT8gRh4h42tkwcQ&usqp=CAU";

}
