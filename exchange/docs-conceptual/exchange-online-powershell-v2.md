---
title: Exchange Online PowerShell with modern authentication using V2 Module
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
description: "Learn how to install and use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell with modern authentication."
---

# Use the Exchange Online PowerShell with modern authentication using V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) enables admins to connect to their Exchange Online environment in Microsoft 365 to retrieve data, create new objects, update existing objects, remove objects as well as configure Exchange Online and its features.

## Report bugs and issues

When you report an issue, be sure to include the log files in your email message. To generate the log files, replace \<Path to store log file\> with the output folder you want, and run the following command:

```PowerShell
Connect-ExchangeOnline -EnableErrorReporting -LogDirectoryPath <Path to store log file> -LogLevel All
```

## How the EXO V2 module works

The Exchange Online PowerShell V2 module contains a small set of new cmdlets that are optimized for bulk data retrieval scenarios (think: thousands and thousands of objects). Until you create a session to connect to your Exchange Online organization, you'll only see these new cmdlets in the module. After you connect to your Exchange Online organization, you'll see all of the older remote PowerShell cmdlets.

The EXO V2 module use modern authentication for all cmdlets. You can't use Basic authentication in the EXO V2 module; however, you still need to configure the Basic authentication setting in WinRM as described later in this topic.

The new cmdlets in the EXO V2 module are meant to replace their older, less efficient equivalents. However, the original cmdlets are still available in the EXO V2 module for backwards compatibility **after** you create a session to connect to your Exchange Online organization.

The new cmdlets in the EXO V2 module are listed in the following table:

|New cmdlet in the EXO V2 module|Older related cmdlet|
|---|---|
|[Connect-ExchangeOnline](../exchange-ps/exchange/Connect-ExchangeOnline.md)|[Connect-EXOPSSession](mfa-connect-to-exchange-online-powershell.md) <br/> or <br/> [New-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssession)|
|[Get-EXOMailbox](../exchange-ps/exchange/Get-EXOMailbox.md)|[Get-Mailbox](../exchange-ps/exchange/Get-Mailbox.md)|
|[Get-EXORecipient](../exchange-ps/exchange/Get-EXORecipient.md)|[Get-Recipient](../exchange-ps/exchange/Get-Recipient.md)|
|[Get-EXOCasMailbox](../exchange-ps/exchange/Get-EXOCasMailbox.md)|[Get-CASMailbox](../exchange-ps/exchange/Get-CASMailbox.md)|
|[Get-EXOMailboxPermission](../exchange-ps/exchange/Get-EXOMailboxPermission.md)|[Get-MailboxPermission](../exchange-ps/exchange/Get-MailboxPermission.md)|
|[Get-EXORecipientPermission](../exchange-ps/exchange/Get-EXORecipientPermission.md)|[Get-RecipientPermission](../exchange-ps/exchange/Get-RecipientPermission.md)|
|[Get-EXOMailboxStatistics](../exchange-ps/exchange/Get-EXOMailboxStatistics.md)|[Get-MailboxStatistics](../exchange-ps/exchange/Get-MailboxStatistics.md)|
|[Get-EXOMailboxFolderStatistics](../exchange-ps/exchange/Get-EXOMailboxFolderStatistics.md)|[Get-MailboxFolderStatistics](../exchange-ps/exchange/Get-MailboxFolderStatistics.md)|
|[Get-EXOMailboxFolderPermission](../exchange-ps/exchange/Get-EXOMailboxFolderPermission.md)|[Get-MailboxFolderPermission](../exchange-ps/exchange/Get-MailboxFolderPermission.md)|
|[Get-EXOMobileDeviceStatistics](../exchange-ps/exchange/Get-EXOMobileDeviceStatistics.md)|[Get-MobileDeviceStatistics](../exchange-ps/exchange/Get-MobileDeviceStatistics.md)|
|[Disconnect-ExchangeOnline](../exchange-ps/exchange/Disconnect-ExchangeOnline.md)|[Remove-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/remove-pssession)|
|[Connect-IPPSSession](../exchange-ps/exchange/Connect-IPPSSession.md)|[Connect-IPPSSession](mfa-connect-to-scc-powershell.md)|

## Install and maintain the Exchange Online PowerShell V2 module

You can download the EXO V2 module from the PowerShell gallery [here](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/).

> [!NOTE]
> Currently, the latest version of PowerShell that's supported for the EXO V2 module is PowerShell 5.1. Support for later versions of PowerShell (and by definition, support for Linux or Mac) is a work in progress.

### What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- You can use the following versions of Windows:

  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of windows has reached end of support, and is now only supported when running in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then the Windows Management Framework 5.1. For more information, see [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to transport the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  To verify that Basic authentication is enabled for WinRM, run this command **in a Command Prompt**:
  
  > [!NOTE]
  > You must temporarily enable WinRM to run the following commands. You can enable it by running "winrm quickconfig".

  ```dos
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run this command to enable Basic authentication for WinRM:

  ```dos
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

  If Basic authentication for WinRM is disabled, you'll get this error when you try to connect:

  > The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.

### Install the EXO V2 module

To install the EXO V2 module for the first time, run the following commands:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](https://docs.microsoft.com/powershell/scripting/gallery/installing-psget).

2. Windows PowerShell needs to be configured to run scripts, and by default, it isn't. To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window:

   ```PowerShell
   Set-ExecutionPolicy RemoteSigned
   ```

   **Notes**:

   - You need to configure this setting only once on your computer. Read more about execution policies [here](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies).

   - If you don't do this step, you'll receive the following error when you try to connect:

     > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

3. Close and re-open the elevated Windows PowerShell window to get the changes from the previous steps.

4. Run the following command from an elevated Windows PowerShell window:

   ```PowerShell
   Install-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

### Update the EXO V2 module

If the EXO V2 module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it to the latest version.

1. To see the version of the EXO V2 module that's currently installed, run the following commands:

   ```PowerShell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. Run the following command to update the EXO V2 module to latest version that's available in the PowerShell Gallery:

   ```PowerShell
   Update-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

   **Note**: If you receive the following error related to the PowerShellGet module, see Step 1 in the previous [Install the EXO V2 module](#install-the-exo-v2-module) section to update the PowerShellGet module to the latest version.

   > The specified module 'ExchangeOnlineManagement' with PowerShellGetFormatVersion '\<version\>' is not supported by the current version of PowerShellGet. Get the latest version of the PowerShellGet module to install this module, 'ExchangeOnlineManagement'.

   If you need to update the PowerShellGet module, be sure to close and re-open the Windows PowerShell window before you attempt to update the ExchangeOnlineManagement module.

3. To confirm that the update was successful, run the following commands:

   ```PowerShell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

### Uninstall the EXO V2 module

To uninstall the module, run the following command:

```PowerShell
Uninstall-Module -Name ExchangeOnlineManagement
```

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Connect to Exchange Online using the EXO V2 module

> [!NOTE]
> If your account uses multi-factor authentication (MFA), skip the first step (the **Get-Credential** cmdlet doesn't support MFA enabled accounts).

1. On your local computer, open a Windows PowerShell window and run the following command:

   ```PowerShell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box, type your work or school account and password, and then click **OK**.

2. Run one of the following commands:

   - **Accounts without MFA enabled**:

     ```PowerShell
     Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true
     ```

   - **Accounts with MFA enabled**: Replace `<UPN>` with your account in user principal name format (for example, `navin@contoso.com`) and run the following command:

     ```PowerShell
     Connect-ExchangeOnline -UserPrincipalName <UPN> -ShowProgress $true
     ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

## Properties and property sets in the EXO V2 module

The output of traditional Exchange Online cmdlets returns all possible object properties, including many properties that are often blank, or aren't even required in many scenarios. Returning a large number of blank and unnecessary properties causes degraded performance (more server computation and added network load). The full complement of properties are rarely required in the cmdlet output.

The EXO V2 module cmdlets have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we've categorized specific related properties into *property sets*. Simply put, these property sets are buckets of two or more related properties on the cmdlet.

Property sets are controlled by the following parameters on the EXO V2 module cmdlets:

- *PropertySets*: This parameter accepts one or more available property set names separated by commas.

  This example returns the properties that are available in the Archive and Custom property sets:

  ```PowerShell
  Get-EXOMailbox -PropertySets Archive,Custom
  ```

- *Properties*: This parameter accepts one or more property names separated by commas.

  This example returns the specified properties:

  ```PowerShell
  Get-EXOMailbox -Properties LitigationHoldEnabled,AuditEnabled
  ```

  **Note**: Cmdlets that only return a small number of output properties don't have the *PropertySet* or *Properties* parameters.

You can use *PropertySets* and *Properties* in the same command. For example:

```PowerShell
Get-EXOMailbox -Properties IsMailboxEnabled,SamAccountName -PropertySets Delivery
```

```PowerShell
Get-EXOCASMailbox -Properties EwsEnabled, MAPIBlockOutlookNonCachedMode -PropertySets ActiveSync
```

We've also included a Minimum property set (or *minset*) in the available property sets that includes a bare minimum set of properties for the cmdlet output.

- If you don't use the *PropertySets* or *Properties* parameters, you automatically get the properties in the Minimum property set.

- If you use the *PropertySets* or *Properties* parameters, you get the specified properties **and** the properties in the Minimum property set.

Either way, the cmdlet output will contain far fewer properties, and the time it takes to return those results will be much faster.

This example returns the properties in the Minimum property set for the first ten mailboxes.

```PowerShell
Get-EXOMailbox -ResultSize 10
```

In contrast, the same **Get-Mailbox** cmdlet would return at least 230 properties for the same ten mailboxes.

For details about the property sets that are available in EXO V2 module cmdlets, see [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md) or the individual EXO V2 module cmdlet reference topics.

> [!NOTE]
> Although you can retrieve all properties for an object by using the _PropertySets_ parameter with the value All, we highly discourage this because it slows down the cmdlet and reduces reliability. Always use the _PropertySets_ and _Properties_ parameters to retrieve the minimum number of properties.

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
