---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Grant-CsGroupPolicyPackageAssignment
author: icchan
ms.author: icchan
manager: amitar
online version: https://docs.microsoft.com/powershell/module/teams/grant-csgrouppolicypackageassignment
schema: 2.0.0
---

# Grant-CsGroupPolicyPackageAssignment

## SYNOPSIS

This cmdlet applies a policy package to a group in a tenant.

## SYNTAX

```
Grant-CsUserPolicyPackage -Identity <String> -PackageName <String> [-Priority <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies a policy package to a group in a tenant. Provide a group identity to assign the package with all the associated policies. The available policy packages and their definitions can be found by running Get-CsPolicyPackage. Priority can be optionally specified to determine which policies in a package will be applied to the user in case they belong to two or more groups. If priority is not specified, the group's package assignment will be ranked last in priority. If a user was directly assigned a package, direct assignment takes precedence over group assignment. For more information on priority and group policy assignments, please review [this section](New-CsGroupPolicyAssignment.md#description). For more information on policy packages, please review https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -Identity 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_PrimaryStudent
```

Applies the Education_PrimaryStudent policy package to the group in the tenant.

### Example 2
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -Identity 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_Teacher -Priority 2
```

Applies the Education_Teacher policy package to the group in the tenant with a priority of 2, which means each policy in the package will be assigned to the group with a priority of 2.

## PARAMETERS

### -Identity

A group id in the tenant. It can either be a group's object id or a group's email address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageName

The name of a specific policy package to apply. All possible policy package names can be found by running Get-CsPolicyPackage.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

The priority of the package assignment, relative to other group package assignments that contain one or more of the same policy types.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsPolicyPackage](Get-CsPolicyPackage.md)

[New-CsGroupPolicyAssignment](New-CsGroupPolicyAssignment.md)