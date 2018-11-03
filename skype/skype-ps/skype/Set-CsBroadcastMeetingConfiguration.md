---
external help file: 
applicable: Skype for Business Online
title: Set-CsBroadcastMeetingConfiguration
schema: 2.0.0
---

# Set-CsBroadcastMeetingConfiguration

## SYNOPSIS
Use the `Set-CsBroadcastMeetingConfiguration` cmdlet to modify the settings of your global (and only) broadcast meeting configuration.

## SYNTAX

```
Set-CsBroadcastMeetingConfiguration [[-Identity] <Object>] [-SdnApiTemplateUrl <Object>]
 [-SdnProviderName <Object>] [-BroadcastMeetingSupportUrl <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-EnableAnonymousBroadcastMeeting <Object>] [-EnableBroadcastMeeting <Object>]
 [-EnableBroadcastMeetingRecording <Object>] [-EnableOpenBroadcastMeeting <Object>]
 [-EnableSdnProviderForBroadcastMeeting <Object>] [-EnableTechPreviewFeatures <Object>]
 [-EnforceBroadcastMeetingRecording <Object>] [-Force] [-Instance <Object>] [-SdnApiToken <Object>]
 [-SdnAzureSubscriptionId <Object>] [-SdnFallbackAttendeeThresholdCountForBroadcastMeeting <Object>]
 [-SdnLicenseId <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-CsBroadcastMeetingConfiguration` cmdlet to modify the settings of your global (and only) broadcast meeting configuration.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsBroadcastMeetingConfiguration -Identity Global -EnableAnonymousBroadcastMeeting $true -EnableBroadcastMeetingRecording $true
```

This example sets the global configuration to enable unauthenticated attendees and recorded meetings.


### -------------------------- Example 2 --------------------------
```
Set-CsBroadcastMeetingConfiguration -EnableSdnProviderForBroadcastMeeting $true -SdnProviderName "SDNCo" -SdnLicenseId 24030-38291-39042-2048-253904 -SdnApiTemplateUrl "https://api.SDNCo.com/template?auth={0}" -SdnFallbackAttendeeThresholdCountForBroadcastMeeting 1000
```

This example enables Software Defined Network (SDN) management of broadcast meetings and provides all the required and optional settings to enable SDN support.


### -------------------------- Example 3 --------------------------
```
Set-CsBroadcastMeetingConfiguration -SdnFallbackAttendeeThresholdCountForBroadcastMeeting 500
```

This example adjusts the broadcast meeting configuration to set the number of meeting attendees who can fall back from a Software Defined Network (SDN) to the content delivery network to 500.


## PARAMETERS

### -SdnApiTemplateUrl
Specifies the Software Defined Network (SDN) provider's HTTP API endpoint.
This information is provided to you by the SDN provider.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnProviderName
Specifies the Software Defined Network (SDN) provider's name.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BroadcastMeetingSupportUrl
Specifies a URL where broadcast meeting attendees can find support information or FAQs specific to that meeting.
The URL will be displayed during the broadcast meeting.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
@{Text=}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAnonymousBroadcastMeeting
Specifies whether non-authenticated attendees are allowed to join and view the web-based portion of the meeting.
Valid input for this parameter is $true or $false.
The default value is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBroadcastMeeting
Specifies whether broadcast meetings are enabled.
Valid input for this parameter is $true or $false.
The default value is $false.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBroadcastMeetingRecording
Specifies whether broadcast meetings can be recorded at the server level.
Valid input for this parameter is $true or $false.
The default value is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOpenBroadcastMeeting
Specifies if the organizer is allowed to create broadcast meetings that allows anyone in the organizer's organization to attend.
The default and only setting is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSdnProviderForBroadcastMeeting
If set to $true, broadcast meeting streams are enabled to take advantage of the network and bandwidth management capabilities of your Software Defined Network (SDN) provider.
The default is $false.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTechPreviewFeatures
Set to $true to enable use of features available in a technical preview program.
Set to $false to disable the technical preview features.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforceBroadcastMeetingRecording
Specifies whether all meetings will be recorded.
Valid input for this parameter is $true or $false.
The default value is $false.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnApiToken
Specifies the Software Defined Network (SDN) provider's authentication token which is required to use their SDN license.
This is required by some SDN providers who will give you the required token.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnAzureSubscriptionId
Specifies your Microsoft Azure subscription id which is required by some providers to access the Software Defined Network (SDN) provider's services.

The SdnAzureSubscriptionId parameter is not currently supported.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnFallbackAttendeeThresholdCountForBroadcastMeeting
Specifies the number of broadcast meeting attendees that are allowed to fallback from a Software Defined Network (SDN) connection to the standard content delivery network.
If this number is exceeded, additional meeting attendees who are not able to use the SDN service will not be allowed to join the meeting.

The SdnFallbackAttendeeThresholdCountForBroadcastMeeting parameter is not currently supported.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SdnLicenseId
Specifies the Software Defined Network (SDN) license identifier.
This is required and provided by some SDN providers.
This parameter is only required if EnableSdnProviderForBroadcastMeeting is set to $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

