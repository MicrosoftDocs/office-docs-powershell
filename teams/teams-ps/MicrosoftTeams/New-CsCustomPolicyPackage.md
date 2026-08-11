---
author: sunguchuan
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: dasosby
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-cscustompolicypackage
schema: 2.0.0
title: New-CsCustomPolicyPackage
---

# New-CsCustomPolicyPackage

## SYNOPSIS
This cmdlet creates a custom policy package.

## SYNTAX

```
New-CsCustomPolicyPackage -Identity <String> -PolicyList <String[]> [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a custom policy package. It allows the admin to create their own policy packages for the tenant. For more information on policy packages and the policy types available, see [Managing policy packages in Teams](https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages).

**Note:** This cmdlet is currently in private preview.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList "TeamsMessagingPolicy, MyMessagingPolicy"
```

Creates a custom package named "MyPackage" with one policy in the package: a messaging policy of name "MyMessagingPolicy".
### Example 2
```powershell
PS C:\> New-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList "TeamsMessagingPolicy, MyMessagingPolicy", "TeamsMeetingPolicy, MyMeetingPolicy" -Description "My package"
```

Creates a custom package named "MyPackage" with description "My package" and two policies in the package: a messaging policy of name "MyMessagingPolicy" and a meeting policy of name "MyMeetingPolicy".

## PARAMETERS

### -Description

> Applicable: Microsoft Teams

The description of the custom package.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

The name of the custom package.

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

### -PolicyList

> Applicable: Microsoft Teams

A list of one or more policies to be added in the package. To specify the policy list, follow this format: "\<PolicyType\>, \<PolicyName\>". Delimiters of ' ', '.', ':', '\t' are also acceptable. Supported policy types are listed [here](https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages#what-is-a-policy-package). To get the list of available policy names on your tenant, use the skypeforbusiness module and refer to cmdlets such as [Get-CsTeamsMeetingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingpolicy) and [Get-CsTeamsMessagingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmessagingpolicy).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
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

## RELATED LINKS

[Update-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/update-cscustompolicypackage)

[Remove-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/microsoftteams/remove-cscustompolicypackage)
