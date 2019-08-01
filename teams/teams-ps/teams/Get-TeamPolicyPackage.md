---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-TeamPolicyPackage
author: etgottli
ms.author: etgottli
ms.reviewer: icchan
manager: amitar
online version:
schema: 2.0.0
---

# Get-TeamPolicyPackage

## SYNOPSIS

This cmdlet supports retrieving all the policy packages available on a tenant.

## SYNTAX

```
Get-TeamPolicyPackage [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving all the policy packages available on a tenant. Provide the identity of a specific policy package to retrieve its definition, including details on the policies applied with the package.
For more information on policy packages, please review https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-TeamPolicyPackage
```

Returns all policy packages available on the tenant.

### Example 2
```powershell
PS C:\> Get-TeamPolicyPackage -Identity Education_PrimaryStudent
```

Returns the definition of the Education_PrimaryStudent policy package, including the policies applied with the package.

## PARAMETERS

### -Identity

The name of a specific policy package. All possible policy package names can be found by running Get-TeamPolicyPackage.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 0
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

[Get-TeamUserPolicyPackageRecommendation](Get-TeamUserPolicyPackageRecommendation.md)

[Get-TeamUserPolicyPackage](Get-TeamUserPolicyPackage.md)

[Grant-TeamUserPolicyPackage](Grant-TeamUserPolicyPackage.md)
