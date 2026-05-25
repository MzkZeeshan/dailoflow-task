const axios = require("axios");
const { GoogleAuth } = require("google-auth-library");

const DIALOGFLOW_PROJECT_ID = process.env.PROJECT_ID || "dailog-flow-497418";
const DIALOGFLOW_LANGUAGE_CODE = "en";

const endpoint = `https://dialogflow.googleapis.com/v2/projects/${DIALOGFLOW_PROJECT_ID}/agent/sessions`;

async function getAccessToken() {
  const auth = new GoogleAuth({
    keyFile:
      "C:\\Users\\Administrator\\Desktop\\ICX\\backend\\chat-backend\\google_auth.json", // service account JSON file
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token.token;
}

async function sendMessageToDialogflow(sessionId, message) {
  const accessToken = await getAccessToken();

  const url = `${endpoint}/${sessionId}:detectIntent`;
  console.log("Dialogflow URL:", url);
  const requestBody = {
    queryInput: {
      text: {
        text: message,
        languageCode: DIALOGFLOW_LANGUAGE_CODE,
      },
    },
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message ||
        error.message ||
        "Dialogflow request failed"
    );
  }
}

module.exports = {
  sendMessageToDialogflow,
};
