---
title: About the Exchange Online PowerShell V3 module
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: navgupta
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Admins can learn about the installation, maintenance, and design of the Exchange Online PowerShell V3 module that they use to connect to all Exchange-related PowerShell environments in Microsoft 365."
---

# About the Exchange Online PowerShell V3 module

The Exchange Online PowerShell V3 module (EXO V3 module) supports modern authentication and enables the use of Exchange Online cmdlets via REST API calls. EXO V3 is an upgrade over the V2 module, which had RPS cmdlets and 9 REST-based EXO cmdlets. The V3 module's preview version was called the V2.0.6 preview, and therefore there are similarities between this preview module and the V3 Module.

The EXO V3 module includes REST equivalents of all cmdlets available within the V2 module and new features will be introduced later.

> [!NOTE]
> The cmdlets for Security & Compliance PowerShell and standalone Exchange Online Protection (EOP) PowerShell still have only their RPS versions available. The REST equivalents of these cmdlets should be available in the V3 Module in the upcoming releases.

## Advantages of REST cmdlets over RPS 

- **More Secure**: Has inherent support for modern auth. Therefore, admins can turn off WinRM basic auth on their client machines.
- **More Reliability**: Handles transient failures with built-in retries. Therefore, it minimizes failures due to network delays, longer query execution times, etc. 
- **More Performant**: The connection establishment improves performance since it avoids setting up a PowerShell Runspace on the service and downloading the format table data XMLs.
- V3 REST Module comparison with Previously released cmdlets:

    | |RPS Cmdlets (v.2.0.5 and earlier) |9 EXO Cmdlets (e.g. Get-ExoMailbox) |V3 Module   |
    |---------|---------|---------|---------|
    |Security     |  Least secure  | Highest security | Highest security |
    |Performance     |  Least performant        | Highest Performant         | Higher performance than RPS cmdlets but lower than the EXO cmdlets         |
    |RReliability      | Least reliability | Highest Reliability |Highest Reliability          |
    |Functionality     | Allows More functionality than the *EXO cmdlets         |  Minimum functionality available        | functionality at par with RPS cmdlets |

## Connection Instructions using the V3 module

For detailed instructions, see **Connection Instructions using the V3 module** under FAQ.