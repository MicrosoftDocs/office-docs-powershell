---
title: New/Upcoming Cmdlets/Parameters/Releases 
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
description: "This article describes the new features of the Exchange Online PowerShell V3 module."
---

# New/Upcoming Cmdlets/Parameters/Releases

The Exchange Online PowerShell V3 module (EXO V3 module) would also contain the following additional REST cmdlets:

## Get-ConnectionInformation

This cmdlet can be used to get current connection information. It is available as part of the module and a user can run this without running Connect-ExchangeOnline. For syntax and other details, see [Get-ConnectionInformation.](https://docs.microsoft.com/powershell/module/exchange/get-connectioninformation?view=exchange-ps&preserve-view=true)

This command returns the following properties of each Add connection.

:::image type="content" source="media/get-connection-info-v3.png" alt-text="Image of the get-connection cmdlet.":::

**Cmdlet scenarios where this may be invoked**:

|Scenario  |Expected output |
|---------|---------|
|Invoke before running Connect-ExchangeOnline.    |  Should not return any thing.       |
|Invoke after Connect-ExchangeOnline.    |  Should return one Connection/Information object.       |
|Invoke after multiple Connect-ExchangeOnline.    |Should return collection of connection/Information object. |
|Invoke after Conect-ExchangeOnline -UseRPSSession. |Should not return any object.      |
|Invoke after connect-ExchangeOnline and Connect-ExchangeOnline -UseRPSSession.    | Should return one connection/information object for Rest. Ignore RPS session information. |


**Cmdlet Properties**:

|Name  |Type  |Uses   |Example  |
|---------|---------|---------|---------|
|ConnectionId  | Guid         | Unique guid assigned to each connection  | ea905666-0f12-402a-8464-2331f3198d88  |
|Name     | String    | Name of the connection | ExchangeOnlineSession_1 |
|Id     |  Int        | Connection count         | 1         |
|ConnectionUri     |String          | Exchange Connection URL          | https://outlook.office365.com |
|TokenProvider     |  ITokenProvider       | Token Provider information         | Microsoft.Exchange.Management.AdminApiProvider.Authentication.MSALTokenProvider         |
|TokenExpiryTime     |DateTimeOffset         | Time of token expiry          | 6/1/2022 8:28:28 AM +00:00 |
|CertificateAuthentication      | Bool         | Indicate if it is cert based auth or not        |True/False |
|AppId      | string         | App id used to connect exchange         | ea905666-0f12-402a-8464-2331f3198d88         |
|PageSize      | Int         |Page size for each response          |  1000       |
|Organization     | String        | Organization parameter used to connect to exchange. Useful during certificate flow         |  Contoso.com        |
|DelegatedOrganization     | string         | Delegate Organization used to connect to exchange. Useful during certificate flow        | delegateContoso.com         |
|AzureAdAuthorizationEndpointUri    | String         | Azure AD EndPoint Uri         |https://login.microsoftonline.com/organizations |

**Cmdlet Parameter**

This cmdlet will not accept any parameter.

## SkipLoadingFormatData parameter

By default, the output now will be formatted similar to version 2.0.5. The -SkipLoadingFormatData switch parameter can be specified with Connect-ExchangeOnline to avoid loading the format data and execute Connect-ExchangeOnline faster.

Example: 

Connect-ExchangeOnline -SkipLoadingFormatData
