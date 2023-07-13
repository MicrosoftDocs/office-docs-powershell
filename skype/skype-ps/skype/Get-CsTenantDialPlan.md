---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/skype/get-cstenantdialplan
applicable: Microsoft Teams
title: Get-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Get-CsTenantDialPlan

## SYNOPSIS
Use the Get-CsTenantDialPlan cmdlet to retrieve a tenant dial plan.

## SYNTAX

### Identity (Default)
```
Get-CsTenantDialPlan [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTenantDialPlan [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsTenantDialPlan cmdlet returns information about one or more tenant dial plans (also known as a location profiles) in an organization.
Tenant dial plans provide required information to let Enterprise Voice users make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied, and whether a prefix must be dialed for external calls.

You can use the Get-CsTenantDialPlan cmdlet to retrieve specific information about the normalization rules of a tenant dial plan.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTenantDialPlan
```

This example retrieves all existing tenant dial plans.

### -------------------------- Example 2 --------------------------
```
Get-CsTenantDialPlan -Identity Vt1TenantDialPlan2
```

This example retrieves the tenant dial plan that has an identity of Vt1TenantDialplan2.

## PARAMETERS

### -Filter
The Filter parameter allows you to limit the number of results based on filters you specify.

```yaml
Type: String
Parameter Sets: (Filter)
Aliases: 
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter is a unique identifier that designates the name of the tenant dial plan to retrieve.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases: 
Applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Grant-CsTenantDialPlan](Grant-CsTenantDialPlan.md)

[New-CsTenantDialPlan](New-CsTenantDialPlan.md)

[Set-CsTenantDialPlan](Set-CsTenantDialPlan.md)
