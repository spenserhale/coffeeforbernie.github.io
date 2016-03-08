function votes() {
    switch (new Date().getMonth() + 1) {
        case 3:
            var totalDelegates = 4763,
                decidedDelegates = 1498,
                undecidedDelegates = 3265,
                percentDelegates,
                day = new Date().getDate();

            if (day >= 5 && day < 7) {
                decidedDelegates += 109;
                undecidedDelegates -= 109;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            if (day >= 7 && day < 9) {
                decidedDelegates += 134;
                undecidedDelegates -= 134;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            if (day >= 9 && day < 13) {
                decidedDelegates += 300;
                undecidedDelegates -= 300;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            if (day >= 13 && day < 16) {
                decidedDelegates += 306;
                undecidedDelegates -= 306;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            if (day >= 16 && day < 23) {
                decidedDelegates += 997;
                undecidedDelegates -= 997;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            if (day >= 23 && day < 27) {
                decidedDelegates += 1128;
                undecidedDelegates -= 1128;
            }
            if (day >= 27) {
                decidedDelegates += 1270;
                undecidedDelegates -= 1270;
                percentDelegates = Math.round(undecidedDelegates / totalDelegates * 100);
            }
            break;
        case 4:
            if (day >= 5) {
                decidedDelegates += 1270;
                undecidedDelegates -= 1270;
            }
            if (day >= 6 && day < 10) {
                decidedDelegates += 1356;
                undecidedDelegates -= 1356;
            }
            if (day >= 10 && day < 20) {
                decidedDelegates += 1370;
                undecidedDelegates -= 1370;
            }
            if (day >= 20 && day < 27) {
                decidedDelegates += 1617;
                undecidedDelegates -= 1617;
            }
            if (day >= 27) {
                decidedDelegates += 2001;
                undecidedDelegates -= 2001;
            }
            break;
        case 5:
            if (day >= 3) {
                decidedDelegates += 2001;
                undecidedDelegates -= 2001;
            }
            if (day >= 4 && day < 8) {
                decidedDelegates += 2084;
                undecidedDelegates -= 2084;
            }
            if (day >= 8 && day < 11) {
                decidedDelegates += 2091;
                undecidedDelegates -= 2091;
            }
            if (day >= 11 && day < 18) {
                decidedDelegates += 2120;
                undecidedDelegates -= 2120;
            }
            if (day >= 18) {
                decidedDelegates += 2236;
                undecidedDelegates -= 2236;
            }
            break;
        case 6:
            if (day >= 4) {
                decidedDelegates += 2236;
                undecidedDelegates -= 2236;
            }
            if (day === 5) {
                decidedDelegates += 2243;
                undecidedDelegates -= 2243;
            }
            if (day >= 6 && day < 8) {
                decidedDelegates += 2303;
                undecidedDelegates -= 2303;
            }
            if (day >= 8 && day < 15) {
                decidedDelegates += 2997;
                undecidedDelegates -= 2997;
            }
            if (day >= 15) {
                decidedDelegates += 3017;
                undecidedDelegates -= 3017;
            }
            break;
    }

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
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
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
                data: [658, 471]
            }
        ]
    };
    var options = {
        scaleShowHorizontalLines: false,
        scaleFontColor : "#FFFFFF",
        scaleFontFamily: "'Open Sans', sans-serif",
        scaleFontSize: 16
    };
    var ctx = document.getElementById("delegateswon").getContext("2d");
    var myBarChart = new Chart(ctx).Bar(data, options);
}

votes();
bar();