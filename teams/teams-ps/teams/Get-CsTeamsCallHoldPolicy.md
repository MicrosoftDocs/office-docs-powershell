---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscallholdpolicy
applicable: Microsoft Teams
title: Get-CsTeamsCallHoldPolicy
schema: 2.0.0
ms.reviewer:
manager: abnair
ms.author: serdars
author: serdarsoysal
---

# Get-CsTeamsCallHoldPolicy

## SYNOPSIS

Returns information about the policies configured to customize the call hold experience for Teams clients.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsCallHoldPolicy [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsCallHoldPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.

Assigning a Teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsCallHoldPolicy
```

The command shown in Example 1 returns information for all the Teams call hold policies configured for use in the tenant.

### Example 2
```powershell
PS C:\> Get-CsTeamsCallHoldPolicy -Identity 'ContosoPartnerCallHoldPolicy'
```

In Example 2, information is returned for a single Teams call hold policy: the policy with the Identity ContosoPartnerCallHoldPolicy.

### Example 3
```powershell
PS C:\> Get-CsTeamsCallHoldPolicy -Filter 'Tag:*'
```

The command shown in Example 3 returns information about all the Teams call hold policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "Tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "Tag:".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more Teams call hold policies.
For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "Tag:\*"

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
Unique identifier of the Teams call hold policy to be retrieved.

To return the global policy, use this syntax:

`-Identity "Global"`

To return a policy configured at the per-user scope, use syntax like this:

`-Identity "ContosoPartnerCallHoldPolicy"`

You cannot use wildcard characters when specifying the Identity.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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

[New-CsTeamsCallHoldPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscallholdpolicy)

[Set-CsTeamsCallHoldPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscallholdpolicy)

[Grant-CsTeamsCallHoldPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscallholdpolicy)

[Remove-CsTeamsCallHoldPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscallholdpolicy)
