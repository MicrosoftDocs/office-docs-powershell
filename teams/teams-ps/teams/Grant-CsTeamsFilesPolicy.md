---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsfilespolicy
schema: 2.0.0
---

# Grant-CsTeamsFilesPolicy

## SYNOPSIS
Assigns an online teams files policy to a user account, to a group of users, or set the tenant Global instance.
Online teams files policies manage usages of files-related features.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTeamsFilesPolicy [-Global] [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsFilesPolicy [-PassThru] [[-PolicyName] <String>] [-MsftInternalProcessingMode <String>]
 [-Group] <String> [-Rank <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Grant-CsTeamsFilesPolicy [-PassThru] [[-PolicyName] <String>] [-MsftInternalProcessingMode <String>]
 [-Identity <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing user-specific online teams files policy to a user, a group of users, or the Global policy instance.

## EXAMPLES

### Example 1
```
Grant-CsTeamsFilesPolicy -Identity "user@contoso.com" -PolicyName TranscriptionDisabled
```

The command shown in Example 1 assigns the per-user online teams files policy TranscriptionDisabled to a single user user@contoso.com.

### Example 2
```
Grant-CsTeamsFilesPolicy -Group sales@contoso.com -Rank 10 -PolicyName TranscriptionDisabled
```

The command shown in Example 2 assigns the online teams files policy TranscriptionDisabled to the members of the group sales@contoso.com.

## PARAMETERS

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsTeamsFilesPolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
A unique identifier(name) of the policy.

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

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP address or an Object ID.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS

[Get-CsTeamsFilesPolicy]()

[Set-CsTeamsFilesPolicy]()

[New-CsTeamsFilesPolicy]()

[Remove-CsTeamsFilesPolicy]()

