---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsCustomPolicyPackage
author: gucsun
ms.author: gucsun
manager: amitar
online version: https://docs.microsoft.com/powershell/module/teams/remove-CsCustomPolicyPackage
schema: 2.0.0
---

# Remove-CsCustomPolicyPackage

## SYNOPSIS
This cmdlet submits an operation that deletes a custom policy package with the given package name.

## SYNTAX

```
Remove-CsBatchPolicyPackageAssignmentOperation -PackageName <String>
```

## DESCRIPTION

This cmdlet submits an operation that deletes a custom policy package. It allows the user to delete a custom package that he is authorized to. The available package names can be found by running Get-CsPolicyPackage and with pre-defined packages excluded.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsCustomPolicyPackage -PackageName myCustomPackage
```

Deletes a custom package with name "myCustomPackage". If the custom package with the name "myCustomPackage" exists and the user is authorized to delete it. The command will return success result.

## PARAMETERS

### -PackageName

The name of the custom package. It cannot be empty or with only spaces.

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
The user is not allowed to delete a pre-defined package controlled by Microsoft.

## RELATED LINKS

[Get-CsPolicyPackage](Get-CsPolicyPackage.md)
