---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsworklocationdetectionpolicy
schema: 2.0.0
ms.author: arkozlov
manager: prashibadkur
author: artemiykozlov
---

# Grant-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet applies an instance of the TeamsWorkLocationDetectionPolicy to users or groups in a tenant.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsWorkLocationDetectionPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsWorkLocationDetectionPolicy -Identity <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsWorkLocationDetectionPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsWorkLocationDetectionPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies an instance of the TeamsWorkLocationDetectionPolicy to users or groups in a tenant.

Passes in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter. One of either `Identity` or `Group` needs to be passed.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsWorkLocationDetectionPolicy -PolicyName sms-policy -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

### Example 2
```powershell
PS C:\> Grant-CsTeamsWorkLocationDetectionPolicy -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName wld-policy
```

Assigns a given policy to a group.

### Example 3
```powershell
PS C:\> Grant-CsTeamsWorkLocationDetectionPolicy -Global -PolicyName wld-policy
```

Assigns a given policy to the tenant.

### Example 3
```powershell
PS C:\> Grant-CsTeamsWorkLocationDetectionPolicy -Global -PolicyName wld-policy
```

Note: _Using $null in place of a policy name can be used to unassigned a policy instance._

## PARAMETERS

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

### -Identity
Specifies the identity of the target user.

Example: testuser@test.onmicrosoft.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

Use the "Global" Identity if you wish to set the policy for the entire tenant.

```yaml
Type: String
Parameter Sets: GrantToUser
Aliases:

Required: True
Position: Named
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS
[Get-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsworklocationdetectionpolicy)

[New-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsworklocationdetectionpolicy)

[Set-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsworklocationdetectionpolicy)

[Remove-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsworklocationdetectionpolicy)
