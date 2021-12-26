window.onscroll = function () {
    //Code tao hieu ung xuat hien header
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myHeader").classList.add('newHeader');
        document.getElementById("scrollTop").classList.add('scrollTop__appear');
    } else {
        document.getElementById("myHeader").classList.remove('newHeader');
        document.getElementById("scrollTop").classList.remove('scrollTop__appear');
    }
}