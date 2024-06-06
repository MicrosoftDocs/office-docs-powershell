---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Grant-CsTeamsUpdateManagementPolicy

## SYNOPSIS
Use this cmdlet to grant a specific Teams Update Management policy to a user.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsUpdateManagementPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsUpdateManagementPolicy [-PassThru] [[-PolicyName] <String>] [-MsftInternalProcessingMode <String>]
 [-Global] [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsUpdateManagementPolicy [-PassThru] [[-PolicyName] <String>] [-MsftInternalProcessingMode <String>]
 [-Group] <String> [-Rank <Int32>] [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Grants a specific Teams Update Management policy to a user or to sets a specific Teams Update Management policy as the new effective global policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsUpdateManagementPolicy -PolicyName "Campaign Policy" -Identity kenmyer@litwareinc.com
```

In this example, the policy "Campaign Policy" is granted to the user kenmyer@litwareinc.com.

## PARAMETERS

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

### -Global
Use this parameter to make the specified policy in -PolicyName the new effective global policy.

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

### -Identity
Indicates the identity of the user account the policy should be assigned to. 

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
Including this parameter (which does not take a value) displays the user information when the cmdlet completes. Normally there is no output when this cmdlet is run.

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
The identity of the policy to be granted.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
