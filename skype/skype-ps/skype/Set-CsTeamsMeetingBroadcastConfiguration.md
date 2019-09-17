---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsTeamsMeetingBroadcastConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---


# Set-CsTeamsMeetingBroadcastConfiguration

## SYNOPSIS
Set-CsTeamsMeetingBroadcastConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-SupportURL \<string\>\] \[-AllowSdnProviderForBroadcastMeeting \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsTeamsMeetingBroadcastConfiguration -SdnProviderName \<string\> -SdnApiTemplateUrl \<string\> \[-Tenant \<guid\>\] \[-SupportURL \<string\>\] \[-AllowSdnProviderForBroadcastMeeting \<bool\>\] \[-SdnLicenseId \<string\>\] \[-SdnApiToken \<string\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsTeamsMeetingBroadcastConfiguration \[-Tenant \<guid\>\] \[-SupportURL \<string\>\] \[-AllowSdnProviderForBroadcastMeeting \<bool\>\] \[-Instance \<psobject\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
