# Office PowerShell Cmdlet Updater

## Usage:
1. Clone repo at: https://github.com/microsoftdocs/office-docs-powershell
2. Configure your email address in tools/.local/config/default.json to receive emailed logs. (OPTIONAL)
3. Confirm you have NodeJS installed.
    Open PowerShell or GitBash and type `npm --version`.
    If not, install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
4. Open GitBash or PowerShell (using x64 version is a must here) and run `cd <EnterThePathHere>/office-docs-powershell/tools/office-cmdlet-updater`
5. Install the required modules, type `npm install` and press Enter.
6. Install required PowerShell modules and connectors:
    - Skype for Business Online:
       - https://www.microsoft.com/en-us/download/details.aspx?id=39366
       - execute into console `winrm quickconfig`
    - Microsoft Teams:
       - https://www.powershellgallery.com/packages/MicrosoftTeams
    - SharePoint Online:
       - https://www.microsoft.com/en-us/download/details.aspx?id=35588
    - Exchange Online cmdlets could be imported using [this guide](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online/connect-to-exchange-online-powershell/connect-to-exchange-online-powershell)
    - Whiteboard:
       - https://www.powershellgallery.com/packages/WhiteboardAdmin
    - StaffHub:
       - https://www.powershellgallery.com/packages/MicrosoftStaffHub
    - Office Online Server cmdlets are not distributed separately
    - SharePoint Migration Tool (SPMT):
       - https://docs.microsoft.com/en-us/powershell/module/spmt
7. Run the app, type `npm start` and press Enter.

## Notes
1. The modules are installed from the PowerShell Gallery (PSGallery).
    This gallery contains user submitted code.
    If you would rather not install modules from the PSGallery then you can install the modules manually prior to running the tool.
    If you need to add PSGallery as a trusted source, you can do so with the following command:
    `Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted`

## Sample Run
