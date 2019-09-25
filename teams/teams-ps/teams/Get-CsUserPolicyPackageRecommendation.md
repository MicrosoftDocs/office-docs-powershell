---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-CsUserPolicyPackageRecommendation
author: etgottli
ms.author: etgottli
ms.reviewer: icchan
manager: amitar
online version:
schema: 2.0.0
---

# Get-CsUserPolicyPackageRecommendation

## SYNOPSIS

This cmdlet supports retrieving recommendations for which policy packages are best suited for a given user.

## SYNTAX

```
Get-CsUserPolicyPackageRecommendation [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving recommendations for which policy packages are best suited for a given user. This recommendation is based on tenant and user information such as license types.
For more information on policy packages, please review https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsUserPolicyPackageRecommendation -Identity johndoe@example.com
```

Returns recommendations for which policy packages are best suited for johndoe@example.com. The recommendation value per package can either be none, weak, or strong based on how confident the existing signals (e.g. license type) imply a user role.

## PARAMETERS

### -Identity

The user that will receive policy package recommendations.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsPolicyPackage](Get-CsPolicyPackage.md)

[Get-CsUserPolicyPackage](Get-CsUserPolicyPackage.md)

[Grant-CsUserPolicyPackage](Grant-CsUserPolicyPackage.md)
