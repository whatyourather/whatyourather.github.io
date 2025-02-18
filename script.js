
function vote(index, option, data) {
    if (option === 1) {
        data[index].votes1++;
    } else {
        data[index].votes2++;
    }
    
    fetch("questions.json", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        const totalVotes = data[index].votes1 + data[index].votes2;
        const percent1 = ((data[index].votes1 / totalVotes) * 100).toFixed(1);
        const percent2 = ((data[index].votes2 / totalVotes) * 100).toFixed(1);
        document.getElementById("stats").textContent = `${percent1}% chose ${data[index].option1}, ${percent2}% chose ${data[index].option2}`;
    });
}
