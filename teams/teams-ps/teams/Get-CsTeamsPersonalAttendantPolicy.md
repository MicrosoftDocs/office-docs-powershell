---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamspersonalattendantpolicy
applicable: Microsoft Teams
title: Get-CsTeamsPersonalAttendantPolicy
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# Get-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Returns information about the Teams personal attendant policies configured for use in your organization.
Teams personal attendant policies help determine which users are able to use personal attendant and its functionalities within Microsoft Teams.

## SYNTAX

### Identity (Default)
```powershell
Get-CsTeamsPersonalAttendantPolicy [-Identity <string>] [<CommonParameters>]
```

### Filter
```powershell
Get-CsTeamsPersonalAttendantPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION

Returns information about the Teams personal attendant policies configured for use in your organization.
Teams personal attendant policies help determine which users are able to use personal attendant and its functionalities within Microsoft Teams.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsPersonalAttendantPolicy -Identity SalesPersonalAttendantPolicy
```

Retrieves the personal attendant policy with the Identity "SalesPersonalAttendantPolicy".

### Example 2
```powershell
Get-CsTeamsPersonalAttendantPolicy -Filter "tag:Sales*"
```

Retrieves the personal attendant policies with Identity starting with Sales.

## PARAMETERS

### -Identity
Specify the TeamsPersonalAttendantPolicy that you would like to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

The cmdlet is available in Teams PowerShell module ?.?.? or later.

## RELATED LINKS

[New-CsTeamsPersonalAttendantPolicy](./new-csteamspersonalattendantpolicy.md)

[Set-CsTeamsPersonalAttendantPolicy](./set-csteamspersonalattendantpolicy.md)

[Grant-CsTeamsPersonalAttendantPolicy](./grant-csteamspersonalattendantpolicy.md)

[Remove-CsTeamsPersonalAttendantPolicy](./remove-csteamspersonalattendantpolicy.md)


