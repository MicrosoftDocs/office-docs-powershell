---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsEducationConfiguration
author: SaritaBehera
ms.author: saritabehera
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamseducationconfiguration
schema: 2.0.0
---

# Set-CsTeamsEdcuationConfiguration

## SYNOPSIS

This cmdlet is used to manage the organization-wide education configuration for Teams.

## SYNTAX

```powershell
Set-CsTeamsEducationConfiguration
   [-ParentGuardianPreferredContactMethod <String>]
   [-UpdateParentInformation <String>]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to manage the organization-wide education configuration for Teams which contains settings that are applicable to education organizations.

You must be a Teams Service Administrator for your organization to run the cmdlet.

## EXAMPLES

### Example 1
In this example, Email is set as the preferred contact method used for parent communication invitations across the organization.

```powershell
Set-CsTeamsEducationConfiguration -ParentGuardianPreferredContactMethod Email
```

### Example 2
In this example, SMS is set as the preferred contact method used for parent communication invitations across the organization.

```powershell
Set-CsTeamsEducationConfiguration -ParentGuardianPreferredContactMethod SMS
```

### Example 3
In this example, updating parents contact information is enabled by educators across the organization.

```powershell
Set-CsTeamsEducationConfiguration -UpdateParentInformation Enabled
```

### Example 4
In this example, updating parents contact information is disabled by educators across the organization.

```powershell
Set-CsTeamsEducationConfiguration -UpdateParentInformation Disabled
```

## PARAMETERS

### -ParentGuardianPreferredContactMethod
Indicates whether Email or SMS is the preferred contact method used for parent communication invitations. Possible values are 'Email' and 'SMS'.

```yaml
Type: String
Position: Named
Default value: Email
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateParentInformation
Indicates whether updating parents contact information is Enabled/Disabled by educators. Possible values are 'Enabled' and 'Disabled'.

```yaml
Type: String
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsEducationConfiguration](Get-CsTeamsEducationConfiguration.md)
