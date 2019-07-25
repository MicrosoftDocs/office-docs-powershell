---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-TeamUserPolicyPackage
author: icchan
ms.author: icchan
ms.reviewer: etgottli
manager: amitar
online version:
schema: 2.0.0
---

# Get-TeamUserPolicyPackage

## SYNOPSIS

This cmdlet supports retrieving the policy package that's assigned to a user.

## SYNTAX

```
Get-TeamUserPolicyPackage [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving the policy package that's assigned to a user. Provide the identity of a user to retrieve the definition of their assigned policy package.
For more information on policy packages, please review https://docs.microsoft.com/en-us/MicrosoftTeams/manage-policy-packages

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-TeamUserPolicyPackage -Identity johndoe@example.com
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-TeamPolicyPackage](Get-TeamPolicyPackage.md)

[Get-TeamUserPolicyPackageRecommendation](Get-TeamUserPolicyPackageRecommendation.md)

[Grant-TeamUserPolicyPackage](Grant-TeamUserPolicyPackage.md)
