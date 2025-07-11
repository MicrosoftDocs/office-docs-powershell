---
title: "Security & Compliance PowerShell"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 9/1/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: 2f33bb84-cede-46f6-9d39-d246e8ce3543
search.appverid: MET150
description: "Learn about the articles that are available for using PowerShell for Microsoft Security & Compliance PowerShell."
---

# Security & Compliance PowerShell

Security & Compliance PowerShell is the administrative interface that enables you to manage compliance and some security features of your Microsoft 365 organization from the command line (mostly Microsoft Purview risk and compliance features that were formerly part of Microsoft 365 compliance). For example, you can use Security & Compliance PowerShell to perform Compliance Searches. The following articles provide information about using Security & Compliance PowerShell:

- To learn about the ExchangeOnlineManagement module that's required to connect to Security & Compliance PowerShell, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

  > [!TIP]
  > Version 3.0.0 and later (2022) is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module). Version 2.0.5 and earlier (2021) was known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module).

  To learn about what's new in the Exchange Online PowerShell module, see [What's new in the Exchange Online PowerShell module](whats-new-in-the-exo-module.md).

- To connect to Security & Compliance PowerShell, see [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md). The connection instructions are different from Exchange Online PowerShell or standalone Exchange Online Protection (EOP) PowerShell.

  To connect to Security & Compliance PowerShell for unattended scripts, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](app-only-auth-powershell-v2.md).

- To learn about the structure and layout of the cmdlet reference articles in Security & Compliance PowerShell, see [Exchange cmdlet syntax](exchange-cmdlet-syntax.md).

Security & Compliance PowerShell contains the following types of cmdlets:

- Cmdlets that correspond to features available only in Purview compliance and the Microsoft Purview compliance portal. Most cmdlets in Security & Compliance PowerShell fall into this category.
- Basic cmdlets that are also available in Exchange Online PowerShell (for example, [Get-User](/powershell/module/exchange/get-user), and [Get-RoleGroup](/powershell/module/exchange/get-rolegroup)).
- A few cmdlets that correspond to default protections for cloud mailboxes and protections in Microsoft Defender for Office 365 in the Microsoft Defender portal (for example, [Set-SecOpsOverridePolicy](/powershell/module/exchange/set-secopsoverridepolicy)).

  Cmdlets for most EOP and Defender for Office 365 security features (for example, [anti-spam policies](/defender-office-365/anti-spam-protection-about)) are available only in [Exchange Online PowerShell](exchange-online-powershell.md).

Check the **Applies to** value in the cmdlet references article to verify the PowerShell environment where the cmdlet actually resides.
