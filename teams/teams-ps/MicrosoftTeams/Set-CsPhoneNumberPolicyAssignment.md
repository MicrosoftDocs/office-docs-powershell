---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberpolicyassignment
schema: 2.0.0
title: Set-CsPhoneNumberPolicyAssignment
---

# Set-CsPhoneNumberPolicyAssignment

## SYNOPSIS
This cmdlet assigns a policy to a specific telephone number in Microsoft Teams.

## SYNTAX
```
Set-CsPhoneNumberPolicyAssignment [-TelephoneNumber <String>] [-PolicyType <String>] [-PolicyName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The cmdlet assigns a policy to a telephone number in Microsoft Teams. This is useful in multi-line scenarios or when managing voice configurations for users who require specific dial plans or calling policies for different telephone numbers. 

Please note that policies must be pre-created and available in the tenant before assignment. The list of policies that can be assigned to telephone numbers are:
- CallingLineIdentity 
- OnlineDialOutPolicy 
- OnlineVoiceRoutingPolicy 
- TeamsEmergencyCallingPolicy 
- TeamsEmergencyCallRoutingPolicy 
- TeamsSharedCallingRoutingPolicy 
- TenantDialPlan 

Assignments are effective immediately, but may take a few minutes to propagate and show up in results in [Get-CsPhoneNumberPolicyAssignment](./get-csphonenumberpolicyassignment.md) cmdlet.


## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsPhoneNumberPolicyAssignment -TelephoneNumber 17789493766 -PolicyType TenantDialPlan -PolicyName "US Admins Dial Plan"
```
This example assigns a policy to the specified telephone number.

### Example 2
```powershell
PS C:\> Set-CsPhoneNumberPolicyAssignment -TelephoneNumber 17789493766 -PolicyType TenantDialPlan
```
This example removes an existing TenantDialPlan previously assigned to the specified telephone number.


## PARAMETERS

### -TelephoneNumber
Specifies the telephone number to which the policy will be assigned. 

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: Identity

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
Indicates the type of policy being assigned. 

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy to assign. This must match an existing policy configured in the tenant.

If the telephone number already has a different policy of the same PolicyType assigned, then this will replace the existing policy assignment.

If PolicyName is not provided, then it would remove any existing policy of the same PolicyType previously assigned to the specified phone number.

```yaml
Type: System.String
Parameter Sets: (All)
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

### None

## OUTPUTS

### None

This cmdlet does not return output on success. Errors are thrown if the assignment fails due to invalid parameters, missing policies, or internal service issues.

If you want to verify the outcome of the assignment, call `Get-CsPhoneNumberPolicyAssignment -TelephoneNumber <YourPhoneNumber>`.

## NOTES
The cmdlet is available in Teams PowerShell module 7.3.1 or later.
The cmdlet is only available in commercial cloud instances.

## RELATED LINKS
[Get-CsPhoneNumberPolicyAssignment](./get-csphonenumberpolicyassignment.md)
