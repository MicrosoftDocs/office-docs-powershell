---
title: Advantages of REST cmdlets over RPS
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
description: "This article includes the advantages of the Exchange Online PowerShell V3 module."
---

# Advantages of REST cmdlets over RPS (Remote PowerShell) 

- **More secure**: REST API cmdlets Have inherent support for modern authentication. Therefore, admins can turn off WinRM basic auth on their client machines.
- **More reliable**: REST API cmdlets handle transient failures with built-in retries. Therefore, it minimizes failures due to network delays, longer query execution times, etc. 
- **Better performance**: The connection establishment improves performance since it avoids setting up a PowerShell Runspace on the service and downloading the format table data XMLs.
- V3 REST module comparison with previously released cmdlets:

  |&nbsp;|RPS Cmdlets (v.2.0.5 and earlier)|9 EXO Cmdlets (e.g. Get-ExoMailbox)|V3 Module|
  |---|---|---|---|
  |Security|Least secure|Highly secure|Highly secure|
  |Performance|Low performance|High performance|Higher performance than RPS cmdlets but lower than the EXO cmdlets|
  |Reliability|least reliable|Highly reliable |Highly reliable|
  |Functionality|All parameters and output properties available|Limited parameters and output properties available|All parameters and output properties available|
