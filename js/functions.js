function votes() {
    var totalDelegates = 4763,
        decidedDelegates = 1498,
        undecidedDelegates = 3265,
        percentDelegates,
        day = new Date().getDate();
    switch (new Date().getMonth() + 1) {
        case 3:
            if (day >= 5 && day < 7) {
                decidedDelegates += 109;
                undecidedDelegates -= 109;
            }
            else if (day >= 7 && day < 9) {
                decidedDelegates += 134;
                undecidedDelegates -= 134;
            }
            else if (day >= 9 && day < 13) {
                decidedDelegates += 300;
                undecidedDelegates -= 300;
            }
            else if (day >= 13 && day < 16) {
                decidedDelegates += 306;
                undecidedDelegates -= 306;
            }
            else if (day >= 16 && day < 23) {
                decidedDelegates += 997;
                undecidedDelegates -= 997;
            }
            else if (day >= 23 && day < 27) {
                decidedDelegates += 1128;
                undecidedDelegates -= 1128;
            }
            else if (day >= 27) {
                decidedDelegates += 1270;
                undecidedDelegates -= 1270;
            }

            break;
        case 4:
            if (day >= 5) {
                decidedDelegates += 1270;
                undecidedDelegates -= 1270;
            }
            else if (day >= 6 && day < 10) {
                decidedDelegates += 1356;
                undecidedDelegates -= 1356;
            }
            else if (day >= 10 && day < 20) {
                decidedDelegates += 1370;
                undecidedDelegates -= 1370;
            }
            else if (day >= 20 && day < 27) {
                decidedDelegates += 1617;
                undecidedDelegates -= 1617;
            }
            else if (day >= 27) {
                decidedDelegates += 2001;
                undecidedDelegates -= 2001;
            }
            break;
        case 5:
            if (day >= 3) {
                decidedDelegates += 2001;
                undecidedDelegates -= 2001;
            }
            else if (day >= 4 && day < 8) {
                decidedDelegates += 2084;
                undecidedDelegates -= 2084;
            }
            else if (day >= 8 && day < 11) {
                decidedDelegates += 2091;
                undecidedDelegates -= 2091;
            }
            else if (day >= 11 && day < 18) {
                decidedDelegates += 2120;
                undecidedDelegates -= 2120;
            }
            else if (day >= 18) {
                decidedDelegates += 2236;
                undecidedDelegates -= 2236;
            }
            break;
        case 6:
            if (day >= 4) {
                decidedDelegates += 2236;
                undecidedDelegates -= 2236;
            }
            else if (day === 5) {
                decidedDelegates += 2243;
                undecidedDelegates -= 2243;
            }
            else if (day >= 6 && day < 8) {
                decidedDelegates += 2303;
                undecidedDelegates -= 2303;
            }
            else if (day >= 8 && day < 15) {
                decidedDelegates += 2997;
                undecidedDelegates -= 2997;
            }
            else if (day >= 15) {
                decidedDelegates += 3017;
                undecidedDelegates -= 3017;
            }
            break;
    }
    percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);

    var data = [
        {
            value: undecidedDelegates,
            color: "#C62828",
            highlight: "#D32F2F",
            label: "Undecided Delegates"
        },
        {
            value: decidedDelegates,
            color: "#0D47A1",
            highlight: "#1565C0",
            label: "Decided Delegates"
        }];

    var options = {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
        animation: false
    };

    var ctx = document.getElementById("delegates").getContext("2d");
    var delegates = new Chart(ctx).Pie(data, options);

    document.getElementById("percent").innerHTML = percentDelegates;
}
function bar() {
    var data = {
        labels: ["Clinton", "Sanders"],
        datasets: [
            {
                label: "Pledged Delegates",
                fillColor: "rgba(255,255,255,0.5)",
                strokeColor: "rgba(255,255,255,0.8)",
                highlightFill: "rgba(255,255,255,0.75)",
                highlightStroke: "rgba(255,255,255,1)",
                data: [759, 546]
            }
        ]
    };
    var options = {
        scaleShowHorizontalLines: false,
        scaleFontColor : "#FFFFFF",
        scaleFontFamily: "'Open Sans', sans-serif",
        scaleFontSize: 16,
        animation: false
    };
    var ctx = document.getElementById("delegateswon").getContext("2d");
    var myBarChart = new Chart(ctx).Bar(data, options);
}

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
votes();
bar();