function populateSelect(id) {
    const select = document.getElementById(id);
    for (let i = 1; i <= 5; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}

populateSelect("severity");
populateSelect("likelihood");
populateSelect("exposure");

function calculateRisk() {
    let machine = document.getElementById("machine").value;
    let severity = parseInt(document.getElementById("severity").value);
    let likelihood = parseInt(document.getElementById("likelihood").value);
    let exposure = parseInt(document.getElementById("exposure").value);

    let score = severity * likelihood * exposure;
    let level = "";
    let color = "";

    if (score >= 75) {
        level = "🔴 High Risk - ต้องแก้ไขทันที";
        color = "#ff4d4d";
    } else if (score >= 40) {
        level = "🟠 Medium Risk - ควรวางแผนแก้ไข";
        color = "#ffa500";
    } else {
        level = "🟢 Low Risk - ยอมรับได้";
        color = "#28a745";
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        เครื่องจักร: ${machine || "-"} <br>
        Risk Score: ${score} <br>
        ระดับความเสี่ยง: ${level}
    `;
    resultDiv.style.background = color;
    resultDiv.style.color = "white";
}
