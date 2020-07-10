---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/grant-cstenantdialplan
applicable: Skype for Business Online
title: Grant-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Grant-CsTenantDialPlan

## SYNOPSIS
Use the Grant-DsTenantDialPlan cmdlet to assign an existing tenant dial plan to a user.

## SYNTAX

```
Grant-CsTenantDialPlan [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>]
 [-Identity] <UserIdParameter> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Grant-CsTenantDialPlan cmdlet assigns an existing tenant dial plan to a user.
Tenant dial plans provide information that is required for Enterprise Voice users to make telephone calls.
Users who do not have a valid tenant dial plan cannot make calls by using Enterprise Voice.
A tenant dial plan determines such things as how normalization rules are applied, and whether a prefix must be dialed for external calls.

You can check whether a user has been granted a per-user tenant dial plan by calling a command in this format: `Get-CsOnlineUser "<user name>" | Select-Object TenantDialPlan.`
## EXAMPLES

### -------------------------- Example 1 --------------------------

(Skype for Business Online)
```
Grant-CsTenantDialPlan -PolicyName Vt1tenantDialPlan9 -Identity (Get-CsOnlineUser Vt1_User1).SipAddress
```

This example grants the Vt1tenantDialPlan9 dial plan to Vt1_User1.

### -------------------------- Example 2 -------------------------- 
```
Grant-CsTenantDialPlan -Identity "Ken Myer" -PolicyName $Null
```

In Example 2, any dial plan previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global dial plan.
To unassign a custom tenant dial plan, set the PolicyName to a null value ($Null).



## PARAMETERS

### -Identity
The Identity parameter identifies the user to whom the policy should be assigned.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The PolicyName parameter is the name of the tenant dial plan to assign to the specified user.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter are either the fully qualified domain name (FQDN) or the computer name.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".`
You can find your tenant ID by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

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

