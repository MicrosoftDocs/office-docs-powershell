---
title: Filters in the EXO V2 module
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
description: "Learn about how to use filtering for cmdlets in the Exchange Online V2 module."
---

# Filters in the EXO V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) contains a few exclusive **Get-EXO\*** cmdlets that are optimized for high speed, high volume operations, and (after you connect to your organization) gives you access to the hundreds of existing cmdlets in the service. For more information, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

In order to get the most out of the EXO V2 module, you need to follow the guidance in this article.

## Use client-side filtering for the best performance

Server-side filtering uses the available _Filter_ or _RecipientFilter_ parameters on a cmdlet.

Client-side filtering uses the [Where-Object](/powershell/module/microsoft.powershell.core/where-object) cmdlet (also known as **where** or **?**).

Generally, you get much better performance in Exchange PowerShell cmdlets with server-side filtering. However, for the EXO V2 module, you actually get better performance when you use client-side filtering. We're working on improving the performance of server-side filtering in the module.

## Unsupported filterable properties

The **Get-EXO\*** cmdlets in the EXO V2 module support the majority of [filterable properties](filter-properties.md) that are available in their older, equivalent cmdlets. But, there are currently some properties that don't work with filtering in the **Get-EXO\*** cmdlets. These properties are described in the following table:

|Cmdlet|Unsupported filterable property|LDAP Display Name|
|---|---|---|
|[Get-EXOCASMailbox](/powershell/module/exchange/get-exocasmailbox)|MemberOfGroup <br><br> ExternalDirectoryObjectId|memberOf <br><br> msExchExternalDirectoryObjectId|
|[Get-EXOMailbox](/powershell/module/exchange/get-exomailbox)|DeletedItemFlags <br><br> LanguagesRaw <p> MasterAccountSid <p> MemberOfGroup <p> RequireAllSendersAreAuthenticated <p> SCLDeleteThresholdInt <p> SCLJunkThresholdInt <p> SCLQuarantineThresholdInt <p> SCLRejectThresholdInt|deletedItemFlags <br><br> msExchUserCulture <p> msExchMasterAccountSid <p> memberOf <p> msExchRequireAuthToSendTo <p> msExchMessageHygieneSCLDeleteThreshold <p> msExchMessageHygieneSCLJunkThreshold <p> msExchMessageHygieneSCLQuarantineThreshold <p> msExchMessageHygieneSCLRejectThreshold|
|[Get-EXORecipient](/powershell/module/exchange/get-exorecipient)|CountryCode <br><br> ExternalDirectoryObjectId <p> MasterAccountSid <p> MemberOfGroup <p> Members|countryCode <br><br> msExchExternalDirectoryObjectId <p> msExchMasterAccountSid <p> memberOf <p> member|

## Supported operators

The following operators are fully supported for all string formats in the **Get-EXO\*** cmdlets in the EXO V2 module:

- [Logical operators](/powershell/module/microsoft.powershell.core/about/about_logical_operators):
  - `-and`
  - `-not`
  - `-or`

- [Comparison operators](/powershell/module/microsoft.powershell.core/about/about_comparison_operators)
  - `-eq`
  - `-ne`
  - `-lt`
  - `-gt`
  - `-like`
  - `-notlike`

The `-like` and `-notlike` operators are limited in using wildcards (*). Specifically, you can only use wildcards at the beginning of a string value, at the end of a string value, or both.

For example, the following text search is not supported:

`"UPN -like 'A*B*C'`

However, the following searches are supported:

`"UPN -like 'A*' -and UPN -like '*C' -and UPN like '*B*'"`
