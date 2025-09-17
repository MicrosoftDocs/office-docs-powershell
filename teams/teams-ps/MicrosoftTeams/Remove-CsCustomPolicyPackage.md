---
author: sunguchuan
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: dasosby
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-cscustompolicypackage
schema: 2.0.0
title: Remove-CsCustomPolicyPackage
---

# Remove-CsCustomPolicyPackage

## SYNOPSIS

This cmdlet deletes a custom policy package.

## SYNTAX

```
Remove-CsCustomPolicyPackage -Identity <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet deletes a custom policy package. All available package names can be found by running Get-CsPolicyPackage.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsCustomPolicyPackage -Identity "MyPackage"
```

Deletes a custom package named "MyPackage".

## PARAMETERS

### -Identity

> Applicable: Microsoft Teams

The name of the custom package.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: True
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
Default packages created by Microsoft cannot be deleted.

## RELATED LINKS

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/get-cspolicypackage)

[New-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/new-cscustompolicypackage)

[Update-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/update-cscustompolicypackage)
