---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamscallparkpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsCallParkPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Grant-CsTeamsCallParkPolicy

## SYNOPSIS

The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in Microsoft Teams.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different Teams phone.  The Grant-CsTeamsCallParkPolicy cmdlet lets you assign a custom policy to a specific user.

NOTE: the call park feature currently only available in desktop, web clients and mobile clients.  Call Park functionality is currently on the roadmap for Teams IP Phones.  Supported with TeamsOnly mode for users with the Phone System license

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsCallParkPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsCallParkPolicy [[-PolicyName] <string>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsCallParkPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in Microsoft Teams.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different phone.  The Grant-CsTeamsCallParkPolicy cmdlet lets you assign a custom policy to a specific user.

## EXAMPLES

### Example 1
```powershell
Grant-CsTeamsCallParkPolicy -PolicyName SalesPolicy -Identity Ken.Myer@contoso.com
```

Assigns a custom policy "Sales Policy" to the user Ken Myer.

### Example 2
```powershell
Grant-CsTeamsCallParkPolicy -Group sales@contoso.com -Rank 10 -PolicyName SalesPolicy
```

Assigns a custom policy "Sales Policy" to the members of the group sales@contoso.com.

## PARAMETERS

### -Identity
The User ID of the user to whom the policy is being assigned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
If present, causes the cmdlet to pass the user object (or objects) through the Windows PowerShell pipeline. By default, the cmdlet does not pass objects through the pipeline.

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
Name of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope ("tag:"). For example, a policy that has the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondConferencingPolicy has a PolicyName equal to RedmondConferencingPolicy.

If you set PolicyName to a null value, the command will unassign any per-user policy assigned to the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

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

## RELATED LINKS
[Set-CsTeamsCallParkPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscallparkpolicy)

[Get-CsTeamsCallParkPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscallparkpolicy)

[New-CsTeamsCallParkPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscallparkpolicy)

[Remove-CsTeamsCallParkPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscallparkpolicy)
