---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: amitar
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicypackagerecommendation
schema: 2.0.0
title: Get-CsUserPolicyPackageRecommendation
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
For more information on policy packages, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsUserPolicyPackageRecommendation -Identity johndoe@example.com
```

Returns recommendations for which policy packages are best suited for johndoe@example.com. The recommendation value per package can either be none, weak, or strong based on how confident the existing signals (e.g. license type) imply a user role.

## PARAMETERS

### -Identity

> Applicable: Microsoft Teams

The user that will receive policy package recommendations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
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

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/get-cspolicypackage)

[Get-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicypackage)

[Grant-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csuserpolicypackage)
