document.addEventListener('DOMContentLoaded', function(){
    // khai báo đối tượng cần sử dụng
    var nut = document.querySelectorAll('.chuyen-slide ul li');
    var slides = document.querySelectorAll('.cac-slide ul li');
    var time = setInterval( function (){ autoSlide() }, 7000);
    
    
    // bắt sự kiện click cho từng nút
    for ( var i=0; i< nut.length; i++){
        nut[i].addEventListener('click', function(){
            // Trước tiên hủy tự chuyển động
            clearInterval(time);
            // bỏ tất cả màu của các nút còn lại
            for ( var i=0; i< nut.length; i++){
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            // Hết phần chuyển màu nút slide

            // xử lý phần tính vị trí
            
            var nutactive = this;
            var vitrinut = 0;
            for(vitrinut=0; nutactive = nutactive.previousElementSibling; vitrinut++){}
            // hết vòng lặp này thì biến i = số thứ tự
            for ( var i=0; i< slides.length; i++){
                slides[i].classList.remove('active');
                slides[vitrinut].classList.add('active');
            }
        })
    }  //hết sự kiện cho nút

    // sự kiện autu slide
    function autoSlide(){
        // B1: xem slide nào đang hiển thị
        var vitrislide = 0;
        var slidehientai = document.querySelector('.cac-slide ul li.active');
            // console.log(slidehientai);
            // console.log(slidehientai.previousElementSibling);
        for(vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++){}

        // Nếu chưa đến slide cuối cùng tức là vitrislide < (slides.length -1) --> hoạt động bình thường
        if(vitrislide < (slides.length -1)){
            // cho ẩn hết đi
            for(var i=0; i< slides.length; i++){
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            // cho phần tử tiếp theo của slide hiển thị ra
            slides[vitrislide].nextElementSibling.classList.add('active');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        }
        else {
            for(var i=0; i< slides.length; i++){
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            // cho phần tử tiếp theo của slide hiển thị ra
            slides[0].classList.add('active');
            nut[0].classList.add('kichhoat');
        }
    }

    // Sự kiện click nút menu
    var nut2 = document.getElementsByClassName('bars');
    var bars = nut2[0];
    var nut3 = document.getElementsByClassName('close');
    var close = nut3[0];
    var tranghien = document.getElementsByClassName('trang');
    var trang = tranghien[0];
    var menuhien = document.getElementsByClassName('list');
    var list = menuhien[0];
    
    
    bars.onclick = function(){
        console.log('click rồi');
        this.classList.remove('bars');
        this.classList.add('close-bars');
        trang.classList.add('tranghien');
        list.classList.add('list-hien');
        close.classList.add('open-close');
    }
    trang.onclick = function(){
        console.log('click rồi');
        bars.classList.add('bars');
        bars.classList.remove('close-bars');
        this.classList.remove('tranghien');
        list.classList.remove('list-hien');
        close.classList.remove('open-close');
    }
    close.onclick = function(){
        console.log('click rồi');
        bars.classList.add('bars');
        bars.classList.remove('close-bars');
        trang.classList.remove('tranghien');
        list.classList.remove('list-hien');
        this.classList.remove('open-close');
    }

},false)