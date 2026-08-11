# Office PowerShell Cmdlet Updater

## Usage
1. Clone repo at: https://github.com/microsoftdocs/office-docs-powershell
2. Update configuration file `tools/.local/default.json`. Here is a brief explanation of all parameters
   * (REQUIRED) - `credentials\login` and `credentials\pass` should be updated with an account with Office 365 subscription and should have appropriate services in that subscription
   * (OPTIONAL) - `sendgrid\apiKey` and `sendgrid\emailSettings` should be updated with account details from an active sendgrid subscription
   * (OPTIONAL) - `github` section should be updated with account details from an active github account
3. Confirm you have NodeJS installed.
    Open PowerShell or GitBash and type `npm --version`.
    If not, install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
4. Open GitBash or PowerShell and run `cd <EnterThePathHere>/office-docs-powershell/tools/office-cmdlet-updater`
5. Install the required modules, type `npm install` and press Enter.
6. Install required PowerShell modules and connectors that will not be installed by the tool:
    - Skype for Business Online:
       - https://www.microsoft.com/en-us/download/details.aspx?id=39366
       - execute into console `winrm quickconfig`
    - SharePoint Online:
       - https://www.microsoft.com/en-us/download/details.aspx?id=35588
    - Exchange Online:
       - cmdlets could be imported using [this guide](https://learn.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell)
7. Run the app, type `node index` and press Enter in order to get info for all modules
8. Run the app for a certain module, type `node index -m <TypeModuleNameHere>`, with one of the following options - teams, skype, sharepoint, whiteboard, exchange, staffhub. For example, you should run `node index -m teams` to run the tool for Microsoft Teams
9. Run `node index -help` to get help information for all available commands
