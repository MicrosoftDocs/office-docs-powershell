---
title: About the Exchange Online PowerShell V2 module
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer: navgupta
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Admins can learn about the installation, maintenance, and design of the Exchange Online PowerShell V2 module that they use to connect to all Exchange-related PowerShell environments in Microsoft 365."
---

# About the Exchange Online PowerShell V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell.

For connection instructions using the EXO V2 module, see the following topics:

- [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md)

- [Connect to Security & Compliance Center PowerShell](connect-to-scc-powershell.md)

- [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md)

The rest of this topic explains how the module works, how to install and maintain the module, and the optimized Exchange Online cmdlets that are available in the module.

## Report bugs and issues for the EXO V2 module

When you report an issue, be sure to include the log files in your email message. To generate the log files, replace \<Path to store log file\> with the output folder you want, and run the following command:

```powershell
Connect-ExchangeOnline -EnableErrorReporting -LogDirectoryPath <Path to store log file> -LogLevel All
```

## How the EXO V2 module works

The module contains a small set of exclusive Exchange Online PowerShell cmdlets that are optimized for bulk data retrieval scenarios (think: thousands and thousands of objects). When you first open the module, you'll only see these exclusive cmdlets. After you [connect to your Exchange Online organization](connect-to-exchange-online-powershell.md), you'll see all of the familiar cmdlets that are available in Exchange Online PowerShell.

The module use modern authentication for all cmdlets. You can't use Basic authentication in the EXO V2 module; however, you still need to enable the Basic authentication setting in WinRM as explained [later in this topic](#prerequisites-for-the-exo-v2-module).

The Exchange Online cmdlets in the EXO V2 module are meant to replace their older, less efficient equivalents, but the equivalent cmdlets are still available (after you connect).

The Exchange Online PowerShell cmdlets that are only available in the EXO V2 module are listed in the following table:

****

|EXO V2 module cmdlet|Older related cmdlet|
|---|---|
|[Get-EXOMailbox](https://docs.microsoft.com/powershell/module/exchange/get-exomailbox)|[Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/get-mailbox)|
|[Get-EXORecipient](https://docs.microsoft.com/powershell/module/exchange/get-exorecipient)|[Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/get-recipient)|
|[Get-EXOCasMailbox](https://docs.microsoft.com/powershell/module/exchange/get-exocasmailbox)|[Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/get-casmailbox)|
|[Get-EXOMailboxPermission](https://docs.microsoft.com/powershell/module/exchange/get-exomailboxPermission)|[Get-MailboxPermission](https://docs.microsoft.com/powershell/module/exchange/get-mailboxpermission)|
|[Get-EXORecipientPermission](https://docs.microsoft.com/powershell/module/exchange/get-exorecipientpermission)|[Get-RecipientPermission](https://docs.microsoft.com/powershell/module/exchange/get-recipientpermission)|
|[Get-EXOMailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/get-exomailboxstatistics)|[Get-MailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/get-mailboxstatistics)|
|[Get-EXOMailboxFolderStatistics](https://docs.microsoft.com/powershell/module/exchange/get-exomailboxfolderstatistics)|[Get-MailboxFolderStatistics](https://docs.microsoft.com/powershell/module/exchange/get-mailboxfolderstatistics)|
|[Get-EXOMailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/get-exomailboxfolderpermission)|[Get-MailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/get-mailboxfolderpermission)|
|[Get-EXOMobileDeviceStatistics](https://docs.microsoft.com/powershell/module/exchange/get-exomobiledevicestatistics)|[Get-MobileDeviceStatistics](https://docs.microsoft.com/powershell/module/exchange/get-mobiledevicestatistics)|
|[Disconnect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/disconnect-exchangeonline)|[Remove-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/remove-pssession)|
|[Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession)|[Connect-IPPSSession](mfa-connect-to-scc-powershell.md)|
|[Get-UserBriefingConfig](https://docs.microsoft.com/powershell/module/exchange/get-userbriefingconfig)|n/a|
|[Set-UserBriefingConfig](https://docs.microsoft.com/powershell/module/exchange/set-userbriefingconfig)|n/a|
|

The connection-related cmdlets that are available in the EXO V2 module are listed in the following table:

****

|EXO V2 module cmdlet|Older related cmdlet|
|---|---|
|[Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline)|[Connect-EXOPSSession](v1-module-mfa-connect-to-exo-powershell.md) <br/> or <br/> [New-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssession)|
|[Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession)|[Connect-IPPSSession](v1-module-mfa-connect-to-scc-powershell.md)|
|[Disconnect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/disconnect-exchangeonline)|[Remove-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/remove-pssession)|
|

## Install and maintain the EXO V2 module

You can download the EXO V2 module from the PowerShell gallery at <https://www.powershellgallery.com/packages/ExchangeOnlineManagement/>.

The procedures in this section explain how to install, update, and uninstall the EXO V2 module.

### Prerequisites for the EXO V2 module

- Windows PowerShell 5.1 is the latest version of PowerShell that's supported by the EXO V2 module. Support for later versions of PowerShell (and by definition, support for Linux or Mac) is a work in progress.

- You can use the following versions of Windows:

  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of Windows has reached end of support, and is now only supported when running in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then the Windows Management Framework 5.1. For more information, see [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

  For more information about execution policies, see [About Execution Policies](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to send the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  **Note**: You must temporarily enable WinRM to run the following commands. You can enable it by running the command: `winrm quickconfig`.

  To verify that Basic authentication is enabled for WinRM, run this command **in a Command Prompt** (not in Windows PowerShell):
  
  ```dos
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run this command **in a Command Prompt** (not in Windows PowerShell) to enable Basic authentication for WinRM:

  ```dos
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

  **Note**: If you'd rather run the command in Windows PowerShell, enclose this part of the command in quotation marks: `'@{Basic="true"}'`.

  If Basic authentication for WinRM is disabled, you'll get this error when you try to connect:

  > The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

### Install the EXO V2 module

To install the EXO V2 module for the first time, complete the following steps **in an elevated Windows PowerShell window**:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](https://docs.microsoft.com/powershell/scripting/gallery/installing-psget).

2. Close and re-open the window.

3. Now you can use the **Install-Module** cmdlet to install the EXO V2 module from the PowerShell Gallery. Typically, you'll want the latest public version of the module, but you can also install a Preview version if one is available.

   - To install **the latest public version** of the module, run the following command:

     ```powershell
     Install-Module -Name ExchangeOnlineManagement
     ```

     Enter **Y** to accept the license agreement.

   - To install **a Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run the following command:

     ```powershell
     Install-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease
     ```

     For example, to install the `2.0.3-Preview` version that's required for [app-only authentication for unattended scripts](app-only-auth-powershell-v2.md), run the following command:

     ```powershell
     Install-Module -Name ExchangeOnlineManagement -RequiredVersion 2.0.3-Preview -AllowPrerelease
     ```

   When you're finished, enter **Y** to accept the license agreement.

For detailed syntax and parameter information, see [Install-Module](https://docs.microsoft.com/powershell/module/powershellget/install-module).

### Update the EXO V2 module

If the module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it to the latest version from the PowerShell Gallery:

1. To see the version of the module that's currently installed, run the following commands:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. You can use the **Update-Module** cmdlet **in an elevated Windows PowerShell window** to update the EXO V2 module from the PowerShell Gallery. Typically, you'll want the latest public version of the module, but you can also upgrade to a Preview version if one is available.

   - To upgrade to **the latest public version** of the module, run the following command:

     ```powershell
     Update-Module -Name ExchangeOnlineManagement
     ```

     Enter **Y** to accept the license agreement.

   - To upgrade to **a Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run the following command:

     ```powershell
     Update-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease
     ```

     For example, to upgrade to the `2.0.3-Preview` version that's required for [app-only authentication for unattended scripts](app-only-auth-powershell-v2.md), run the following command:

     ```powershell
     Update-Module -Name ExchangeOnlineManagement -RequiredVersion 2.0.3-Preview -AllowPrerelease
     ```

     When you're finished, enter **Y** to accept the license agreement.

3. To confirm that the update was successful, run the following commands to check the version information of the module that's installed:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

For detailed syntax and parameter information, see [Update-Module](https://docs.microsoft.com/powershell/module/powershellget/update-module).

**Note**: If you receive the following error:

> The specified module 'ExchangeOnlineManagement' with PowerShellGetFormatVersion '\<version\>' is not supported by the current version of PowerShellGet. Get the latest version of the PowerShellGet module to install this module, 'ExchangeOnlineManagement'.

Update your installation of the PowerShellGet module to the latest version as described in [Installing PowerShellGet](https://docs.microsoft.com/powershell/scripting/gallery/installing-psget). Be sure to close and re-open the elevated Windows PowerShell window before you attempt to update the ExchangeOnlineManagement module again.

### Uninstall the EXO V2 module

To uninstall the module, run the following command **in an elevated Windows PowerShell window**:

```powershell
Uninstall-Module -Name ExchangeOnlineManagement
```

For detailed syntax and parameter information, see [Uninstall-Module](https://docs.microsoft.com/powershell/module/powershellget/uninstall-module).

## Properties and property sets in the EXO V2 module

Traditional Exchange Online cmdlets return all possible object properties in their output, including many properties that are often blank or aren't interesting in many scenarios. This behavior causes degraded performance (more server computation and added network load). You rarely (if ever) need the full complement of properties in the cmdlet output.

The **Get-EXO\*** cmdlets in the module have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we've categorized specific related properties into property sets. Simply put, these property sets are buckets of two or more related properties on the cmdlet.

In the biggest and most used **Get-EXO\*** cmdlets:

- [Get-EXOCasMailbox](https://docs.microsoft.com/powershell/module/exchange/get-exocasmailbox)
- [Get-EXOMailbox](https://docs.microsoft.com/powershell/module/exchange/get-exomailbox)
- [Get-EXOMailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/get-exomailboxstatistics)
- [Get-EXORecipient](https://docs.microsoft.com/powershell/module/exchange/get-exorecipient)

Property sets are controlled by the following parameters:

- *PropertySets*: This parameter accepts one or more available property set names separated by commas. The available property sets are described in [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md).
- *Properties*: This parameter accepts one or more property names separated by commas.

You can use the *PropertySets* and *Properties* parameters together in the same command.

We've also included a Minimum property set that includes a bare minimum set of required properties for the cmdlet output (for example, identity properties). The properties in the Minimum property sets are also described in [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md).

- If you don't use the *PropertySets* or *Properties* parameters, you automatically get the properties in the Minimum property set.
- If you use the *PropertySets* or *Properties* parameters, you get the specified properties **and** the properties in the Minimum property set.

Either way, the cmdlet output will contain far fewer properties, and the time it takes to return those results will be much faster.

For example, after you [connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md), the following example returns only the properties in the Minimum property set for the first ten mailboxes.

```powershell
Get-EXOMailbox -ResultSize 10
```

In contrast, the output of the same **Get-Mailbox** command would return at least 230 properties for each of the first ten mailboxes.

> [!NOTE]
> Although the _PropertySets_ parameter accepts the value All, we highly discourage using this value to retrieve all properties, because it slows down the command and reduces reliability. Always use the _PropertySets_ and _Properties_ parameters to retrieve the minimum number of properties that are required for your scenario.

For more information about filtering in the EXO V2 module, see [Filters in the Exchange Online V2 module](filters-v2.md).

## Release notes

### Current release: Version 1.0.1

- This is the General Availability (GA) version of the EXO PowerShell V2 Module. It is stable and ready for use in production environments.

- Get-ExoMobileDeviceStatistics cmdlet now supports Identity parameter.

- Improved reliability of session auto-reconnect in certain cases where a script was running for ~50 minutes and threw a "Cmdlet not found" error due to a bug in auto-reconnect logic.

- Fixed data-type issues of two commonly used "User" and "MailboxFolderUser" attributes for easy migration of scripts.

- Enhanced support for filters as it now supports four more operators: EndsWith, Contains, Not and NotLike support. Check online documentation for attributes that aren't supported in filters.

### Previous releases

#### Version 0.4578.0

- Added support for configuring the Briefing Email for your organization at the user level with **Set-UserBriefingConfig** and **Get-UserBriefingConfig** cmdlets.

- Support for session cleanup using **Disconnect-ExchangeOnline** cmdlet. This cmdlet is the V2 equivalent of `Get-PSSession | Remove-PSSession`. In addition to cleaning up session object and local files, it also removes the access token from cache, which is used for authenticating against V2 cmdlets.

- You can now use `FolderId` as an identity parameter in **Get-EXOMailboxFolderPermission**. You can get the `FolderId` value using **Get-MailboxFolder**. For example:

  `Get-MailboxFolderPermission -Identity <UPN>:<Folder-Path>`
  
  `Get-MailboxFolderPermission -Identity <UPN>:\<Folder-Id>`

- Improved reliability of **Get-EXOMailboxStatistics** as certain request routing errors which led to failures have been resolved.

- Optimized memory usage when a session is created by re-using any existing module with a new session instead of creating a new one every time session is imported.

#### Version 0.4368.1

- Added support for Security & Compliance Center PowerShell cmdlets using the **Connect-IPPSSession** cmdlet.

- Hide the announcement banner using the _ShowBanner_ switch. Run the following command to hide the banner:

  ```powershell
  Connect-ExchangeOnline -ShowBanner:$false
  ```

- Terminate cmdlet execution on client exception.

- Remote PowerShell contained various complex data types which were intentionally not supported in EXO cmdlets to improve performance. Differences in non-complex data types between remote PowerShell cmdlets and V2 cmdlets have been resolved to allow seamless migration of management scripts.

#### Version 0.3582.0

- Support for prefix during session creation.

  - You can create only 1 session at a time that contains prefixed cmdlets.
  - Note that the EXO V2 cmdlets will not be prefixed as they already have the prefix EXO, so don't use `EXO` as a prefix.

- Use EXO V2 cmdlets even if WinRM Basic Auth is disabled on client machine. Note that remote PowerShell cmdlets require WinRM Basic Auth, and they won't be available if it's disabled.

- Identity parameter for V2 cmdlets now supports Name and Alias as well. Note that using Alias or Name slows down the performance of V2 cmdlets, so we don't recommend using them.

- Fixed issue where the data type of attributes returned by V2 cmdlet was different from remote PowerShell cmdlets. We still have few attributes which have differing data types, and we plan to handle them in coming months.

- Fixed bug: Frequent sessions reconnects issue when Connect-ExchangeOnline was invoked with Credentials or UserPrincipalName

#### Version 0.3555.1

- Fixed a bug where piped cmdlets were failing with the following error due to an authentication issue:

  > Cannot invoke the pipeline because the runspace is not in the Opened state. Current state of the runspace is 'Closed'.

#### Version 0.3527.4

- Updated Get-Help content.

- Fixed an issue in **Get-Help** where the *-Online* parameter was redirecting to a non-existent page with error code 400.

#### Version 0.3527.3

- Added support for managing Exchange for a different tenant using delegation flow.

- Works in tandem with other PowerShell modules in a single PS window.

- Added support for positional parameters.

- Date Time field now supports client locale.

- Bug fix: PSCredential empty when passed during Connect-ExchangeOnline.

- Bug fix: Client module error when filter contained $null.

- Sessions created internal to EXO V2 Module now have names (naming pattern: ExchangeOnlineInternalSession_%SomeNumber%).

- Bug fix: Remote PowerShell cmdlets intermittently failing due to time the difference between token expiry and the PSSession going idle.

- Major security update.

- Bug fixes and enhancements.
