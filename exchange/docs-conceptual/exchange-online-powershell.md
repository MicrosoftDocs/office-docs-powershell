---
title: "Exchange Online PowerShell"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 05/07/2025
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: 1cb603b0-2961-4afe-b879-b048fe0f64a2
search.appverid: MET150
description: "Learn about articles that are available for using PowerShell in Exchange Online."
---

# Exchange Online PowerShell

Exchange Online PowerShell is the administrative interface that enables you to manage the Exchange Online part of your Microsoft 365 organization from the command line (including many security features in Exchange Online Protection and Microsoft Defender for Office 365). For example, you can use Exchange Online PowerShell to configure mail flow rules (also known as transport rules) and connectors. The following articles provide information about using Exchange Online PowerShell:

- To learn about the ExchangeOnlineManagement module that's required to connect to Exchange Online PowerShell, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

  > [!TIP]
  > Version 3.0.0 and later (2022) is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module). Version 2.0.5 and earlier (2021) was known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module).

  To learn about what's new in the Exchange Online PowerShell module, see [What's new in the Exchange Online PowerShell module](whats-new-in-the-exo-module.md).

- To connect to Exchange Online PowerShell, see [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).

  To learn about different methods to connect to Exchange Online PowerShell, see the following articles:

  - [App-only authentication for unattended scripts in the Exchange Online PowerShell module](app-only-auth-powershell-v2.md).
  - [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).
  - [Use C# to connect to Exchange Online PowerShell](connect-to-exo-powershell-c-sharp.md)

- To block or allow access to Exchange Online PowerShell in your organization, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- To learn about the structure and layout of the cmdlet reference articles in Exchange Online PowerShell, see [Exchange cmdlet syntax](exchange-cmdlet-syntax.md).

- To find the permissions that you need to run a specific cmdlet, or one or more parameters on a cmdlet, see [Find the permissions required to run any Exchange cmdlet](find-exchange-cmdlet-permissions.md).

- To learn about recipient filters in Exchange Online PowerShell, see [Recipient filters in Exchange Management Shell and Exchange Online PowerShell commands](recipient-filters.md).

- To learn about recipient filters for the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell, see [Filters in the Exchange Online PowerShell module](filters-v2.md).

- To learn about property sets in the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell module, see [Property sets in Exchange Online PowerShell module cmdlets](cmdlet-property-sets.md).
