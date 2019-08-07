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
description: "Learn how to download and use the REST API Client module for Exchange Online to connect to Exchange Online PowerShell."
---

# Use the REST API Client module for Exchange Online PowerShell

The REST API Client module for Exchange Online PowerShell allows you to connect to Exchange Online and use a select few cmdlets that have been updated to representational state transfer (REST). This update makes the cmdlets run much faster and are ideal for scripts or other actions on large numbers of users. The REST API Client module for Exchange Online PowerShell is available in the [PowerShell Gallery](https://www.powershellgallery.com/packages/ExchangeOnlineManagement).

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- You can use the following versions of Windows:

  - Windows 10

  - Windows 8.1

  - Windows Server 2019

  - Windows Server 2016

  - Windows Server 2012 or Windows Server 2012 R2

  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>

  - Windows Server 2008 R2 SP1<sup>*</sup>

    <sup>*</sup> For older versions of Windows, you need to install the Microsoft.NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Installing the .NET Framework](https://go.microsoft.com/fwlink/p/?LinkId=257868), [Windows Management Framework 3.0](https://go.microsoft.com/fwlink/p/?LinkId=272757), [Windows Management Framework 4.0](https://go.microsoft.com/fwlink/p/?LinkId=391344), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  `Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.`

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```
  Set-ExecutionPolicy RemoteSigned
  ```

  You need to configure this setting only once on your computer, not every time you connect.

- The REST API Client module for Exchange Online PowerShell needs to be installed on your computer:

  1. On your local computer, run the following command from an elevated Windows PowerShell session (a Windows PowerShell window you opened by selecting **Run as administrator**):

     ```
     Install-Module PowershellGet -Force
     ```

  2. When you're finished, close Windows PowerShell.

  3 Open an elevated Windows PowerShell session and run the following command:

     ```
     Install-Module -Name ExchangeOnlineManagement -RequiredVersion 0.3188.0-alpha -AllowPrerelease
     ```

     Enter **Y** to accept the license agreement.

- If the module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it if necessary:

  1. To see the version that's currently installed, run the following commands:

     ```
     Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
     ```

  2. If the **Version** property value is less than `0.3188.0`, run the following command from an elevated Windows PowerShell session to update the module:

     ```
     Update-Module -Name ExchangeOnlineManagement -RequiredVersion 0.3188.0-alpha -AllowPrerelease
     ```

     Enter **Y** to accept the license agreement.

     To confirm that the update was successful, run the following commands:

     ```
     Remove-Module ExchangeOnlineManagement; Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
     ```

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Use the REST API Client module to connect to Exchange Online PowerShell

1. On your local computer, open Windows PowerShell and run the following command:

   ```
   Import-Module ExchangeOnlineManagement
   ```

## See also

For more information about managing Office 365, see [Manage Office 365](https://docs.microsoft.com/Office365/).
