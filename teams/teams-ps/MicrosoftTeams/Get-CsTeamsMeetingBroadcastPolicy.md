---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingbroadcastpolicy
schema: 2.0.0
title: Get-CsTeamsMeetingBroadcastPolicy
---

# Get-CsTeamsMeetingBroadcastPolicy

## SYNOPSIS
User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsMeetingBroadcastPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsMeetingBroadcastPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.  Use this cmdlet to retrieve one or more policies.

## EXAMPLES

### Example 1
```
Get-CsTeamsMeetingBroadcastPolicy
```
Returns all the Teams Meeting Broadcast policies.

### Example 2
```
Get-CsTeamsMeetingBroadcastPolicy -Filter "Education_Teacher"
```

In this example, the -Filter parameter is used to return all the policies that match "Education_Teacher".

## PARAMETERS

### -Filter
Enables you to use wildcard characters when specifying the policy (or policies) to be returned.

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

### -Identity
Unique identifier for the policy to be retrieved. Policies can be configured at the global scope or at the per-user scope. To retrieve the global policy, use this syntax: -Identity global. To retrieve a per-user policy use syntax similar to this: -Identity SalesPolicy.

If this parameter is not included, the cmdlet will return a collection of all the policies configured for use in your organization.

Note that wildcards are not allowed when specifying an Identity. Use the Filter parameter if you need to use wildcards when specifying a policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Not applicable to the online service.

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
Not applicable to online service.

```yaml
Type: Guid
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
