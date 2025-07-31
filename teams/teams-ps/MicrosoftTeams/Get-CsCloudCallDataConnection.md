---
applicable: Microsoft Teams
author: 2012ucp1544
external help file: MicrosoftTeams-help.xml
Locale: en-US
manager: subadjat
Module Name: MicrosoftTeams
ms.author: uditagrawal
ms.reviewer: pbafna
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-cscloudcalldataconnection
schema: 2.0.0
title: Get-CsCloudCallDataConnection
---

# Get-CsCloudCallDataConnection

## SYNOPSIS
This cmdlet retrieves an already existing online call data connection.

## SYNTAX

```powershell
Get-CsCloudCallDataConnection [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves an already existing online call data connection. Output of this cmdlet contains a token value, which is needed when configuring your on-premises environment with Set-CsCloudCallDataConnector.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsCloudCallDataConnection

Token
-----
00000000-0000-0000-0000-000000000000
```

Returns a token value, which is needed when configuring your on-premises environment with Set-CsCloudCallDataConnector.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

The Get-CsCloudCallDataConnection cmdlet is only supported in commercial environments from Teams PowerShell Module versions 4.6.0 or later.

## RELATED LINKS

[Configure Call Data Connector](https://learn.microsoft.com/skypeforbusiness/hybrid/configure-call-data-connector)
[New-CsCloudCallDataConnection](https://learn.microsoft.com/powershell/module/microsoftteams/new-cscloudcalldataconnection)
