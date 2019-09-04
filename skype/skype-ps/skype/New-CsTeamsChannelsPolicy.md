---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Online
title: New-CsTeamsChannelsPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

## SYNTAX
```
New-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>]
 [-AllowPrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>] [-Identity] <XdsIdentity>
 [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

This cmdlet allows you to create new policies of this type, which can later be assigned to specific users.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsChannelsPolicy -Identity StudentPolicy -AllowPrivateTeamDiscovery $false
```

This example shows creating a new policy with name "StudentPolicy" where Private Team Discovery is disabled.

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
Bypasses all non-fatal errors.
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
Specify the name of the policy that you are creating.

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

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamschannelspolicy)

[Remove-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamschannelspolicy)

[Grant-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamschannelspolicy)

[Get-CsTeamsChannelsPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamschannelspolicy)
