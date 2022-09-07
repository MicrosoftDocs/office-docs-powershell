---
title: FAQS on Exchange Online PowerShell V3 module
ms.author: v-mathavale
author: v-mathavale
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: abhishekku
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Admins can learn about the FAQs on Exchange Online PowerShell V3 module."
---

# FAQs on Exchange Online PowerShell V3 module

The following are FAQs on the Exchange Online PowerShell V3 module.

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
You may have to use one of the following URI depending on your service endpoint: 

|Service endpoint   |URI to use   |
|---------|---------|
|Office 365 operated by 21Vianet      | [https://partner.outlook.cn/PowerShell](https://partner.outlook.cn/PowerShell)         |
|Office 365 Germany      |[https://outlook.office.de/powershell-liveid/ ](https://outlook.office.de/powershell-liveid/ )         |
|Microsoft 365 GCC High      | [https://outlook.office365.us/powershell-liveid/ ](https://outlook.office365.us/powershell-liveid/ )        |
|Microsoft 365 DoD    |  [https://webmail.apps.mil/powershell-liveid ](https://webmail.apps.mil/powershell-liveid )       |

### Scenario 2: Connections to Security and Compliance Center PowerShell 

Your existing PowerShell connection is similar to the following: 

```powershell
$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection 
```

Using the Exchange V3 module, you can connect using: 

```powershell
Connect-IPPSSession -Credential (Get-Credential) -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/ 
```
This scenario still uses RPS cmdlets, so it requires client machine basic auth on WinRM. 

You may have to use one of the following URI depending on your service endpoint: 

|Service endpoint   |URI to use   |
|---------|---------|
|Microsoft 365 GCC High     | [https://ps.compliance.protection.office365.us/powershell-liveid/ ](https://ps.compliance.protection.office365.us/powershell-liveid/ )        |
|Microsoft 365 DoD     | [https://l5.ps.compliance.protection.office365.us/powershell-liveid/ ](https://l5.ps.compliance.protection.office365.us/powershell-liveid/ )        |

### Scenario 3: Connections to Exchange Online Protection PowerShell 

Your existing PowerShell connection is similar to the following: 

```powershell
$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection 
```

Using the Exchange V3 module, you can connect using: 

```powershell
Connect-IPPSSession -Credential (Get-Credential) -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/ 
```
This scenario still uses RPS cmdlets, so it requires client machine basic auth on WinRM. 

You may have to use one of the following URI depending on your service endpoint: 

|Service endpoint   |URI to use  |
|---------|---------|
|Office 365 Germany      | [https://ps.protection.outlook.de/powershell-liveid/ ](https://ps.protection.outlook.de/powershell-liveid/ )        |
|For Exchange Server organizations with Exchange Enterprise CAL with Services licenses     |[https://outlook.office365.com/powershell-liveid ](https://outlook.office365.com/powershell-liveid )         |

## How to move from Exchange PowerShell V1 to EXO V3 module?

Refer to [this blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/moving-from-the-exchange-powershell-v1-module-to-the-v2-preview/ba-p/3450679)for more details on moving from the Exchange PowerShell v1 to EXO V3 or V2 preview module.  

## How to update the EXO V3 module?

Refer [this document](exchange-online-powershell-v2.md#update-the-exo-v2-module) to update the EXO V3 module. It is similar to the EXO V2 module.

## How to uninstall the EXO V3 module?

To uninstall the module, run one of the following commands based on how you originally installed the module (in an elevated PowerShell window vs. Scope CurrentUser): 

- In an elevated PowerShell window (all users), run: 

```powershell
Uninstall-Module -Name ExchangeOnlineManagement 
```

- Only for the current user account, run: 

```powershell
Uninstall-Module -Name ExchangeOnlineManagement 
```
For details about syntax and parameter information, see [Uninstall-Module.](/powershell/module/powershellget/uninstall-module)  

## Are Security and Compliance PowerShell and Exchange Online Protection PowerShell cmdlets REST Based? 

No, currently both are available only in their RPS versions. 

If you use the EOP or SCC cmdlets, you need to keep WinRM Basic Auth turned on, on the client machines.  

## How to troubleshoot Exchange Online PowerShell v3 module? 

Here's a collection of information on how to identify and fix errors that you may run into when you use this product. 