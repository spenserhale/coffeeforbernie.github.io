function dateheader() {
    var monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var fulldate = new Date();
    var month = monthName[fulldate.getMonth()];
    var day = fulldate.getDate();
    var year = fulldate.getFullYear();
    document.getElementById("datetime").innerHTML = month + ' ' + day + ',&nbsp;' + year;
}

dateheader();