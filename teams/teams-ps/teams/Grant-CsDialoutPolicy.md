---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/grant-csdialoutpolicy
applicable: Microsoft Teams
title: Grant-CsDialoutPolicy
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Grant-CsDialoutPolicy

## SYNOPSIS
Use the `Grant-CsDialoutPolicy` cmdlet to assign the tenant global, a group of users, or a per-user outbound calling restriction policy to one or more users.

## SYNTAX

### Identity (Default)
```
Grant-CsDialoutPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsDialoutPolicy [[-PolicyName] <string>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsDialoutPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Teams, outbound calling restriction policies are used to restrict the type of audio conferencing and end user PSTN calls that can be made by users in your organization. The policies apply to all the different PSTN connectivity options for Microsoft Teams; Calling Plan, Direct Routing, and Operator Connect.

To get all the available policies in your organization run `Get-CsOnlineDialOutPolicy`.

## EXAMPLES

### Example 1
```
Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName "DialoutCPCandPSTNInternational"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCandPSTNInternational to the user with the User Principal Name "ken.myer@contoso.com".

### Example 2
```
Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName $Null
```

In this example, any per-user outbound calling restriction policy previously assigned to the user ken.myer@contoso.com is unassigned from that user; as a result, Ken Myer will be managed by the global outbound calling restriction policy. To unassign a per-user policy, set the PolicyName to a null value ($Null).

### Example 3
```
Get-CsOnlineUser | Grant-CsDialoutPolicy -PolicyName "DialoutCPCInternationalPSTNDisabled"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCInternationalPSTNDisabled to all the users in your organization.

### Example 4
```
Grant-CsDialoutPolicy -Global -PolicyName "DialoutCPCandPSTNInternational"
```

This example sets the tenant global policy instance to DialoutCPCandPSTNInternational.

### Example 5
```
Grant-CsDialoutPolicy -Group support@contoso.com -Rank 10 -PolicyName "DialoutCPCandPSTNInternational"
```

This example assigns the policy instance "DialoutCPCandPSTNInternational" to the members of the group support@contoso.com.

## PARAMETERS

### -Global
This parameter sets the tenant global policy instance. This is the policy that all users in the tenant will get unless they have a specific policy instance assigned.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:
Applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of three formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's ObjectId/Identity.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PassThru
Returns the results of the command. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:DialoutCPCZoneAPSTNDomestic has a PolicyName equal to DialoutCPCZoneAPSTNDomestic.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

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

### System.Object

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

The cmdlet is not supported for Teams resource accounts.

## RELATED LINKS
[Get-CsOnlineDialOutPolicy](https://learn.microsoft.com/powershell/module/teams/get-csonlinedialoutpolicy)
