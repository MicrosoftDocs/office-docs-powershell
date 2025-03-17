---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsUserPolicyPackage
author: serdarsoysal
ms.author: serdars
manager: amitar
online version: https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackage
schema: 2.0.0
---

# Get-CsUserPolicyPackage

## SYNOPSIS

This cmdlet supports retrieving the policy package that's assigned to a user.

## SYNTAX

```
Get-CsUserPolicyPackage [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving the policy package that's assigned to a user. Provide the identity of a user to retrieve the definition of their assigned policy package.
For more information on policy packages, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsUserPolicyPackage -Identity johndoe@example.com
```

Returns the policy package that's assigned to johndoe@example.com.

## PARAMETERS

### -Identity

The user that will get their assigned policy package.

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

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage)

[Get-CsUserPolicyPackageRecommendation](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicypackagerecommendation)

[Grant-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/teams/grant-csuserpolicypackage)
