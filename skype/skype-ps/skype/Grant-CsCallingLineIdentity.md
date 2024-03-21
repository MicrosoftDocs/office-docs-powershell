---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/grant-cscallinglineidentity
applicable: Microsoft Teams, Skype for Business Online
title: Grant-CsCallingLineIdentity
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Grant-CsCallingLineIdentity

## SYNOPSIS
Use the `Grant-CsCallingLineIdentity` cmdlet to apply a Caller ID policy to a user account, to a group of users, or to set the tenant Global instance.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsCallingLineIdentity [[-PolicyName] <string>] [-Global] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsCallingLineIdentity [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Grant-CsCallingLineIdentity [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can either assign a Caller ID policy to a specific user, to a group of users, or you can set the Global policy instance.

## EXAMPLES

### Example 1
```
PS C:\> Grant-CsCallingLineIdentity -Identity Ken.Myer@contoso.com -PolicyName CallerIDRedmond
```

This example assigns the Caller ID policy with the Identity CallerIDRedmond to the user Ken.Myer@contoso.com

### Example 2
```
Grant-CsCallingLineIdentity -PolicyName CallerIDSeattle -Global
```

This example copies the Caller ID policy CallerIDSeattle to the Global policy instance.

### Example 3
```
Grant-CsCallingLineIdentity -Group sales@contoso.com -PolicyName CallerIDSeattle -Rank 10
```

This example assigns the Caller ID policy with the Identity CallerIDSeattle to the members of the group sales@contoso.com.

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
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsCallingLineIdentity cmdlet does not pass objects through the pipeline.

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
The name (Identity) of the Caller ID policy to be assigned. To remove an existing user level policy assignment, specify PolicyName as $null.

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
Parameter Sets: GrantToGroup
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
Parameter Sets: GrantToGroup
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -Identity
The Identity of the user to whom the policy is being assigned. User Identities can be specified using the user's SIP address, the user's user principal name (UPN), or
the user's ObjectId/Identity.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 0
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
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS
[Set-CsCallingLineIdentity](set-cscallinglineidentity.md)

[Get-CsCallingLineIdentity](get-cscallinglineidentity.md)

[Remove-CsCallingLineIdentity](remove-cscallinglineidentity.md)

[New-CsCallingLineIdentity](new-cscallinglineidentity.md)
