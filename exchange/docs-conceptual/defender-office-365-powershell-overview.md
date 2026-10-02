---
title: Microsoft Defender for Office 365 PowerShell overview
description: "Learn how Microsoft Defender for Office 365 PowerShell helps customers manage Defender portal features by using Defender Unified RBAC permissions."
author: chrisda
ms.author: chrisda
ms.service: exchange-online
ms.topic: concept-article
ms.custom: msecd-doc-authoring-1015
ms.date: 07/31/2026
ms.audience: Admin
ms.localizationpriority: high
ai-usage: ai-assisted

#customer intent: As a security admin, I want to understand Microsoft Defender for Office 365 PowerShell so that I can manage Defender portal features by using the correct connection and permissions model.
---

# Microsoft Defender for Office 365 PowerShell overview

Microsoft Defender for Office 365 PowerShell provides a security-focused subset of Exchange Online PowerShell cmdlets for customers who use [Defender Unified role-based access control (RBAC)](/defender-xdr/manage-rbac) permissions in the Microsoft Defender portal.

Defender for Office 365 PowerShell uses the Exchange Online PowerShell module and existing connection infrastructure. It doesn't replace the module or create a separate module.

To determine whether a cmdlet is available in Defender for Office 365 PowerShell, look for the value `Microsoft Defender for Office 365` in the **Applies to** (`applicable`) property in cmdlet reference articles. The cmdlets imported into your session also depend on your effective permissions.

## Connections and command precedence

The **Connect-DefenderForOffice365** cmdlet creates a REST API connection to Defender for Office 365 PowerShell. The `IsMdoSecuritySession` property returned by the [Get-ConnectionInformation](/powershell/module/exchangepowershell/get-connectioninformation) cmdlet identifies this connection type.

If you connect to multiple PowerShell environments in the same PowerShell window, overlapping cmdlets from the most recent connection take precedence. Separate PowerShell windows or the _Prefix_ parameter can help prevent commands from running in the wrong authorization context.

## Supported cloud environments

Defender for Office 365 PowerShell is available in Microsoft 365, Microsoft 365 GCC, Microsoft 365 GCC High, and Microsoft 365 DoD.

## Related content

- [Connect to Microsoft Defender for Office 365 PowerShell](connect-to-defender-for-office-365-powershell.md)
- [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md)
- [Microsoft Defender Unified RBAC](/defender-xdr/manage-rbac)
