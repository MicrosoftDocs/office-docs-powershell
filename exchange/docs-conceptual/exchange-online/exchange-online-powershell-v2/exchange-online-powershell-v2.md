---
title: Exchange Online PowerShell V2
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
description: "Learn how to download and use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell."
---

# Use the Exchange Online PowerShell V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) enables admins to connect to their Exchange Online environment in Office 365 to retrieve data, create new objects, update existing objects, remove objects as well as configure Exchange Online & its features.

> [!TIP]
> The Exchange Online PowerShell V2 module is currently in Preview. If you have any feedback, concerns, or are facing any issues with the EXO V2 module, contact us at exocmdletpreview[at]service[dot]microsoft[dot]com (email address intentionally obscured to help prevent spam).

## What's new in the EXO V2 module?

The Exchange Online PowerShell V2 module contains a small set of new cmdlets that are optimized for bulk data retrieval scenarios (think: thousands and thousands of objects). It also contains the 700 or more older remote PowerShell cmdlets baked into the same module. Note that after you install the EXO V2 module from the PowerShell Gallery, you only see new cmdlets in the module. You'll see the older remote PowerShell cmdlets after you create a session to connect to your Exchange Online environment. All the cmdlets in the V2 module use Modern auth for authentication. You can't use Basic auth in the EXO V2 module.

The new cmdlets in the EXO V2 module are meant to replace their older, less efficient equivalents. However, the original cmdlets are still available in the EXO V2 module for backwards compatibility.

The new cmdlets in the EXO V2 module are listed in the following table:

|**New cmdlet in the EXO V2 module**|**Older related cmdlet**|
|:-----|:-----|
|[Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/connect-exchangeonline)|[Connect-EXOPSSession](https://docs.microsoft.com/powershell/exchange/exchange-online/connect-to-exchange-online-powershell/mfa-connect-to-exchange-online-powershell) <br/> or <br/> [New-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389621)|
|[Get-EXOMailbox](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailbox)|[Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailbox)|
|[Get-EXORecipient](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exorecipient)|[Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/users-and-groups/get-recipient)|
|[Get-EXOCASMailbox](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exocasmailbox)|[Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/client-access/get-casmailbox)|
|[Get-EXOMailboxPermission](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxpermission)|[Get-MailboxPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxpermission)|
|[Get-EXORecipientPermission](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exorecipientpermission)|[Get-RecipientPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-recipientpermission)|
|[Get-EXOMailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxstatistics)|[Get-MailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxstatistics)|
|[Get-EXOMailboxFolderStatistics](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxfolderstatistics)|[Get-MailboxFolderStatistics](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxfolderstatistics)|
|[Get-EXOMailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxfolderpermission)|[Get-MailboxFolderPermission](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxfolderpermission)|
|[Get-EXOMobileDeviceStatistics](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomobiledevicestatistics)|[Get-MobileDeviceStatistics](https://docs.microsoft.com/powershell/module/exchange/devices/get-mobiledevicestatistics)|

## Install and maintain the Exchange Online PowerShell V2 module

You can download the EXO V2 module from the PowerShell gallery [here](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/).

> [!NOTE]
> The latest version of PowerShell that's currently supported for the EXO V2 module is PowerShell 5.0. Support for PowerShell 6.0 or later is currently a work in progress and will be released soon.

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
  
- Windows Remote Management (WinRM) on your computer needs to allow basic authentication (it's enabled by default). To verify that basic authentication is enabled, run this command **in a Command Prompt**:

  ```
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run this command to enable basic authentication for WinRM:

  ```
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

  If basic authentication is disabled, you'll get this error when you try to connect:

  `The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.`

### Install the EXO V2 module

To install the EXO V2 module for the first time, run the following commands:

1. On your local computer, run the following command from an elevated Windows PowerShell session (a Windows PowerShell window you open by selecting **Run as administrator**):

   ```PowerShell
   Install-Module PowershellGet -Force
   ```

2. Windows PowerShell needs to be configured to run scripts, and by default, it isn't. To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window:

   ```PowerShell
   Set-ExecutionPolicy RemoteSigned
   ```

   **Notes**:

   - You need to configure this setting only once on your computer. Read more about execution policies [here](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies)

   - If you don't do this step, you'll receive the following error when you try to connect:

     > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

3. From an elevated Windows PowerShell session and run the following command:

   ```PowerShell
   Install-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

### Update the EXO V2 module

If the EXO V2 module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it if necessary.

1. To see the version of the EXO V2 module that's currently installed, run the following commands:

   ```PowerShell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. Run the following command to update the EXO V2 module to latest version that's available in the PowerShell Gallery:

   ```PowerShell
   Update-Module -Name ExchangeOnlineManagement
   ```

   Enter **Y** to accept the license agreement.

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

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/connect-exchangeonline).

## What's new in the EXO V2 module?

### Properties and property sets

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

- If you don't use the *PropertySets* or *Properties* parameters, you automatically get the properties that are included in the Minimum property set.

- If you use the *PropertySets* or *Properties* parameters, you you only get the specified properties.

Either way, the cmdlet output will contain far fewer properties, and the time it takes to return those results will be much faster.

This example returns the properties in the Minimum property set for the first ten mailboxes.

```PowerShell
Get-EXOMailbox -ResultSize 10
```

In contrast, the same **Get-Mailbox** cmdlet would return at least 230 properties for the same ten mailboxes.

For details about the property sets that are available in EXO V2 module cmdlets, see [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md) or the individual EXO V2 module cmdlet reference topics.

EXO cmdlets also provide a way to retreive all properties for an object by using the _ProperySets_ parameter with the value `All`.

The following example returns all properties for the 10 mailboxes: 

```PowerShell
Get-EXOMailbox -ResultSize 10 -PropertySets All
```

> [!NOTE]
> We highly discourage using the _PropertySets_ parameter with the value `All` because it slows down the cmdlet and reduces reliability. Always use the _PropertySets_ and _Properties_ parameters to retreive only the requires properties.

## Release notes

### Version 0.3527.3 (planned release date: January 20, 2020)

[Download](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/0.3527.3):

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
