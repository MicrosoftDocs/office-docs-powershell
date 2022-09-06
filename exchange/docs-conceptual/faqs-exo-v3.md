---
title: FAQS about Exchange Online PowerShell V3 module
ms.author: v-mathavale
author: v-mathavale
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: navgupta
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Admins can learn about the FAQs on the installation, maintenance, and design of the Exchange Online PowerShell V3 module that they use to connect to all Exchange-related PowerShell environments in Microsoft 365."
---

# How to troubleshoot Exchange Online PowerShell V3 module issues

Here's a collection of information on how to identify and fix errors that you may run into when you use Exchange Online PowerShell V3 module.

## Which are the supported operating systems for EXO V3 module?

All the operating system versions listed in [Supported Operating Systems for EXO V2 module](exchange-online-powershell-v2.md#supported-operating-systems-for-the-exo-v2-module) are supported for EXO V3 Module as well.

## What are the prerequisites for EXO V3 module?

The pre-requisites for EXO V2 module are applicable to the V3 module as well. Refer to [Prerequisites for the EXO V2 module](exchange-online-powershell-v2.md#prerequisites-for-the-exo-v2-module) for V3 module prerequisites.

## How to install the EXO V3 module?

You can download the EXO V3 module from the [PowerShell gallery](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/)  

To install the EXO V3 module for the first time, complete the following steps:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget).

2. Close and re-open the Windows PowerShell window.

3. Now you can use the **Install-Module** cmdlet to install the EXO V3 module from the PowerShell Gallery. Typically, you'll want the latest public version of the module, but you can also install a Preview version if one is available.

   - To install **the latest public version** of the module, run **one** of the the following commands:

     - In an elevated PowerShell window (all users), run:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement
       ```

     - Only for the current user account:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
       ```

For detailed syntax and parameter information, see [Install-Module](/powershell/module/powershellget/install-module).

## How to connect to the Exchange Online PowerShell using V3 Module? 

Once you have downloaded and installed the EXO V3 module, refer to the following relevant scenarios to connect to the Exchange Online PowerShell:

### Scenario 1: Connections to Exchange Online PowerShell 
Your existing PowerShell module connection is similar to the following: 

```powershell
$Session = $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection 
```
Using the EXO V3 module, you can connect using: 

```powershell
Connect-ExchangeOnline -ConnectionUri https://outlook.office365.com/powershell-liveid/ -UserPrincipalName sally@contoso.com 
```





