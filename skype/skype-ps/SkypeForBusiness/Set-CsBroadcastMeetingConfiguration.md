---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/set-csbroadcastmeetingconfiguration
schema: 2.0.0
title: Set-CsBroadcastMeetingConfiguration
---

# Set-CsBroadcastMeetingConfiguration

## SYNOPSIS
Use the `Set-CsBroadcastMeetingConfiguration` cmdlet to modify the settings of your global (and only) broadcast meeting configuration.

## SYNTAX

### Identity (Default)
```
Set-CsBroadcastMeetingConfiguration [-Tenant <Guid>] [-EnableBroadcastMeeting <Boolean>]
 [-EnableOpenBroadcastMeeting <Boolean>] [-EnableBroadcastMeetingRecording <Boolean>]
 [-EnableAnonymousBroadcastMeeting <Boolean>] [-EnforceBroadcastMeetingRecording <Boolean>]
 [-BroadcastMeetingSupportUrl <String>] [-EnableSdnProviderForBroadcastMeeting <Boolean>]
 [-SdnFallbackAttendeeThresholdCountForBroadcastMeeting <UInt32>] [-EnableTechPreviewFeatures <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParameterSetEnableSdn
```
Set-CsBroadcastMeetingConfiguration -SdnProviderName <String> [-SdnLicenseId <String>]
 [-SdnAzureSubscriptionId <String>] -SdnApiTemplateUrl <String> [-SdnApiToken <String>] [-Tenant <Guid>]
 [-EnableBroadcastMeeting <Boolean>] [-EnableOpenBroadcastMeeting <Boolean>]
 [-EnableBroadcastMeetingRecording <Boolean>] [-EnableAnonymousBroadcastMeeting <Boolean>]
 [-EnforceBroadcastMeetingRecording <Boolean>] [-BroadcastMeetingSupportUrl <String>]
 [-EnableSdnProviderForBroadcastMeeting <Boolean>]
 [-SdnFallbackAttendeeThresholdCountForBroadcastMeeting <UInt32>] [-EnableTechPreviewFeatures <Boolean>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsBroadcastMeetingConfiguration [-Tenant <Guid>] [-EnableBroadcastMeeting <Boolean>]
 [-EnableOpenBroadcastMeeting <Boolean>] [-EnableBroadcastMeetingRecording <Boolean>]
 [-EnableAnonymousBroadcastMeeting <Boolean>] [-EnforceBroadcastMeetingRecording <Boolean>]
 [-BroadcastMeetingSupportUrl <String>] [-EnableSdnProviderForBroadcastMeeting <Boolean>]
 [-SdnFallbackAttendeeThresholdCountForBroadcastMeeting <UInt32>] [-EnableTechPreviewFeatures <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-CsBroadcastMeetingConfiguration` cmdlet to modify the settings of your global (and only) broadcast meeting configuration.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### Example 1
```
Set-CsBroadcastMeetingConfiguration -Identity Global -EnableAnonymousBroadcastMeeting $true -EnableBroadcastMeetingRecording $true
```

This example sets the global configuration to enable unauthenticated attendees and recorded meetings.


### Example 2
```
Set-CsBroadcastMeetingConfiguration -EnableSdnProviderForBroadcastMeeting $true -SdnProviderName "SDNCo" -SdnLicenseId 24030-38291-39042-2048-253904 -SdnApiTemplateUrl "https://api.SDNCo.com/template?auth={0}" -SdnFallbackAttendeeThresholdCountForBroadcastMeeting 1000
```

This example enables Software Defined Network (SDN) management of broadcast meetings and provides all the required and optional settings to enable SDN support.


### Example 3
```
Set-CsBroadcastMeetingConfiguration -SdnFallbackAttendeeThresholdCountForBroadcastMeeting 500
```

This example adjusts the broadcast meeting configuration to set the number of meeting attendees who can fall back from a Software Defined Network (SDN) to the content delivery network to 500.


## PARAMETERS

### -BroadcastMeetingSupportUrl

> Applicable: Skype for Business Online

Specifies a URL where broadcast meeting attendees can find support information or FAQs specific to that meeting.
The URL will be displayed during the broadcast meeting.

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

### -EnableAnonymousBroadcastMeeting

> Applicable: Skype for Business Online

Specifies whether non-authenticated attendees are allowed to join and view the web-based portion of the meeting.
Valid input for this parameter is $true or $false.
The default value is $true.

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

### -EnableBroadcastMeeting

> Applicable: Skype for Business Online

Specifies whether broadcast meetings are enabled.
Valid input for this parameter is $true or $false.
The default value is $false.

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

### -EnableBroadcastMeetingRecording

> Applicable: Skype for Business Online

Specifies whether broadcast meetings can be recorded at the server level.
Valid input for this parameter is $true or $false.
The default value is $true.

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

### -EnableOpenBroadcastMeeting

> Applicable: Skype for Business Online

Specifies if the organizer is allowed to create broadcast meetings that allows anyone in the organizer's organization to attend.
The default and only setting is $true.

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

### -EnableSdnProviderForBroadcastMeeting

> Applicable: Skype for Business Online

If set to $true, broadcast meeting streams are enabled to take advantage of the network and bandwidth management capabilities of your Software Defined Network (SDN) provider.
The default is $false.

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

### -EnableTechPreviewFeatures

> Applicable: Skype for Business Online

Set to $true to enable use of features available in a technical preview program.
Set to $false to disable the technical preview features.

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

### -EnforceBroadcastMeetingRecording

> Applicable: Skype for Business Online

Specifies whether all meetings will be recorded.
Valid input for this parameter is $true or $false.
The default value is $false.

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

### -Force

> Applicable: Skype for Business Online

The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Online

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

> Applicable: Skype for Business Online

Specifies the Software Defined Network (SDN) provider's HTTP API endpoint.
This information is provided to you by the SDN provider.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

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

> Applicable: Skype for Business Online

Specifies the Software Defined Network (SDN) provider's authentication token which is required to use their SDN license.
This is required by some SDN providers who will give you the required token.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

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

### -SdnAzureSubscriptionId

> Applicable: Skype for Business Online

Specifies your Microsoft Azure subscription id which is required by some providers to access the Software Defined Network (SDN) provider's services.

The SdnAzureSubscriptionId parameter is not currently supported.

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

### -SdnFallbackAttendeeThresholdCountForBroadcastMeeting

> Applicable: Skype for Business Online

Specifies the number of broadcast meeting attendees that are allowed to fallback from a Software Defined Network (SDN) connection to the standard content delivery network.
If this number is exceeded, additional meeting attendees who are not able to use the SDN service will not be allowed to join the meeting.

The SdnFallbackAttendeeThresholdCountForBroadcastMeeting parameter is not currently supported.

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

> Applicable: Skype for Business Online

Specifies the Software Defined Network (SDN) license identifier.
This is required and provided by some SDN providers.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

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

> Applicable: Skype for Business Online

Specifies the Software Defined Network (SDN) provider's name.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

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

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

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

### -Confirm

> Applicable: Skype for Business Online

The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -WhatIf

> Applicable: Skype for Business Online

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS
