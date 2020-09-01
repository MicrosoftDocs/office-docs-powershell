---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Update-CsCustomPolicyPackage
author: gucsun
ms.author: gucsun
manager: amitar
online version: https://docs.microsoft.com/powershell/module/teams/update-CsCustomPolicyPackage
schema: 2.0.0
---

# Update-CsCustomPolicyPackage

## SYNOPSIS
This cmdlet submits an operation that updates a custom policy package with a given list of policies.

## SYNTAX

```
Update-CsBatchPolicyPackageAssignmentOperation -PackageName <String> -PolicyList <String[]> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet submits an operation that updates the policies into a custom policy package. It allows the user to change the policies included in the package. The available policy types can be found here https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Update-CsCustomPolicyPackage -PackageName myCustomPackage -PolicyList "TeamsMeeting, Education_Teacher" , "TeamsMessaging, Firstline_Manager"
```

Updates the custom package named "myCustomPackage" by changing the policies to a new list: TeamsMeeting policy named "Education_Teacher" and TeamsMessaging policy named "Firstline_Manager".

## PARAMETERS

### -PackageName

The name of the custom package that the user wants to update. It cannot be empty or only contain spaces.

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

### -PolicyList

A list of one or more policies included in the new policy list. For each policy in the list, the form is "<PolicyType>, <PolicyName>". delimiters of ' ', '.', ':', '\t' are also acceptable.

```yaml
Type: String[]
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
As a result, the whole policy list of the custom package will be REPLACED by the new one instead of a union. The user is not allowed to update the pre-defined packages created by Microsoft. 

## RELATED LINKS

[Get-CsPolicyPackage](Get-CsPolicyPackage.md)
