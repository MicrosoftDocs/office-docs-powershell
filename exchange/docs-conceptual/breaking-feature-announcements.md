---
title: Breaking feature announcements 
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
description: "This article lists the new features of the Exchange Online PowerShell V3 module."
---

# Breaking feature announcements

1. Get-PSSession cannot be used to get information about the sessions created as PowerShell Remoting is no longer being used. The `Get-ConnectionInformation` cmdlet has been introduced instead, to get information about the existing connections to ExchangeOnline. For more information, see [Get-ConnectionInformation.](/powershell/module/exchange/get-connectioninformation?view=exchange-ps)

2. Certain cmdlets that used to prompt for confirmation in specific scenarios will no longer have this prompt and the cmdlet will run to completion by default.

3. The format of the error returned from a failed cmdlet execution has been slightly modified. The Exception contains some additional data such as the exception type, and the `FullyQualifiedErrorId` does not contain the `FailureCategory`. The format of the error is subject to further modifications.
