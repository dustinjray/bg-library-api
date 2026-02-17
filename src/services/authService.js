import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const client = new SecretManagerServiceClient();

export async function getBearerToken() {
    const name = `projects/${process.env.GCP_PROJECT_ID}/secrets/${process.env.TOKEN_NAME}`;
    const [version] = await client.accessSecretVersion({ name: `${name}/versions/latest` });
    const payload = version.payload.data.toString('utf8');
    return payload;
}