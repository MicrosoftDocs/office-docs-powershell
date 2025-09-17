---
author: SaritaBehera
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: saritabehera
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseducationconfiguration
schema: 2.0.0
title: Set-CsTeamsEducationConfiguration
---

# Set-CsTeamsEducationConfiguration

## SYNOPSIS

This cmdlet is used to manage the organization-wide education configuration for Teams.

## SYNTAX

```powershell
Set-CsTeamsEducationConfiguration [-ParentGuardianPreferredContactMethod <String>]
 [-UpdateParentInformation <String>]  [-EduGenerativeAIEnhancements <String>] [-Identity <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
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
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Email
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateParentInformation
Indicates whether updating parents contact information is Enabled/Disabled by educators. Possible values are 'Enabled' and 'Disabled'.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -EduGenerativeAIEnhancements

Controls whether generative AI enhancements are enabled in the education environment.

Possible values:

- `Enabled`: Generative AI features are available to educators and students.
- `Disabled`: Generative AI features are disabled across the tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Specifies the identity of the education configuration to set.

```yaml
Type: System.String
Parameter Sets: (All)
Required: False
Position: Named
Default value: Global
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsEducationConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamseducationconfiguration)
