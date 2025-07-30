---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: amitar
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/grant-csuserpolicypackage
schema: 2.0.0
title: Grant-CsUserPolicyPackage
---

# Grant-CsUserPolicyPackage

## SYNOPSIS

This cmdlet supports applying a policy package to users in a tenant. Note that there is a limit of 20 users you can apply the package to at a time. To apply a policy package to a larger number of users, consider using New-CsBatchPolicyPackageAssignmentOperation.

## SYNTAX

```
Grant-CsUserPolicyPackage [-Identity] <String[]> [-PackageName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports applying a policy package to users in a tenant. Provide one or more user identities to assign the package with all the associated policies. The available policy packages and their definitions can be found by running Get-CsPolicyPackage. The recommended policy package for each user can be found by running Get-CsUserPolicyPackageRecommendation.
For more information on policy packages, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsUserPolicyPackage -Identity 1bc0b35f-095a-4a37-a24c-c4b6049816ab,johndoe@example.com -PackageName Education_PrimaryStudent
```

Applies the Education_PrimaryStudent policy package to two users in the tenant.

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

### -Identity

> Applicable: Microsoft Teams

A list of one or more users in the tenant. Note that there is a limit of 20 users you can apply the package to at a time.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageName

> Applicable: Microsoft Teams

The name of a specific policy package to apply. All possible policy package names can be found by running Get-CsPolicyPackage.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: True
Position: 1
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage)

[Get-CsUserPolicyPackageRecommendation](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackagerecommendation)

[Get-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackage)

[New-CsBatchPolicyPackageAssignmentOperation](https://learn.microsoft.com/powershell/module/teams/new-csbatchpolicypackageassignmentoperation)
