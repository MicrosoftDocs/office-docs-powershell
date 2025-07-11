---
title: "Exchange Online Protection PowerShell"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 9/1/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: f7918a88-774a-405e-945b-bc2f5ee9f748
description: "Learn about the articles that are available for using PowerShell in Exchange Online Protection (EOP) only organizations without cloud mailboxes."
---

# Exchange Online Protection PowerShell

Exchange Online Protection PowerShell is the administrative interface that enables you to manage security features in standalone Exchange Online Protection (EOP) organizations without cloud mailboxes from the command line. For example, you can use Exchange Online Protection PowerShell to configure anti-spam policies, mail flow rules (also known as transport rules) and connectors.

> [!TIP]
> Microsoft 365 organizations with cloud mailboxes (Microsoft 365 A3/E3/G3, A5/E5/G5, Microsoft 365 Business Premium, etc.) use [Exchange Online PowerShell](exchange-online-powershell.md) to manage these same features.

Exchange Online Protection PowerShell includes the following environments:

- **Standalone EOP organizations**: Your Microsoft 365 subscription includes no Exchange Online mailboxes, because you use EOP to protect your on-premises email environment.
- **Exchange Enterprise CAL with Services**: The licenses for your on-premises Exchange organization include Exchange Enterprise CAL with Services (EOP is one of the services).

The following articles provide information about using Exchange Online Protection PowerShell:

- To learn about the ExchangeOnlineManagement module that's required to connect to standalone Exchange Online Protection PowerShell, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

  > [!TIP]
  > Version 3.0.0 and later (2022) is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module). Version 2.0.5 and earlier (2021) was known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module).

  To learn about what's new in the Exchange Online PowerShell module, see [What's new in the Exchange Online PowerShell module](whats-new-in-the-exo-module.md).

- To connect to Exchange Online Protection PowerShell, see [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md).

- To learn about the structure and layout of the cmdlet reference articles in Exchange Online Protection PowerShell, see [Exchange cmdlet syntax](exchange-cmdlet-syntax.md).
