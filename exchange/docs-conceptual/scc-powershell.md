---
title: "Security & Compliance PowerShell"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date: 8/21/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: 2f33bb84-cede-46f6-9d39-d246e8ce3543
search.appverid: MET150
description: "Learn about using Security & Compliance PowerShell."
---

# Security & Compliance PowerShell

Security & Compliance PowerShell is the administrative interface that enables you to manage the features that are available in the Microsoft 365 Defender portal and the Microsoft Purview compliance portal from the command line. For example, you can use Security & Compliance PowerShell to perform Compliance Searches. The following articles provide information about using Security & Compliance PowerShell:

- To learn about the Exchange Online PowerShell module that's required to connect to Security & Compliance PowerShell, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

  > [!NOTE]
  > Version 2.0.5 and earlier is known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).

- To learn about what's new in the Exchange Online PowerShell module, see [What's new in the Exchange Online PowerShell module](whats-new-in-the-exo-module.md).

- To create a PowerShell session that supports both modern authentication and multi-factor authentication (MFA), see [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md). The connection instructions are different from Exchange Online PowerShell or standalone Exchange Online Protection (EOP) PowerShell (the _ConnectionUri_ value is different).

- To learn about app-only authentication (also known as certificate based authentication or CBA) in Security & Compliance PowerShell for unattended scripts using AzureAD applications and self-signed certificates, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](app-only-auth-powershell-v2.md).

- To learn about the structure and layout of the cmdlet reference articles in Security & Compliance PowerShell, see [Exchange cmdlet syntax](exchange-cmdlet-syntax.md).

Many of the cmdlets that are available in Security & Compliance PowerShell correspond to features that are only available in the Microsoft Purview compliance portal, so the related cmdlets are exclusive to Security & Compliance PowerShell. But, some cmdlets that are available in Security & Compliance PowerShell have the same names and functionality as those in Exchange Online PowerShell (for example, [Get-User](/powershell/module/exchange/get-user)).

Also, some features that are available in the Microsoft 365 Defender portal (for example, [anti-spam](/microsoft-365/security/office-365-security/anti-spam-protection) cmdlets are only available in [Exchange Online PowerShell](exchange-online-powershell.md)). Check the **Applies to** value in the cmdlet reference article to verify where the cmdlet actually resides.
