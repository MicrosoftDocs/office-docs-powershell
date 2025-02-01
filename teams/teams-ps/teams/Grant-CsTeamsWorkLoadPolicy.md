---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsworkloadpolicy
title:  Grant-CsTeamsWorkLoadPolicy
schema: 2.0.0
---

# Grant-CsTeamsWorkLoadPolicy

## SYNOPSIS

This cmdlet applies an instance of the Teams Workload policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)

```powershell
Grant-CsTeamsWorkLoadPolicy [[-Identity] <String>]
 [[-PolicyName] <String>]
 [-Confirm]
 [-MsftInternalProcessingMode <String>]
 [-PassThru]
 [-WhatIf]
 [<CommonParameters>]
```

### GrantToTenant

```powershell
Grant-CsTeamsWorkLoadPolicy [-Global]
 [[-PolicyName]
 [-Confirm]
 [-MsftInternalProcessingMode <String>]
 [-PassThru] <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### GrantToGroup

```powershell
Grant-CsTeamsWorkLoadPolicy [-Group] <String> [-Rank <Int32>]
 [[-PolicyName] <String>]
 [-Confirm]
 [-MsftInternalProcessingMode <String>]
 [-PassThru]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

The TeamsWorkLoadPolicy determines the workloads like meeting, messaging, calling that are enabled and/or pinned for the user.

## EXAMPLES

### Example 1

```powershell
Grant-CsTeamsWorkLoadPolicy -PolicyName Test -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

### Example 2

```powershell
Grant-CsTeamsWorkLoadPolicy -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName Test
```

Assigns a given policy to a group.

### Example 3

```powershell
Grant-CsTeamsWorkLoadPolicy -Global -PolicyName Test
```

Assigns a given policy to the tenant.

### Example 4

```powershell
Grant-CsTeamsWorkLoadPolicy -Global -PolicyName Test
```

**Note**: Using `$null` in place of a policy name can be used to unassigned a policy instance.

## PARAMETERS

### -Group

This is the identifier of the group that the policy should be assigned to.

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

Specifies the identity of the target user.

Example: <testuser@test.onmicrosoft.com>

Example: 98403f08-577c-46dd-851a-f0460a13b03d

Use the "Global" Identity if you wish to set the policy for the entire tenant.

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

### -PolicyName

Specifies the name of the policy to be assigned. The PolicyName is the policy identity minus the policy scope ("tag:"), for example, a policy that has an identity of "Tag:Enabled" has a PolicyName of "Enabled".

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

This is the equivalent to `-Identity Global`.

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

### -MsftInternalProcessingMode

For Microsoft internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

Enables you to pass a user object through the pipeline that represents the user being assigned the policy.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Remove-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsworkloadpolicy)

[Get-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsworkloadpolicy)

[Set-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsworkloadpolicy)

[New-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsworkloadpolicy)
