---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsCustomPolicyPackage
author: sunguchuan
ms.author: gucsun
manager: dasosby
online version: https://docs.microsoft.com/powershell/module/teams/new-cscustompolicypackage
schema: 2.0.0
---

# New-CsCustomPolicyPackage

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet creates a custom policy package.

## SYNTAX

```
New-CsCustomPolicyPackage -Identity <String> -PolicyList <PolicyTypeAndName[]> [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a custom policy package. It allows the admin to create their own policy packages for the tenant. For more information on policy packages and the policy types available, please review https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList @{ PolicyType = "TeamsMessagingPolicy"; PolicyName = "MyMessagingPolicy" }
```

Creates a custom package named "MyPackage" with one policy in the package: a messaging policy of name "MyMessagingPolicy".
### Example 2
```powershell
PS C:\> $policyList = @(@{ PolicyType = "TeamsMessagingPolicy"; PolicyName = "MyMessagingPolicy" }, @{ PolicyType = "TeamsMeetingPolicy"; PolicyName = "MyMeetingPolicy" })
PS C:\> New-CsCustomPolicyPackage -Identity "MyPackage" -PolicyList $policyList -Description "My package"
```

Creates a custom package named "MyPackage" with description "My package" and two policies in the package: a messaging policy of name "MyMessagingPolicy" and a meeting policy of name "MyMeetingPolicy".

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

### -PolicyList

A list of one or more policies to be added in the package. It should be constructed as an array of hash tables containing a policy type and a policy name. Supported policy types are listed [here](https://docs.microsoft.com/MicrosoftTeams/manage-policy-packages#what-is-a-policy-package). To get the list of available policy names on your tenant, please use the SkypeForBusiness module and refer to cmdlets such as [Get-CsTeamsMeetingPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamsmeetingpolicy?view=skype-ps) and [Get-CsTeamsMessagingPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamsmessagingpolicy?view=skype-ps).

```yaml
Type: PolicyTypeAndName[]
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
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

## RELATED LINKS

[Update-CsCustomPolicyPackage](Update-CsCustomPolicyPackage.md)

[Remove-CsCustomPolicyPackage](Remove-CsCustomPolicyPackage.md)
