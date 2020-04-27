---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamschannelspolicy
applicable: Skype for Business Online
title: Set-CsTeamsChannelsPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams and Channels experience within the Teams application.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>]
 [-AllowPrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>]
 [-AllowPrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>] [-Instance <PSObject>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

This cmdlet allows you to update existing policies of this type.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsChannelsPolicy -Identity StudentPolicy -AllowPrivateTeamDiscovery $true
```

This example shows updating an existing policy with name "StudentPolicy" and enabling Private Team Discovery.

## PARAMETERS

### -AllowPrivateTeamDiscovery
Determines whether a user is allowed to discover private teams in suggestions and search results. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Bypass all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Use this parameter to specify the name of the policy being updated.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Use this parameter to pass the policy object output of Get-CsTeamsChannelsPolicy to update that policy.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOrgWideTeamCreation
Determines whether a user is allowed to create an org-wide team. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPrivateChannelCreation
Determines whether a user is allowed to create a private channel. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/new-csteamschannelspolicy)

[Remove-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamschannelspolicy)

[Grant-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamschannelspolicy)

[Get-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamschannelspolicy)
