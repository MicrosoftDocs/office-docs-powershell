---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csphonenumbertenantconfiguration
schema: 2.0.0
title: Get-CsPhoneNumberTenantConfiguration
---

# Get-CsPhoneNumberTenantConfiguration

## SYNOPSIS
This cmdlet displays existing tenant level telephone number default configurations.

## SYNTAX

```
Get-CsPhoneNumberTenantConfiguration [<CommonParameters>]
```

## DESCRIPTION

This cmdlet displays existing tenant level telephone number default configurations.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsPhoneNumberTenantConfiguration
```
```output
AssignmentEmailEnabled        : True
UnassignmentEmailEnabled      : True
AssignmentBlockedForever      :
AssignmentBlockedDays         :
AllowOnPremToOnlineMigration  : 
TenantId                      : 407c17ae-8c41-431e-894a-38787c682f68
```

This example that email notifications are enabled for any telephone number assignment and unassignment operations. End users will receive an email about the change unless configuration is overridden during assignment or unassignment operations. 

### Example 2
```powershell
PS C:\> Get-CsPhoneNumberTenantConfiguration
```
```output
AssignmentEmailEnabled        : False
UnassignmentEmailEnabled      : False
AssignmentBlockedForever      : True
AssignmentBlockedDays         :
AllowOnPremToOnlineMigration  : 
TenantId                      : 407c17ae-8c41-431e-894a-38787c682f68
```

This example displays that both email notifications and AssignmentBlockedForever is set by default. If a telephone number is unassigned, an email is sent to end user and the number is blocked from new assignment until the [block is manually removed](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumberassignmentblock?view=teams-ps).


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### AssignmentEmailEnabled

Boolean stating if email notifications would be sent for telephone number assignment operations.

### UnassignmentEmailEnabled

Boolean stating if email notifications would be sent for telephone number unassignment operations.

### AssignmentBlockedForever

Boolean stating if assignment is blocked indefinitely.

### AssignmentBlockedDays

The number of days that assignment is blocked.

### AllowOnPremToOnlineMigration

Boolean stating if migrating Direct Routing numbers from OnPremises to Online is supported.

## NOTES

## RELATED LINKS

- [Remove-CsPhoneNumberTenantConfiguration](Remove-CsPhoneNumberTenantConfiguration.md)
- [Set-CsPhoneNumberTenantConfiguration](Set-CsPhoneNumberTenantConfiguration.md)
