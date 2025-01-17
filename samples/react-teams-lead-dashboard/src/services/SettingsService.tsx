import { HttpClient, MSGraphClient } from "@microsoft/sp-http";

export default class SettingsService {
    /**
     * Get the application settings from drive
     * @param graphClient Graph client to be used for the request
     * @param httpClient Http client to be used for the request
     * @returns Object representing the JSON settings file
     */
    public static async getSettings(graphClient: MSGraphClient, httpClient: HttpClient): Promise<any> {
        // Get approot files
        const approotFiles = await graphClient
        .api('/me/drive/special/approot/children')
        .version("v1.0")
        .get();

        // If any it means that a settings.json file exists
        if (approotFiles.value.length > 0){
            // Get the settings.json file download URL
            const downloadUrl = approotFiles.value[0]["@microsoft.graph.downloadUrl"];

            // Get the settings.json file
            const settingsResponse = await httpClient.get(downloadUrl, HttpClient.configurations.v1);
            const settings = await settingsResponse.json();

            return settings;
        }

        return undefined;
    }
    
    /**
     * Save the specified settings to drive
     * @param graphClient Graph client to be used for the request
     * @param settings Object representing the settings to be saved on the JSON settings file
     */
    public static async saveSiteUrl(graphClient: MSGraphClient, settings: any) {
        // Save the settings in the application dedicated folder
        await graphClient
            .api('/me/drive/special/approot:/settings.json:/content')
            .version("v1.0")
            .header('content-type', 'text/plain')
            .put(JSON.stringify(settings));

        location.reload();
    }
}