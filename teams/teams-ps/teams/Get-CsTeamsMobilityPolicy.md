---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsmobilitypolicy
applicable: Microsoft Teams
title: Get-CsTeamsMobilityPolicy
schema: 2.0.0
manager: ritikag
ms.reviewer: ritikag
---

# Get-CsTeamsMobilityPolicy

## SYNOPSIS
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

The Get-CsTeamsMobilityPolicy cmdlet allows administrators to get all teams mobility policies.

NOTE: Please note that this cmdlet was deprecated and then removed from this PowerShell module. This reference will continue to be listed here for legacy purposes.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMobilityPolicy
```
Retrieve all teams mobility policies that are available in your organization

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. For example, to return a collection of all the per-user policies, use this syntax: -Filter "tag:".

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specify the unique name of a policy you would like to retrieve

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
