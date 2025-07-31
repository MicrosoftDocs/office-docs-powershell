---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/grant-cstenantdialplan
schema: 2.0.0
title: Grant-CsTenantDialPlan
---

# Grant-CsTenantDialPlan

## SYNOPSIS
Use the Grant-CsTenantDialPlan cmdlet to assign an existing tenant dial plan to a user, to a group of users, or to set the Global policy instance.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTenantDialPlan [[-PolicyName] <string>] [-Global] [-PassThru] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTenantDialPlan [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [<CommonParameters>]
```

### Identity
```
Grant-CsTenantDialPlan [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
The Grant-CsTenantDialPlan cmdlet assigns an existing tenant dial plan to a user, a group of users, or sets the Global policy instance.
Tenant dial plans provide information that is required for Enterprise Voice users to make telephone calls.
Users who do not have a valid tenant dial plan cannot make calls by using Enterprise Voice.
A tenant dial plan determines such things as how normalization rules are applied.

You can check whether a user has been granted a per-user tenant dial plan by calling a command in this format: `Get-CsUserPolicyAssignment -Identity "<user name>" -PolicyType TenantDialPlan.`

## EXAMPLES

### Example 1

```powershell
Grant-CsTenantDialPlan -PolicyName Vt1tenantDialPlan9 -Identity Ken.Myer@contoso.com
```

This example grants the Vt1tenantDialPlan9 dial plan to Ken.Meyer@contoso.com.

### Example 2
```powershell
Grant-CsTenantDialPlan -Identity Ken.Myer@contoso.com -PolicyName $Null
```

In Example 2, any dial plan previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global dial plan.
To unassign a custom tenant dial plan, set the PolicyName to a null value ($Null).

### Example 3

```powershell
Grant-CsTenantDialPlan -Group sales@contoso.com -Rank 10 -PolicyName Vt1tenantDialPlan9
```

This example grants the Vt1tenantDialPlan9 dial plan to members of the group sales@contoso.com.

## PARAMETERS

### -Global

> Applicable: Microsoft Teams

Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: SwitchParameter
Parameter Sets: (GrantToTenant)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group

> Applicable: Microsoft Teams

Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: (GrantToGroup)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

The Identity parameter identifies the user to whom the policy should be assigned.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PassThru

> Applicable: Microsoft Teams

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

### -PolicyName

> Applicable: Microsoft Teams

The PolicyName parameter is the name of the tenant dial plan to be assigned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank

> Applicable: Microsoft Teams

The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: (GrantToGroup)
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

## OUTPUTS

## NOTES
The ExternalAccessPrefix and OptimizeDeviceDialing parameters have been removed from New-CsTenantDialPlan and Set-CsTenantDialPlan cmdlet since they are no longer used. External access dialing is now handled implicitly using normalization rules of the dial plans.
The Get-CsTenantDialPlan will still show the external access prefix in the form of a normalization rule of the dial plan.

## RELATED LINKS

[Set-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/set-cstenantdialplan)

[New-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/new-cstenantdialplan)

[Remove-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/remove-cstenantdialplan)

[Get-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/get-cstenantdialplan)
