---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsCustomPolicyPackage
author: sunguchuan
ms.author: gucsun
manager: dasosby
online version: https://learn.microsoft.com/powershell/module/teams/remove-cscustompolicypackage
schema: 2.0.0
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

The name of the custom package.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage)

[New-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/teams/new-cscustompolicypackage)

[Update-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/teams/update-cscustompolicypackage)
