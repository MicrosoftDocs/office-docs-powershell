---
title: "Use the REST API Client module for Exchange Online PowerShell"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to download and use the Exchange Online V2 module to connect to Exchange Online PowerShell."
---

The Exchange Online PowerShell client module V2 enables admins to connect to their Exchange Online environments in Office 365 to retrieve data, create new objects, update existing objects, remove objects as well as configure Exchange Online & its features.

## What's new in the V2 module?

The Exchange Online PowerShell V2 module contains a set of \~10 new cmdlets that are optimized for bulk data retrieval scenarios (think: thousands of objects). It also contains the 700+ older remote PowerShell cmdlets baked into the same module. Note that after you install the new module from the PowerShell Gallery, you only see new cmdlets in the module. You'll see the older remote PowerShell cmdlets after you create a session to connect to your Exchange Online environment.

The new cmdlets in the Exchange Online PowerShell V2 module are:

|**New cmdlets in Exchange Online PowerShell V2***|**Older version in remote PowerShell**|
|:-----|:-----|
|Connect-ExchangeOnline|Connect-EXOPSSession <br/> or <br/> New-PSSession|
|[Get-EXOCASMailbox](https://docs.microsoft.com/powershell/module/exchange/rest-api-client-module/get-exocasmailbox)|[Get-CASMailbox]()https://docs.microsoft.com/powershell/module/exchange/client-access/get-casmailbox|
|[Get-EXOMailbox](https://docs.microsoft.com/powershell/module/exchange/rest-api-client-module/get-exomailbox)|[Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailbox)|
|Get-EXORecipient|[Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/users-and-groups/get-recipient)|
|[Get-EXORecipientPermission](https://docs.microsoft.com/powershell/module/exchange/rest-api-client-module/get-exorecipientpermission)|[Get-RecipientPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-recipientpermission)|
|Get-EXOMailboxFolderPermission|[Get-MailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxfolderpermission)|

## Install the Exchange Online PowerShell V2 module

The V2 module can be downloaded from PowerShell gallery [here](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/).

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

  <sup>\*</sup> For older versions of Windows, you need to install the Microsoft.NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Installing the .NET Framework](https://go.microsoft.com/fwlink/p/?LinkId=257868), [Windows Management Framework 3.0](https://go.microsoft.com/fwlink/p/?LinkId=272757), [Windows Management Framework 4.0](https://go.microsoft.com/fwlink/p/?LinkId=391344), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

### New module installation

To install the module for the first time, run the following commands:

1. On your local computer, run the following command from an elevated Windows PowerShell session (a Windows PowerShell window you open by selecting **Run as administrator**):

   ```
   Install-Module PowershellGet -Force
   ```

2. Windows PowerShell needs to be configured to run scripts, and by default, it isn't. To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window:

   ```
   Set-ExecutionPolicy RemoteSigned
   ```

   **Notes**:

   - You need to configure this setting only once on your computer.

   - If you don't do this step, you'll receive the following error when you try to connect:

     > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

3. From an elevated Windows PowerShell session and run the following command:

   ```
   Install-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

### Update the module

If the module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it if necessary:

1. To see the version that's currently installed, run the following commands:

   ```
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. Run the following command to update the module to latest version that's available on PowerShell Gallery:

   ```
   Update-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

3. To confirm that the update was successful, run the following commands:

   ```
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

### Uninstall the module

To uninstall the module, run the following command:

```
Remove-Module ExchangeOnlineManagement
```

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Connect to Exchange Online using the Exchange Online PowerShell V2 module

Open the Exchange Online PowerShell V2 module and run the following commands:

```
$UserCredential = Get-Credential
```

Enter your username and password.

```
Connect-ExchangeOnline -Credential $UserCredential
```

For detailed syntax and parameter information, see CXonnect-ExchangeOnline

## Use the Exchange Online PowerShell V2 module

### Property and PropertySets

Traditional Exchange Online cmdlet output returns all possible object properties. Many of these properties were either blank or not even required in many scenarios. This behavior caused degraded performance and didn't make much sense.

The new **\*-ExO\*** cmdlets in the V2 module have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we've categorized specific related properties into *PropertySets*. These PropertySets are simply a bucket of two or more properties and relate to the following parameters on the **\*-ExO\*** cmdlets:

- *PropertySets*: This parameter accepts one or more property set names (with or without wildcards) separated by commas.

  This example returns the properties that are available in the Archive and Custom property sets:

  ```
  Get-EXOMailbox -PropertySets Archive,Custom*
  ```

- *Property*: This parameter accepts one or more property names (with or without wildcards) separated by commas.

  This example returns the specified properties:

  ```
  Get-EXOMailbox -Properties LitigationHoldEnabled,AuditEnabled
  ```

- You can specify *PropertySets* and *Properties* in the same command. For example:

  ```
  *Get-EXOMailbox -Properties IsMailboxEnabled, SamAccountName -PropertySets Delivery
  ```

  ```
  Get-EXOCASMailbox -Properties EwsEnabled, MAPIBlockOutlookNonCachedMode -PropertySets ActiveSync
  ```

- We've also included a Minimum (or *minset*) property set that includes a bare minimum set of properties:

  - If you don't specify the *PropertySets* parameter, you automatically get the properties that are included in the Minimum property set.

  - If you specify a *PropertySets* or *Property* parameter value, you only get those specified properties.

The **Get-Mailbox** cmdlet, which returns 60+ properties in commands. If you run the **Get-EXOMailbox** cmdlet with specific *Property* or *PropertySets* parameter values, the output object will contain only those specific properties, and the time it takes to return those results will be much faster.

Refer to the individual **\*-ExO\*** cmdlet reference topics for more information on the *Property* and *PropertySets* parameters on each cmdlet.
