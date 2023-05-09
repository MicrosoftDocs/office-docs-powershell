---
title: "Exchange Online Protection PowerShell"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date: 2/20/2018
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: f7918a88-774a-405e-945b-bc2f5ee9f748
description: "Learn about using PowerShell in Exchange Online Protection"
---

# Exchange Online Protection PowerShell

Exchange Online Protection PowerShell is the administrative interface that enables you to manage your standalone Exchange Online Protection (EOP) organization from the command line. For example, you can use Exchange Online Protection PowerShell to configure anti-spam policies, mail flow rules (also known as transport rules) and connectors.

Exchange Online Protection PowerShell includes the following Microsoft 365 environments:

- **Standalone EOP organizations**: Your Microsoft 365 subscription includes no Exchange Online mailboxes, because you use EOP to protect your on-premises email environment.
- **Exchange Enterprise CAL with Services**: The licenses for your on-premises Exchange organization include Exchange Enterprise CAL with Services (EOP is one of the services).

If your Microsoft 365 subscription includes Exchange Online mailboxes (A3/E3/G3, A5/E5/G5, Microsoft 365 Business Premium, etc.), the same EOP features are available in [Exchange Online PowerShell](exchange-online-powershell.md).

The following articles provide information about using Exchange Online Protection PowerShell:

- To learn about the Exchange Online PowerShell module that's required to connect to standalone Exchange Online Protection PowerShell, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

  > [!NOTE]
  > Version 2.0.5 and earlier is known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).

- To use PowerShell to connect to your standalone Exchange Online Protection organization using modern authentication and multi-factor authentication (MFA), see [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md).

- To learn about the structure and layout of the cmdlet reference articles in Exchange Online Protection PowerShell, see [Exchange cmdlet syntax](exchange-cmdlet-syntax.md).

- For a sample script that lets admins who manage multiple organizations apply configuration settings to all of their organizations, see [Sample script for applying EOP settings to multiple tenants](/exchange/standalone-eop/sample-script-standalone-eop-settings-to-multiple-tenants).
