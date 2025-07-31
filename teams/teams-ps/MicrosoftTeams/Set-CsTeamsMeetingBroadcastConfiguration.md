---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingbroadcastconfiguration
schema: 2.0.0
title: Set-CsTeamsMeetingBroadcastConfiguration
---

# Set-CsTeamsMeetingBroadcastConfiguration

## SYNOPSIS
Changes the Teams meeting broadcast configuration settings for the specified tenant.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsMeetingBroadcastConfiguration [-Tenant <Guid>] [-SupportURL <String>]
 [-AllowSdnProviderForBroadcastMeeting <Boolean>] [-SdnProviderName <String>] [-SdnLicenseId <String>]
 [-SdnApiTemplateUrl <String>] [-SdnApiToken <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsMeetingBroadcastConfiguration [-Tenant <Guid>] [-SupportURL <String>]
 [-AllowSdnProviderForBroadcastMeeting <Boolean>] [-SdnProviderName <String>] [-SdnLicenseId <String>]
 [-SdnApiTemplateUrl <String>] [-SdnApiToken <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Tenant level configuration for broadcast events in Teams

## EXAMPLES

## PARAMETERS

### -AllowSdnProviderForBroadcastMeeting
If set to $true,  Teams meeting broadcast streams are enabled to take advantage of the network and bandwidth management capabilities of your Software Defined Network (SDN) provider.

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
Suppress all non-fatal errors

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
You can only have one configuration - "Global"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
You can pass in the output from Get-CsTeamsMeetingBroadcastConfiguration as input to this cmdlet (instead of Identity)

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnApiTemplateUrl
Specifies the Software Defined Network (SDN) provider's HTTP API endpoint. This information is provided to you by the SDN provider. This parameter is only required if AllowSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnApiToken
Specifies the Software Defined Network (SDN) provider's authentication token which is required to use their SDN license. This is required by some SDN providers who will give you the required token. This parameter is only required if AllowSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnLicenseId
Specifies the Software Defined Network (SDN) license identifier. This is required and provided by some SDN providers. This parameter is only required if AllowSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnProviderName
Specifies the Software Defined Network (SDN) provider's name. This parameter is only required if AllowSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnRuntimeConfiguration
Specifies connection parameters used to connect with a 3rd party eCDN provider. These parameters should be obtained from the SDN provider to be used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportURL
Specifies a URL where broadcast event attendees can find support information or FAQs specific to that event. The URL will be displayed to the attendees during the broadcast.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Not applicable to online service.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
