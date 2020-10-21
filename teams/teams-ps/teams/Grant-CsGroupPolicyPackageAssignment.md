---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Grant-CsGroupPolicyPackageAssignment
author: icchan
ms.author: icchan
manager: dasosby
online version: https://docs.microsoft.com/powershell/module/teams/grant-csgrouppolicypackageassignment
schema: 2.0.0
---

# Grant-CsGroupPolicyPackageAssignment

## SYNOPSIS

**Note:** This cmdlet is currently only available in private preview in the pre-release Teams PowerShell module.

This cmdlet assigns a policy package to a group in a tenant.

## SYNTAX

```
Grant-CsGroupPolicyPackageAssignment -GroupId <String> -PackageName <String> [-PolicyRankings <String[]>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet assigns a policy package to a group in a tenant. The available policy packages and their definitions can be found by running Get-CsPolicyPackage. Policy rankings can be optionally specified to determine which policies in a package will be applied to the user in case they belong to two or more groups. If policy rankings for a policy type is not specified, the group's policy assignment for that policy type will be ranked last. Finally, if a user was directly assigned a package, direct assignment takes precedence over group assignment. For more information on policy rankings and group policy assignments, please review [this section](New-CsGroupPolicyAssignment.md#description) under New-CsGroupPolicyAssignment. For more information on policy packages, please review https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -GroupId 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_PrimaryStudent
```

Assigns the Education_PrimaryStudent policy package to the group. The group will receive the lowest policy ranking for each policy type in the Education_PrimaryStudent package by default.

### Example 2
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -GroupId 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_Teacher -PolicyRankings "TeamsMessagingPolicy, 1", "TeamsMeetingPolicy, 1", "TeamsCallingPolicy, 2"
```

Assigns the Education_Teacher policy package to the group. The group will receive a policy ranking of 1 for TeamsMessagingPolicy policy type, a policy ranking of 1 for TeamsMeetingPolicy policy type and a policy ranking of 2 for TeamsCallingPolicy policy type. The group will also receive the lowest policy ranking for each unspecified policy type in the package by default (if any).

## PARAMETERS

### -GroupId

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

The name of a policy package. All policy package names can be found by running Get-CsPolicyPackage. To reset the currently assigned package value for the group, use $null or an empty string "". This will not remove any existing policy assignments to the group.

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

### -PolicyRankings

The policy rankings for each of the policy types in the package. To specify the policy rankings, follow this format: "\<PolicyType\>, \<PolicyRank\>". Delimiters of ' ', '.', ':', '\t' are also acceptable. Supported policy types of a policy package are listed [here](https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages#what-is-a-policy-package). Policy rank should be a number greater or equal to 1.

```yaml
Type: String[]
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