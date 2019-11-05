---
title: "Exchange Online Protection PowerShell"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date: 2/20/2018
ms.audience: Admin
ms.topic: article
ms.service: eop
localization_priority: Normal
ms.assetid: f7918a88-774a-405e-945b-bc2f5ee9f748
description: "Learn about using PowerShell in Exchange Online Protection"
---

# Exchange Online Protection PowerShell

Exchange Online Protection PowerShell is the administrative interface that enables you to manage your Exchange Online Protection (EOP) organization from the command line. For example, you can use Exchange Online Protection PowerShell to configure mail flow rules (also known as transport rules) and connectors.

> [!NOTE]
> Exchange Online Protection PowerShell is only used in *standalone* EOP organizations (for example, you have a standalone EOP subscription to protect your on-premises email environment). If you have an Office 365 subscription that includes EOP (E3, E5, etc.), you don't use Exchange Online Protection PowerShell; the same features are available in [Exchange Online PowerShell](../exchange-online/exchange-online-powershell.md).

The following topics provide information about using Exchange Online Protection PowerShell:

- To create a remote PowerShell session to your standalone Exchange Online Protection organization, see [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md).

- For a sample script that lets admins who manage multiple tenants (companies) apply configuration settings to their tenants, see [Sample script for applying EOP settings to multiple tenants](https://docs.microsoft.com/microsoft-365/security/office-365-security/sample-script-for-applying-eop-settings-to-multiple-tenants).

- The following introductory video shows you how to connect to and use Exchange Online Protection PowerShell.

  **Note:** This video applies to Exchange Online and standalone EOP organizations. When you connect to your organization, be sure to specify the correct URL (_ConnectionUri_ value). The required URL is different for Exchange Online and standalone EOP organizations.

  [Use Remote PowerShell in EOP](https://videoplayercdn.osi.office.net/hub/?csid=ux-cms-en-us-msoffice&uuid=9cb28006-c2cb-45b6-b72e-eeed8767dee7&AutoPlayVideo=false)
