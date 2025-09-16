---
title: What's new in the Exchange Online PowerShell module
ms.author: chrisda
author: chrisda
manager: orspodek
ms.date: 06/23/2025
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: medium
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
keywords: what's new in exchange online powershell, what's new in security & compliance powershell, EXO V2 module, EXO V3 module
description: "Learn about the new features and functionality available in the latest release of the Exchange Online PowerShell module."
---

# What's new in the Exchange Online PowerShell module

This article lists new features in the Exchange Online PowerShell module used for connecting to Exchange Online PowerShell, Security & Compliance PowerShell, and Exchange Online Protection PowerShell for cloud protection of on-premises email environments. Features that are currently in preview are denoted with **(preview)**.

## May 2025

- [Version 3.8.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.8.0)

  - For information about what's in this release, see [Version 3.8.0](exchange-online-powershell-v2.md#version-380).

## March 2025

- [Version 3.7.2](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.7.1)

  For information about what's in this release, see [Version 3.7.2](exchange-online-powershell-v2.md#version-372).

## January 2025

- [Version 3.7.1](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.7.1)

  For information about what's in this release, see [Version 3.7.1](exchange-online-powershell-v2.md#version-371).

## December 2024

- [Version 3.7.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.7.0)

  Starting with this version of the module, command line help for Exchange Online PowerShell cmdlets is no longer loaded by default. Use the _LoadCmdletHelp_ parameter in the **Connect-ExchangeOnline** command so help for Exchange Online PowerShell cmdlets is available to the **Get-Help** cmdlet.

  For information about what's in this release, see [Version 3.7.0](exchange-online-powershell-v2.md#version-370).

## September 2024

- [Version 3.6.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.6.0)

  For information about what's in this release, see [Version 3.6.0](exchange-online-powershell-v2.md#version-360).

## July 2024

- [Version 3.5.1](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.5.1) has been released.

  For information about what's in this release, see [Version 3.5.1](exchange-online-powershell-v2.md#version-351).

## May 2024

- [Version 3.5.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.5.0) has been released.

  For information about what's in this release, see [Version 3.5.0](exchange-online-powershell-v2.md#version-350).

## October 2023

- [Version 3.4.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.4.0)

  For information about what's in this release, see [Version 3.4.0](exchange-online-powershell-v2.md#version-340).

## September 2023

- [Version 3.3.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.3.0) has been released.

  For information about what's in this release, see [Version 3.3.0](exchange-online-powershell-v2.md#version-330).

## June 2023

- [Version 3.2.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.2.0) has been released.

- [Virtually all](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432) Security & Compliance PowerShell cmdlets are now backed by the REST API, and REST API is used by default. To connect using remote PowerShell mode (which requires [Basic authentication in WinRM](exchange-online-powershell-v2.md#turn-on-basic-authentication-in-winrm)), use the _UseRPSSession_ switch in the **Connect-IPPSSession** command.

  For information about what's in this release, see [Version 3.2.0](exchange-online-powershell-v2.md#version-320).

## May 2023

- The end of support for remote PowerShell in Security & Compliance PowerShell has been announced. For more information, see [Announcing Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432).

- [Version 3.2.0-Preview4](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.2.0-Preview4) has been released.

  This version supports the Preview of Security & Compliance cmdlets backed by the REST API. Some, but not all cmdlets are supported. Basic authentication in WinRM is not required in Security & Compliance PowerShell for REST API cmdlets.

  > [!NOTE]
  > The default value of the _UseRPSSession_ switch in **Connect-IPSSession** is now the same as **Connect-ExchangeOnline**. To connect in REST API mode, don't use the _UseRPSSession_ switch in the **Connect-IPPSSession** command. To connect using remote PowerShell mode (which requires [Basic authentication in WinRM](exchange-online-powershell-v2.md#turn-on-basic-authentication-in-winrm)), use the _UseRPSSession_ switch in the **Connect-IPPSSession** command.
  >
  > REST API connections in the EXO V3 module require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).

## April 2023

- [Version 3.2.0-Preview3](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.2.0-Preview3) has been released.

  This version supports the Preview of Security & Compliance cmdlets backed by the REST API. Some, but not all cmdlets are supported. Basic authentication in WinRM is not required in Security & Compliance PowerShell for REST API cmdlets.

  > [!NOTE]
  > The default value of the _UseRPSSession_ switch in **Connect-IPSSession** is opposite of **Connect-ExchangeOnline**. To connect in REST API mode, use `-UseRPSSession:$false` in the **Connect-IPPSSession** command. To connect using remote PowerShell mode (which requires [Basic authentication in WinRM](exchange-online-powershell-v2.md#turn-on-basic-authentication-in-winrm)), don't use the _UseRPSSession_ switch in the **Connect-IPPSSession** command. The default behavior will change in a later version of the module as more Security & Compliance cmdlets are available in REST API mode.

## January 2023

- [Version 3.1.0](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.1.0) has been released.

  For information about what's in this release, see [Version 3.1.0](exchange-online-powershell-v2.md#version-310).

## December 2022

- The end of support for remote PowerShell in Exchange Online PowerShell (not in Security & Compliance PowerShell) has been announced. For more information, see [Announcing Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell](https://aka.ms/RPSDeprecation).

## September 2022

- Version 3.0.0 has been released, and is now known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module):
  - Version 3.0.0 is the Generally Availability (GA) release of the 2.0.6-PreviewX versions of the module.
  - All Exchange Online PowerShell cmdlets are now backed by the REST API. Basic authentication in WinRM is not required in Exchange Online PowerShell for REST API cmdlets.

    > [!TIP]
    > REST API connections in the EXO V3 module require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).

  - Certificate based authentication (also known as CBA or app-only authentication) is available for Security & Compliance PowerShell.

  For more information, see [REST API connections in the EXO V3 module](exchange-online-powershell-v2.md#rest-api-connections-in-the-exo-v3-module) and [Version 3.0.0](exchange-online-powershell-v2.md#version-300-preview-versions-known-as-v206-previewx).
