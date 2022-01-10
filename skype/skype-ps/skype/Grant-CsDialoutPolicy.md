---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csdialoutpolicy
applicable: Skype for Business Online, Microsoft Teams
title: Grant-CsDialoutPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Grant-CsDialoutPolicy

## SYNOPSIS
Use the `Grant-CsDialoutPolicy` cmdlet to assign the tenant global or a per-user outbound calling restriction policy to one or more users.

## SYNTAX
```
Grant-CsDialoutPolicy [[-Identity] <UserIdParameter>] [-Global] [[-PolicyName] <string>] [-Confirm] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Online and Microsoft Teams, outbound calling restriction policies are used to restrict the type of audio conferencing and end user PSTN calls that can be made by users in your organization.
To get all the available policies in your organization run `Get-CsOnlineDialOutPolicy`.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName "DialoutCPCandPSTNInternational"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCandPSTNInternational to the user with the User Principal Name "ken.myer@contoso.com".

### -------------------------- Example 2 --------------------------
```
PS C:\> Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName $Null
```

In this example, any per-user outbound calling restriction policy previously assigned to the user ken.myer@contoso.com is unassigned from that user; as a result, Ken Myer will be managed by the global outbound calling restriction policy. To unassign a per-user policy, set the PolicyName to a null value ($Null).

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineUser | Grant-CsDialoutPolicy -PolicyName "DialoutCPCInternationalPSTNDisabled"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCInternationalPSTNDisabled to all the users in your organization.

### -------------------------- Example 4 --------------------------
```
PS C:\> Grant-CsDialoutPolicy -Global -PolicyName "InternationalAndDomestic"
```

This example sets the tenant global policy instance to InternationalAndDomestic.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
This parameter set the tenant global policy instance. This is the policy that all users in the tenant will get, unless they have a specific policy instance assigned.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -Identity
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns the results of the command. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondPolicy has a PolicyName equal to RedmondPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: 1
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
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineDialOutPolicy](https://docs.microsoft.com/powershell/module/skype/get-csonlinedialoutpolicy?view=skype-ps)
