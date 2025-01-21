---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Update-CsCustomPolicyPackage
author: sunguchuan
ms.author: gucsun
manager: dasosby
online version: https://learn.microsoft.com/powershell/module/teams/update-cscustompolicypackage
schema: 2.0.0
---

# Update-CsCustomPolicyPackage

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet updates a custom policy package.

## SYNTAX

```
Update-CsCustomPolicyPackage -Identity <String> -PolicyList <String[]> [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet updates a custom policy package with new package settings. For more information on policy packages and the policy types available, please review https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> Update-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList "TeamsMessagingPolicy, MyMessagingPolicy"
```

Updates the custom package named "MyPackage" to have one policy in the package: a messaging policy of name "MyMessagingPolicy".
### Example 2
```powershell
PS C:\> Update-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList "TeamsMessagingPolicy, MyMessagingPolicy", "TeamsMeetingPolicy, MyMeetingPolicy" -Description "My package"
```

Updates the custom package named "MyPackage" to have a description of "My package" and two policies in the package: a messaging policy of name "MyMessagingPolicy" and a meeting policy of name "MyMeetingPolicy".

## PARAMETERS

### -Identity

The name of the custom package.

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

A list of one or more policies to be included in the updated package. To specify the policy list, follow this format: "\<PolicyType\>, \<PolicyName\>". Delimiters of ' ', '.', ':', '\t' are also acceptable. Supported policy types are listed [here](https://learn.microsoft.com/MicrosoftTeams/manage-policy-packages#what-is-a-policy-package). To get the list of available policy names on your tenant, use the skypeforbusiness module and refer to cmdlets such as [Get-CsTeamsMeetingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingpolicy) and [Get-CsTeamsMessagingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmessagingpolicy).

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

### -Description

The description of the custom package.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
The resulting custom package's contents will be replaced by the new one instead of a union. Default packages created by Microsoft cannot be updated.

## RELATED LINKS

[Get-CsPolicyPackage](https://learn.microsoft.com/powershell/module/teams/get-cspolicypackage)

[New-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/teams/new-cscustompolicypackage)

[Remove-CsCustomPolicyPackage](https://learn.microsoft.com/powershell/module/teams/remove-cscustompolicypackage)
