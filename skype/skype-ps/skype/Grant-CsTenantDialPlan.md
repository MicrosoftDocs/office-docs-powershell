---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/skype/grant-cstenantdialplan
applicable: Microsoft Teams, Skype for Business Online
title: Grant-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Grant-CsTenantDialPlan

## SYNOPSIS
Use the Grant-CsTenantDialPlan cmdlet to assign an existing tenant dial plan to a user, to a group of users, or to set the Global policy instance.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTenantDialPlan [[-PolicyName] <string>] [-Global] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTenantDialPlan [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Grant-CsTenantDialPlan [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Grant-CsTenantDialPlan cmdlet assigns an existing tenant dial plan to a user, a group of users, or sets the Global policy instance.
Tenant dial plans provide information that is required for Enterprise Voice users to make telephone calls.
Users who do not have a valid tenant dial plan cannot make calls by using Enterprise Voice.
A tenant dial plan determines such things as how normalization rules are applied, and whether a prefix must be dialed for external calls.

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
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: SwitchParameter
Parameter Sets: (GrantToTenant)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The PolicyName parameter is the name of the tenant dial plan to be assigned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: (GrantToGroup)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: (GrantToGroup)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies the user to whom the policy should be assigned.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTenantDialPlan](set-cstenantdialplan.md)

[New-CsTenantDialPlan](new-cstenantdialplan.md)

[Remove-CsTenantDialPlan](remove-cstenantdialplan.md)

[Get-CsTenantDialPlan](get-cstenantdialplan.md)
