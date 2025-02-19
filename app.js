let category = [
    {
        id: 1,
        stock: "47",
        name: "andres",
        category: "telefono",
        price: "900000",
    },
    {
        id: 2,
        stock: "60",
        name: "camila",
        category: "portatil",
        price: "2500000",
    },
    {
        id: 2,
        stock: "80",
        name: "andres",
        price: "900000",
        category: "portatil",
    },
    {
        stock: "47",
        id: 2,
        name: "andres",
        price: "900000",
        category: "portatil",
    },
    {
        stock: "47",
        id: 2,
        name: "andres",
        price: "900000",
        category: "portatil",
    },
];

let informationData = "";

function showData() {
    for (let data of category) {
        informationData += '<tr>';
        informationData += '<th scope="row">' + data.id + '</th>';
        informationData += '<th scope="row">' + data.name + '</th>';
        informationData += '<th scope="row">' + data.category + '</th>';
        informationData += '<th scope="row">' + data.stock + '</th>';
        informationData += '</tr>';
    }
}

showData();

let table = document.getElementById("tableData");
table.innerHTML = informationData;