---
title: What's new in the Exchange Online PowerShell module
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: normal
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
keywords: what's new in exchange online powershell, what's new in security & compliance powershell, EXO V2 module, EXO V3 module
description: "Learn about the new features and functionality available in the latest release of the Exchange Online PowerShell module."
---

# What's new in the Exchange Online PowerShell module

This article lists new features in the Exchange Online PowerShell module that's used for connecting to Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. Features that are currently in preview are denoted with **(preview)**.

## December 2022

- The end of support for remote PowerShell in Exchange Online PowerShell (not in Security & Compliance PowerShell) has been announced. For more information, see [Announcing Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell](https://aka.ms/RPSDeprecation).

## September 2022

- Version 3.0.0 has been released, and is now known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module):
  - Version 3.0.0 is the Generally Availability (GA) release of the 2.0.6-PreviewX versions of the module.
  - All Exchange Online PowerShell cmdlets are now backed by the REST API. Basic authentication in WinRM is not required in Exchange Online PowerShell for REST API cmdlets.
  - Certificate based authentication (also known as CBA or app-only authentication) is available for Security & Compliance PowerShell.

  For more information, see [Updates for version 3.0.0 (the EXO V3 module)](exchange-online-powershell-v2.md#updates-for-version-300-the-exo-v3-module).
