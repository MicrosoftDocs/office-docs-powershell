---
author: serdarsoysal
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: stanlythomas
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Get-CsTeamsMeetingBrandingPolicy
---

# Get-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsMeetingBrandingPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsMeetingBrandingPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Get-CsTeamsMeetingBrandingPolicy` cmdlet enables you to return information about all the meeting branding policies that have been configured for use in your organization.

## EXAMPLES

### Return all branding policies
```powershell
PS C:\> Get-CsTeamsMeetingBrandingPolicy
```

In this example, the command returns a collection of all the teams meeting branding policies configured for use in your organization.

### Return specified policy
```powershell
PS C:\> CsTeamsMeetingBrandingPolicy -Identity "policy test2"
```

In this example, the command returns the meeting branding policy that has an **Identity** `policy test 2`. Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the policy to be returned. To refer to the global policy, use this syntax: `-Identity global`. If this parameter is omitted, then all the meeting branding policies configured for use in your organization will be returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug`, `-ErrorAction`, `-ErrorVariable`, `-InformationAction`, `-InformationVariable`, `-OutVariable`, `-OutBuffer`, `-PipelineVariable`, `-Verbose`, `-WarningAction`, and `-WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### TeamsMeetingBrandingPolicy.Cmdlets.TeamsMeetingBrandingPolicy

## NOTES

Available in Teams PowerShell Module 4.9.3 and later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingbrandingpolicy)

[Grant-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmeetingbrandingpolicy)

[New-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingbrandingpolicy)

[Remove-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingbrandingpolicy)

[Set-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingbrandingpolicy)
