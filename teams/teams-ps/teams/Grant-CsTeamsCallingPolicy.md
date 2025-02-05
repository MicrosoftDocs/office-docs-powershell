---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamscallingpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsCallingPolicy
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Grant-CsTeamsCallingPolicy

## SYNOPSIS

Assigns a specific Teams Calling Policy to a user, a group of users, or sets the Global policy instance.

## SYNTAX

### Identity (Default)
```powershell
Grant-CsTeamsCallingPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [<CommonParameters>]
```

### GrantToTenant
```powershell
Grant-CsTeamsCallingPolicy [[-PolicyName] <string>] [-PassThru] [-Global] [<CommonParameters>]
```

### GrantToGroup
```powershell
Grant-CsTeamsCallingPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [<CommonParameters>]
```

## DESCRIPTION
The Teams Calling Policies designate how users are able to use calling functionality within Microsoft Teams. This cmdlet allows admins to grant user level policies to individual users, to members of a group, or to set the Global policy instance.

## EXAMPLES

### Example 1
```powershell
Grant-CsTeamsCallingPolicy -identity user1@contoso.com -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to user1@contoso.com

### Example 2
```powershell
Grant-CsTeamsCallingPolicy -Global -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to the Global policy instance. This sets the parameters in the Global policy instance to the values found
in the SalesCallingPolicy instance.

### Example 3
```powershell
Grant-CsTeamsCallingPolicy -Group sales@contoso.com -Rank 10 -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to the members of the group sales@contoso.com.

## PARAMETERS

### -Identity
The user object to whom the policy is being assigned.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsCallingPolicy cmdlet does not pass objects through the pipeline.

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
The name of the policy being assigned.  To remove an existing user level policy assignment, specify PolicyName as $null.

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

### -Global
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

### -Rank
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

### System.Object

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS

[Set-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscallingpolicy)

[Remove-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscallingpolicy)

[Get-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscallingpolicy)

[New-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscallingpolicy)
