---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Grant-TeamUserPolicyPackage
author: etgottli
ms.author: etgottli
ms.reviewer: icchan
manager: amitar
online version:
schema: 2.0.0
---

# Grant-TeamUserPolicyPackage

## SYNOPSIS

This cmdlet supports applying a policy package to users in a tenant.

## SYNTAX

```
Grant-TeamUserPolicyPackage [-Identity] <String[]> [-PackageName] <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports applying a policy package to users in a tenant. Provide one or more user identities to assign the package with all the associated policies. The available policy packages and their definitions can be found by running Get-TeamPolicyPackage. The recommended policy package for each user can be found by running Get-TeamUserPolicyPackageRecommendation.
For more information on policy packages, please review https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-TeamUserPolicyPackage -Identity 1bc0b35f-095a-4a37-a24c-c4b6049816ab,johndoe@example.com -PackageName Education_PrimaryStudent
```

Applies the Education_PrimaryStudent policy package to two users in the tenant.

## PARAMETERS

### -Identity

A list of one or more users in the tenant. Note that we recommend applying a policy package to no more than 15 users at once.

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

The name of a specific policy package to apply. All possible policy package names can be found by running Get-TeamPolicyPackage.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-TeamPolicyPackage](Get-TeamPolicyPackage.md)

[Get-TeamUserPolicyPackageRecommendation](Get-TeamUserPolicyPackageRecommendation.md)

[Get-TeamUserPolicyPackage](Get-TeamUserPolicyPackage.md)
