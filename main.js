document.addEventListener("DOMContentLoaded", function() {
  var nut = document.querySelectorAll(".chuyenslide ul li");
  var slides = document.querySelectorAll(".cacslide ul li");
  var thoigian;
  autoSlide();
  for (let i = 0; i < nut.length; i++) {
    nut[i].addEventListener("click", function() {
      // truoc tien huy tu chuyen dong
      clearInterval(thoigian);
      for (let i = 0; i < nut.length; i++) {
        nut[i].classList.remove("kichhoat");
      }
      this.classList.add("kichhoat");
      var nutkichhoat = this;
      var vitrinut = 0;
      for (
        vitrinut = 0;
        (nutkichhoat = nutkichhoat.previousElementSibling);
        vitrinut++
      ) {}
      // het vong lap nay thi bien i = so thu tu

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[vitrinut].classList.add("active");
      }
    });
  }



  function autoSlide() {
    thoigian = setInterval(function() {
      // tinh xem slide nao dang hien thi
      var vitrislide = 0;
      var slideHienTai = document.querySelector(".cacslide ul li.active");
      for (
        vitrislide = 0;
        (slideHienTai = slideHienTai.previousElementSibling);
        vitrislide++
      ) {}
      if (vitrislide < slides.length - 1) { // neu chua toi slide cuoi
        // cho phan tu tiep theo cua slide hien thi ra
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          nut[i].classList.remove("kichhoat");
        }
        slides[vitrislide].nextElementSibling.classList.add("active");
        nut[vitrislide].nextElementSibling.classList.add("kichhoat");
      }else{
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          nut[i].classList.remove("kichhoat");
        }
        slides[0].classList.add("active");
        nut[0].classList.add("kichhoat");
      }
    }, 5000);
  }
});
