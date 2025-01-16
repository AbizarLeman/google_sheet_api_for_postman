const spreadsheetID = "";
const sheetName = "";
const accessToken = pm.globals.get("google_access_token");

const requestName = pm.info.requestName;
const requestBodyObject = JSON.parse(pm.request.body.raw);
const responseBodyObject = pm.response.json();

const row = [];

const body = {
    values: [
        row
    ]
};

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${sheetName}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
pm.sendRequest({
    url: url,
    method: "POST",
    header: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body, null, 10)
}, (err, response) => {
    if (err || response.json()["error"]) {
        console.error("Error updating Google Sheets:", response.json());
    } else {
        console.log("Google Sheets updated successfully:", response.json());
    }
});
