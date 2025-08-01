---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsBatchPolicyPackageAssignmentOperation
author: serdarsoysal
ms.author: serdars
manager: amitar
online version: https://learn.microsoft.com/powershell/module/teams/new-csbatchpolicypackageassignmentoperation
schema: 2.0.0
---

# New-CsBatchPolicyPackageAssignmentOperation

## SYNOPSIS
This cmdlet submits an operation that applies a policy package to a batch of users in a tenant. A batch may contain up to 5000 users.

## SYNTAX

```
New-CsBatchPolicyPackageAssignmentOperation -Identity <String[]> -PackageName <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet submits an operation that applies a policy package to a batch of users in a tenant. Provide one or more user identities to assign the package with all the associated policies. The available policy packages and their definitions can be found by running Get-CsPolicyPackage. The recommended policy package for each user can be found by running Get-CsUserPolicyPackageRecommendation. For more information on policy packages, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsBatchPolicyPackageAssignmentOperation -Identity 1bc0b35f-095a-4a37-a24c-c4b6049816ab,johndoe@example.com,richardroe@example.com -PackageName Education_PrimaryStudent
```

Applies the Education_PrimaryStudent policy package to three users in the tenant.

## PARAMETERS

### -Identity

A list of one or more users in the tenant. A user identity can either be a user's object id or email address.

```yaml
Type: String[]
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

The name of a specific policy package to apply. All policy package names can be found by running Get-CsPolicyPackage. To remove the currently assigned package, use $null or an empty string "". This will not remove any policy assignments, just the package assigned value.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage)

[Get-CsUserPolicyPackageRecommendation](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackagerecommendation)

[Get-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackage)
