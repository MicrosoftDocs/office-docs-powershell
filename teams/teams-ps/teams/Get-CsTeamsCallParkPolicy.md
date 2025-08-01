---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscallparkpolicy
applicable: Microsoft Teams
title: Get-CsTeamsCallParkPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsTeamsCallParkPolicy

## SYNOPSIS

The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in Microsoft Teams.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different Teams phone.  The Get-CsTeamsCallParkPolicy cmdlet returns the policies that are available for your organization.

NOTE: the call park feature is currently only available in the desktop and web clients.  Call Park functionality is currently completely disabled in mobile clients.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsCallParkPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsCallParkPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different phone.  The Get-CsTeamsCallParkPolicy cmdlet returns the policies that are available for your organization.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsCallParkPolicy
```

Retrieve all policies that are available in your organization.

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

### -LocalStore
Internal Microsoft use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
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

## RELATED LINKS
