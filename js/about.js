function about_con() {
    if (!document.getElementById)
        return false;
    var con_head = document.getElementById("con_head");
    var ab_links = con_head.getElementsByTagName("a");
    var ab_author = document.getElementById("about_author");
    var ab_friend = document.getElementById("about_friend");
    ab_links[0].onclick = function() {
        ab_friend.style.display = "none";
        ab_author.style.display = "block";
        this.style.borderBottomColor = "#5FB878";
        ab_links[1].style.borderBottomColor = "transparent";
        this.style.color = "#5FB878";
        ab_links[1].style.color = "black";
    }
    ab_links[1].onclick = function() {
        ab_author.style.display = "none";
        ab_friend.style.display = "block";
        this.style.borderBottomColor = "#5FB878";
        this.style.color = "#5FB878";
        ab_links[0].style.borderBottomColor = "transparent";
        ab_links[0].style.color = "black";
    }
}
addLoadEvent(about_con);