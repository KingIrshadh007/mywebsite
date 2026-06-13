const firstNames = [
"John","David","Michael","James","Daniel",
"Robert","Chris","Andrew","Matthew","Ryan"
];

const lastNames = [
"Smith","Johnson","Brown","Williams","Jones",
"Miller","Davis","Wilson","Taylor","Moore"
];

const companies = [
"Tech Solutions",
"Global Systems",
"Digital Labs",
"InnovateX",
"Future Works",
"Cloud Core",
"Smart Apps",
"Prime Tech"
];

const streets = [
"Main Street",
"Park Avenue",
"Oak Road",
"Lake View",
"Hill Street",
"Sunrise Avenue"
];

function randomItem(array){
    return array[
        Math.floor(Math.random() * array.length)
    ];
}

function generateFakeData(){

    const firstName =
    randomItem(firstNames);

    const lastName =
    randomItem(lastNames);

    const fullName =
    `${firstName} ${lastName}`;

    const email =
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

    const phone =
    "+1 " +
    Math.floor(
        1000000000 +
        Math.random() * 9000000000
    );

    const address =
    `${Math.floor(Math.random()*999)} ${
        randomItem(streets)
    }`;

    const company =
    randomItem(companies);

    document.getElementById("fakeDataResult").value =
`
Name: ${fullName}

Email: ${email}

Phone: ${phone}

Address: ${address}

Company: ${company}
`;
}

function copyFakeData(){

    navigator.clipboard.writeText(
        document.getElementById("fakeDataResult").value
    );
}
