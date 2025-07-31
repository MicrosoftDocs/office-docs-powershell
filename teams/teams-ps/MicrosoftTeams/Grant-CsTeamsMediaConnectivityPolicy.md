---
applicable: Microsoft Teams
author: lirunping-MSFT
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: runli
online version: https://learn.microsoft.com/powershell/module/teams/Grant-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
title: Grant-CsTeamsMediaConnectivityPolicy
---

# Grant-CsTeamsMediaConnectivityPolicy

## SYNOPSIS
This cmdlet applies an instance of the Teams media connectivity policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsMediaConnectivityPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsMediaConnectivityPolicy -Identity <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsMediaConnectivityPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsMediaConnectivityPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies an instance of the Teams media connectivity policy to users or groups in a tenant.

Passes in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter. One of either `Identity` or `Group` needs to be passed.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsMediaConnectivityPolicy -PolicyName Test -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

### Example 2
```powershell
PS C:\> Grant-CsTeamsMediaConnectivityPolicy -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName Test
```

Assigns a given policy to a group.

### Example 3
```powershell
PS C:\> Grant-CsTeamsMediaConnectivityPolicy -Global -PolicyName Test
```

Assigns a given policy to the tenant.

### Example 4
```powershell
PS C:\> Grant-CsTeamsMediaConnectivityPolicy -Global -PolicyName Test
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

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmediaconnectivitypolicy)

[Remove-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmediaconnectivitypolicy)

[Get-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmediaconnectivitypolicy)

[Set-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmediaconnectivitypolicy)
