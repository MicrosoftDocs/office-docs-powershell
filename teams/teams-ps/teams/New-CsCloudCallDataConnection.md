---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: New-CsCloudCallDataConnection
online version: https://learn.microsoft.com/powershell/module/teams/new-cscloudcalldataconnection
schema: 2.0.0
author: 2012ucp1544
ms.author: uditagrawal
ms.reviewer: pbafna
manager: subadjat

---

# New-CsCloudCallDataConnection

## SYNOPSIS
This cmdlet creates an online call data connection.

## SYNTAX

```powershell
New-CsCloudCallDataConnection [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates an online call data connection. If you get an error that the connection already exists, it means that the call data connection already exists for your tenant. In this case, run Get-CsCloudCallDataConnection.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsCloudCallDataConnection

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

The New-CsCloudCallDataConnection cmdlet is only supported in commercial environments from Teams PowerShell Module versions 4.6.0 or later.

## RELATED LINKS

[Configure Call Data Connector](https://learn.microsoft.com/skypeforbusiness/hybrid/configure-call-data-connector)
[Get-CsCloudCallDataConnection](https://learn.microsoft.com/powershell/module/teams/get-cscloudcalldataconnection)
