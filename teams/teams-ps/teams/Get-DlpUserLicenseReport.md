---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-DlpUserLicenseReport
author: icchan
ms.author: icchan
manager: amitar
online version: https://docs.microsoft.com/powershell/module/teams/get-dlpuserlicensereport
schema: 2.0.0
---

# Get-DlpUserLicenseReport

## SYNOPSIS

This cmdlet tells whether a user has required license to export their messages via [change notification subscription](https://docs.microsoft.com/en-us/graph/teams-licenses)

## SYNTAX

```
Get-DlpUserLicenseReport [-Period] <Number> 
```

## DESCRIPTION

This cmdlet supports retrieving the total no of messages sent by a user in chat/channel and whether a user has required license to sent change notification event when subscribed for chat messages. For more details please review https://docs.microsoft.com/en-us/graph/teams-licenses

## EXAMPLES

### Example
```powershell
PS C:\> Get-DlpUserLicenseReport -Period 7
```

Returns license info and total messages sent by users in last 7 days.

## PARAMETERS

### -Period

No. of days starting from today. Acceptable values are 7, 30, 90 and 180.

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS 
