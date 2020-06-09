---
title: Filters in the V2 module
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer: navgupta
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about how to use filtering for cmdlets in the Exchange Online V2 module."
---

# Filters in the Exchange Online V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) contains a few new cmdlets that are optimized for high speed, high volume operations, and (after you connect to your organization) gives you access to the hundreds of existing cmdlets in the service. For more information, see [Use the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

In order to get the most out of the EXO V2 module, you need to follow the guidance in this topic.

## Use client-side filtering for the best performance

Server-side filtering uses the available _Filter_ or _RecipientFilter_ parameters on a cmdlet. Client-side filtering uses the [Where-Object](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/where-object) cmdlet (also known as **where** or **?**).

Generally, you get much better performance with server-side filtering. However, for the EXO V2 module, you actually get better performance when using client-side filtering. We're working on improving the performance of server-side filtering in module.

## Supported and unsupported attributes

Although the EXO V2 module supports the majority of filterable attributes, the following attributes are currently not supported for filtering:

||||
|---|---|---|
|**Cmdlet**|**Attribute**|**LDAP Display Name**|
|[Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/get-casmailbox)|MemberOfGroup <br/><br/> ExternalDirectoryObjectId|memberOf <br/><br/> msExchExternalDirectoryObjectId|
|[Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/get-mailbox)|DeletedItemFlags <br/><br/> ExternalDirectoryObjectId <br/><br/> LanguagesRaw <br/><br/> MasterAccountSid <br/><br/> MemberOfGroup <br/><br/> RequireAllSendersAreAuthenticated <br/><br/> SCLDeleteThresholdInt <br/><br/> SCLJunkThresholdInt <br/><br/> SCLQuarantineThresholdInt <br/><br/> SCLRejectThresholdInt|deletedItemFlags <br/><br/> msExchExternalDirectoryObjectId <br/><br/> msExchUserCulture <br/><br/> msExchMasterAccountSid <br/><br/> memberOf <br/><br/> msExchRequireAuthToSendTo <br/><br/> msExchMessageHygieneSCLDeleteThreshold <br/><br/> msExchMessageHygieneSCLJunkThreshold <br/><br/> msExchMessageHygieneSCLQuarantineThreshold <br/><br/> msExchMessageHygieneSCLRejectThreshold|
|[Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/get-recipient)|CountryCode <br/><br/> ExternalDirectoryObjectId <br/><br/> MasterAccountSid <br/><br/> MemberOfGroup <br/><br/> Members|countryCode <br/><br/> msExchExternalDirectoryObjectId <br/><br/> msExchMasterAccountSid <br/><br/> memberOf <br/><br/> member|
|

## Supported and unsupported operators

The following operators are fully supported for all string formats in the EXO V2 module:

- -eq
- -and
- -ne
- -or
- -not
- -lt
- -gt

The -like and -notlike operators are limited in using wildcards (*). Specifically, you can only use wildcards at the beginning of a string value, at the end of a string value, or both.

For example, the following text search is not supported:

`"UPN  -like 'A*B*C'`

However, the following searches are supported:

`"UPN -like 'A*' -and UPN -like '*C' -and UPN like '*B*'"`
