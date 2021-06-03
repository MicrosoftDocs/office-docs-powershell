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

This cmdlet assigns a policy package to a group in a tenant.

## SYNTAX

```
Grant-CsGroupPolicyPackageAssignment -GroupId <String> -PackageName <String> [-PolicyRankings <String[]>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet assigns a policy package to a group in a tenant. The available policy packages and their definitions can be found by running Get-CsPolicyPackage. For more information on policy packages, please review [Manage policy packages in Microsoft Teams](https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages).

Policy rankings can be optionally specified for each policy type in the package to determine which policies will be assigned to the user in case they belong to two or more groups. If policy rankings for a policy type is not specified, one of two things can happen:

- If the policy type was previously assigned to the group, the ranking for the policy type will not change.
- If the policy type was not previously assigned to the group, the ranking for the policy type will be ranked last.

Finally, if a user was directly assigned a package, direct assignment takes precedence over group assignment. For more information on policy rankings and group policy assignments, please review [the description section under New-CsGroupPolicyAssignment](https://docs.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment#description).

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -GroupId 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_PrimaryStudent
```

Assigns the Education_PrimaryStudent policy package to the group. The group will receive the lowest policy ranking for each policy type in the Education_PrimaryStudent package if the policy type is newly assigned to the group. If a policy type was already assigned to the group, the group will receive the same policy ranking as before.

### Example 2
```powershell
PS C:\> Grant-CsGroupPolicyPackageAssignment -GroupId 1bc0b35f-095a-4a37-a24c-c4b6049816ab -PackageName Education_Teacher -PolicyRankings "TeamsMessagingPolicy, 1", "TeamsMeetingPolicy, 1", "TeamsCallingPolicy, 2"
```

Assigns the Education_Teacher policy package to the group. The group will receive a policy ranking of 1 for TeamsMessagingPolicy policy type, a policy ranking of 1 for TeamsMeetingPolicy policy type and a policy ranking of 2 for TeamsCallingPolicy policy type. For each unspecified policy type in the package, the group will receive the lowest policy ranking if it is newly assigned to the group. If a policy type was already assigned to the group, the group will receive the same policy ranking as before.

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

The policy rankings for each of the policy types in the package. To specify the policy rankings, follow this format: "\<PolicyType\>, \<PolicyRank\>". Delimiters of ' ', '.', ':', '\t' are also acceptable. Supported policy types are listed [here](https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages#what-is-a-policy-package). Policy rank must be a number greater than or equal to 1.

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

[Get-CsPolicyPackage](https://docs.microsoft.com/powershell/module/teams/get-cspolicypackage)

[New-CsGroupPolicyAssignment](https://docs.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment)
