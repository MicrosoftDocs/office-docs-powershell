---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: amitar
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicypackage
schema: 2.0.0
title: Get-CsUserPolicyPackage
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

> Applicable: Microsoft Teams

The user that will get their assigned policy package.

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

[Get-CsUserPolicyPackageRecommendation](https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicypackagerecommendation)

[Grant-CsUserPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csuserpolicypackage)
