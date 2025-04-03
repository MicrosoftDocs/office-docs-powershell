---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsfilespolicy
title: Grant-CsTeamsFilesPolicy
schema: 2.0.0
---

# Grant-CsTeamsFilesPolicy

## SYNOPSIS

This cmdlet applies an instance of the Teams AI policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)

```powershell
Grant-CsTeamsFilesPolicy [<CommonParameters>]
```

### GrantToUser

```powershell
Grant-CsTeamsFilesPolicy -Identity <String>
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

### GrantToGroup

```powershell
Grant-CsTeamsFilesPolicy [-Group] <String> -Rank <Int32>
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

### GrantToTenant

```powershell
Grant-CsTeamsFilesPolicy [-Global] [-Force]
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

## DESCRIPTION

The Teams Files Policy is used to modify files related settings in Microsoft teams.

## EXAMPLES

### Example 1

```powershell
Grant-CsTeamsFilesPolicy -PolicyName Test -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

### Example 2

```powershell
Grant-CsTeamsFilesPolicy -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName Test
```

Assigns a given policy to a group.

### Example 3

```powershell
Grant-CsTeamsFilesPolicy -Global -PolicyName Test
```

Assigns a given policy to the tenant.

### Example 4

```powershell
Grant-CsTeamsFilesPolicy -Global -PolicyName Test
```

**Note**: Using $null in place of a policy name can be used to unassigned a policy instance.

## PARAMETERS

### -Global

This is the equivalent to `-Identity Global`.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -PolicyName

Specifies the name of the policy to be assigned. The PolicyName is the policy identity minus the policy scope ("tag:"), for example, a policy that has an identity of "Tag:Enabled" has a PolicyName of "Enabled".

```yaml
Type: String
Parameter Sets: GrantToUser, GrantToGroup, GrantToTenant
Aliases:

Required: False
Position: 1
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
Parameter Sets: GrantToUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Rank

The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Suppresses the display of any non-fatal error message that might arise when running the command.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsfilespolicy)

[Set-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsfilespolicy)

[New-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsfilespolicy)

[Remove-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsfilespolicy)
