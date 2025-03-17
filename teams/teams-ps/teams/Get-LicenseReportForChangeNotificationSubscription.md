---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-LicenseReportForChangeNotificationSubscription
author: serdarsoysal
ms.author: serdars
manager: alagra
online version: https://learn.microsoft.com/powershell/module/teams/get-licensereportforchangenotificationsubscription
schema: 2.0.0
---

# Get-LicenseReportForChangeNotificationSubscription

## SYNOPSIS

This cmdlet tells whether a user has the required license to export their messages via [change notification subscription](https://learn.microsoft.com/graph/teams-licenses).

## SYNTAX

```
Get-LicenseReportForChangeNotificationSubscription [-Period] <Number> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving the total number of messages sent by a user in chat/channel and whether a user has the required license(s) to send change notification events when subscribed for chat or channel messages. For more details, please review [Licenses for subscribing to chat messages](https://learn.microsoft.com/graph/teams-licenses).
This cmdlet is currently supported in preview version only.

## EXAMPLES

### Example
```powershell
PS C:\> Get-LicenseReportForChangeNotificationSubscription -Period 7
```

Returns license info and total messages sent by users in the last 7 days.

## PARAMETERS

### -Period

Number of days prior to today. Acceptable values are 7, 30, 90 and 180.

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
