---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamssharedcallingroutingpolicy
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Get-CsTeamsSharedCallingRoutingPolicy

## SYNOPSIS
Use the Get-CsTeamsSharedCallingRoutingPolicy cmdlet to get Teams shared calling routing policy information.
Teams shared calling routing policy is used to configure Shared Calling.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsSharedCallingRoutingPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsSharedCallingRoutingPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

TeamsSharedCallingRoutingPolicy is used to configure Shared Calling.

## EXAMPLES

### Example 1
```
Get-CsTeamsSharedCallingRoutingPolicy
```
The command shown in Example 1 returns information for all the Teams shared calling routing policies configured for use in the tenant.

### Example 2
```
Get-CsTeamsSharedCallingRoutingPolicy -Identity "Seattle"
```
In Example 2, information is returned for a single Teams shared calling routing policy; the policy with the Identity Seattle.

### Example 3
```
Get-CsTeamsSharedCallingRoutingPolicy -Filter "tag:*"
```
The command shown in Example 3 returns information about all the Teams shared calling routing policies configured at the per-user scope.

### Example 4
```
Get-CsTeamsSharedCallingRoutingPolicy -Identity Global
```
The command shown in Example 4 returns information about the Global policy instance.

## PARAMETERS

### -Identity
Unique identifier of the Teams shared calling routing policy to be retrieved. 

You cannot use wildcard characters when specifying the Identity. If neither the Identity nor the Filter parameters are specified, then Get-CsTeamsSharedCallingRoutingPolicy
returns all the Teams shared calling routing policies configured for use in the tenant.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CsTeamsSharedCallingRoutingPolicy](Set-CsTeamsSharedCallingRoutingPolicy.md)

[Grant-CsTeamsSharedCallingRoutingPolicy](Grant-CsTeamsSharedCallingRoutingPolicy.md)

[Remove-CsTeamsSharedCallingRoutingPolicy](Remove-CsTeamsSharedCallingRoutingPolicy.md)

[New-CsTeamsSharedCallingRoutingPolicy](New-CsTeamsSharedCallingRoutingPolicy.md)