---
title: Exchange Online PowerShell V2"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to download and use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell."
---
# Use the Exchange Online PowerShell V2 module

The Exchange Online PowerShell V2 module enables admins to connect to their Exchange Online environments in Office 365 to retrieve data, create new objects, update existing objects, remove objects as well as configure Exchange Online & its features.

## What's new in the V2 module?

The Exchange Online PowerShell V2 module contains a small set of new cmdlets that are optimized for bulk data retrieval scenarios (think: thousands of objects). It also contains the 700+ older remote PowerShell cmdlets baked into the same module. Note that after you install the V2 module from the PowerShell Gallery, you only see new cmdlets in the module. You'll see the older remote PowerShell cmdlets after you create a session to connect to your Exchange Online environment.

The new cmdlets in the Exchange Online PowerShell V2 module are:

|**New cmdlets in the V2 module**|**Older related cmdlets**|
|:-----|:-----|
|[Connect-ExchangeOnline](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/connect-exchangeonline?branch=ExORestModule-chrisda)|[Connect-ExoPSSession](https://docs.microsoft.com/powershell/exchange/exchange-online/connect-to-exchange-online-powershell/mfa-connect-to-exchange-online-powershell) <br/> or <br/> [New-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389621)|
|[Get-ExoCASMailbox](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exocasmailbox?branch=ExORestModule-chrisda)|[Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/client-access/get-casmailbox)|
|[Get-ExoMailbox](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exomailbox?branch=ExORestModule-chrisda)|[Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailbox)|
|[Get-ExoMailboxFolderPermission](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exomailboxfolderpermission?branch=ExORestModule-chrisda)|[Get-MailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxfolderpermission)|
|[Get-ExoRecipient](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exorecipient?branch=ExORestModule-chrisda)|[Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/users-and-groups/get-recipient)|
|[Get-ExoRecipientPermission](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exorecipientpermission?branch=ExORestModule-chrisda)|[Get-RecipientPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-recipientpermission)|

## Install the Exchange Online PowerShell V2 module

You can download the V2 module from the PowerShell gallery [here](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/).

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

### New V2 module installations

To install the V2 module for the first time, run the following commands:

1. On your local computer, run the following command from an elevated Windows PowerShell session (a Windows PowerShell window you open by selecting **Run as administrator**):

   ```PowerShell
   Install-Module PowershellGet -Force
   ```

2. Windows PowerShell needs to be configured to run scripts, and by default, it isn't. To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window:

   ```PowerShell
   Set-ExecutionPolicy RemoteSigned
   ```

   **Notes**:

   - You need to configure this setting only once on your computer.

   - If you don't do this step, you'll receive the following error when you try to connect:

     > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

3. From an elevated Windows PowerShell session and run the following command:

   ```PowerShell
   Install-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

### Update the V2 module

If the V2 module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it if necessary.

1. To see the version of the V2 module that's currently installed, run the following commands:

   ```PowerShell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. Run the following command to update the V2 module to latest version that's available in the PowerShell Gallery:

   ```PowerShell
   Update-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

3. To confirm that the update was successful, run the following commands:

   ```PowerShell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

### Uninstall the V2 module

To uninstall the module, run the following command:

```PowerShell
Remove-Module ExchangeOnlineManagement
```

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Connect to Exchange Online using the V2 module

1. On your local computer, open the Exchange Online PowerShell V2 module and run the following command:

   ```PowerShell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box, type your work or school account and password, and then click **OK**.

2. Run the following command:

   ```PowerShell
   Connect-ExchangeOnline -Credential $UserCredential
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/connect-exchangeonline?branch=ExORestModule-chrisda).

## Components of the V2 module

### Property and PropertySets

Traditional Exchange Online cmdlets return all possible object properties in their output. Many properties are often blank or not even required in many scenarios. This cmdlet output behavior caused degraded performance and didn't make much sense.

The new V2 module cmdlets have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we've categorized specific related properties into *PropertySets*. These PropertySets are simply buckets of two or more properties and are controlled by the following parameters on the V2 module cmdlets:

- *PropertySets*: This parameter accepts one or more property set names (with or without wildcards) separated by commas.

  This example returns the properties that are available in the Archive and Custom property sets:

  ```PowerShell
  Get-ExoMailbox -PropertySets Archive,Custom*
  ```

- *Property*: This parameter accepts one or more property names (with or without wildcards) separated by commas.

  This example returns the specified properties:

  ```PowerShell
  Get-ExoMailbox -Properties LitigationHoldEnabled,AuditEnabled
  ```

- You can specify *PropertySets* and *Properties* in the same command. For example:

  ```PowerShell
  *Get-ExoMailbox -Properties IsMailboxEnabled, SamAccountName -PropertySets Delivery
  ```

  ```PowerShell
  Get-ExoCASMailbox -Properties EwsEnabled, MAPIBlockOutlookNonCachedMode -PropertySets ActiveSync
  ```

- We've also included a Minimum property set (or *minset*) that includes a bare minimum set of properties:

  - If you don't specify the *PropertySets* parameter, you automatically get the properties that are included in the Minimum property set.

  - If you specify a *PropertySets* or *Property* parameter value, you only get those specified properties.

  For example, the **Get-Mailbox** cmdlet returns at least 60 properties. If you run the **Get-ExoMailbox** cmdlet with specific *Property* or *PropertySets* parameter values, the output object will contain only those specific properties, and the time it takes to return those results will be much faster.

  Refer to the individual V2 module cmdlet reference topics for more information on the *Property* and *PropertySets* parameters on each cmdlet.
