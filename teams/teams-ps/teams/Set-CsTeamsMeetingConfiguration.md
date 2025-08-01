---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingconfiguration
applicable: Microsoft Teams
title: Set-CsTeamsMeetingConfiguration
schema: 2.0.0
---

# Set-CsTeamsMeetingConfiguration

## SYNOPSIS

The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants.

## SYNTAX

### Identity (Default)

```powershell
Set-CsTeamsMeetingConfiguration [-Tenant <Guid>] [-LogoURL <String>] [-LegalURL <String>]
 [-HelpURL <String>] [-CustomFooterText <String>] [-DisableAnonymousJoin <Boolean>] [-EnableQoS <Boolean>]
 [-ClientAudioPort <UInt32>] [-ClientAudioPortRange <UInt32>] [-ClientVideoPort <UInt32>]
 [-ClientVideoPortRange <UInt32>] [-ClientAppSharingPort <UInt32>] [-ClientAppSharingPortRange <UInt32>]
 [-ClientMediaPortRangeEnabled <Boolean>] [-DisableAppInteractionForAnonymousUsers <Boolean>] [[-Identity] <XdsIdentity>] [-FeedbackSurveyForAnonymousUsers <String>] [-LimitPresenterRolePermissions <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance

```powershell
Set-CsTeamsMeetingConfiguration [-Tenant <Guid>] [-LogoURL <String>] [-LegalURL <String>]
 [-HelpURL <String>] [-CustomFooterText <String>] [-DisableAnonymousJoin <Boolean>] [-EnableQoS <Boolean>]
 [-ClientAudioPort <UInt32>] [-ClientAudioPortRange <UInt32>] [-ClientVideoPort <UInt32>]
 [-ClientVideoPortRange <UInt32>] [-ClientAppSharingPort <UInt32>] [-ClientAppSharingPortRange <UInt32>]
 [-ClientMediaPortRangeEnabled <Boolean>] [-DisableAppInteractionForAnonymousUsers <Boolean>] [-FeedbackSurveyForAnonymousUsers <String>] [-LimitPresenterRolePermissions <Boolean>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants. Use this cmdlet to set the configuration for your organization.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsMeetingConfiguration -EnableQoS $true -ClientVideoPort 10000 -Identity Global
```

In this example, the user is enabling collection of QoS data in his organization and lowering the video stream quality to accommodate low bandwidth networks.

## PARAMETERS

### -ClientAppSharingPort

Determines the starting port number for client screen sharing or application sharing.
Minimum allowed  value: 1024
Maximum allowed value: 65535
Default value: 50040

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAppSharingPortRange

Determines the total number of ports available for client sharing or application sharing. Default value is 20

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAudioPort

Determines the starting port number for client audio.
Minimum allowed  value: 1024
Maximum allowed value: 65535
Default value: 50000

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAudioPortRange

Determines the total number of ports available for client audio. Default value is 20

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientMediaPortRangeEnabled

Determines whether custom media port and range selections need to be enforced. When set to True, clients will use the specified port range for media traffic. When set to False (the default value) for any available port (from port 1024 through port 65535) will be used to accommodate media traffic.

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

### -ClientVideoPort

Determines the starting port number for client video.
Minimum allowed  value: 1024
Maximum allowed value: 65535
Default value: 50020

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientVideoPortRange

Determines the total number of ports available for client video. Default value is 20

```yaml
Type: UInt32
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

### -CustomFooterText

Text to be used on custom meeting invitations

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

### -DisableAnonymousJoin

Determines whether anonymous users are blocked from joining meetings in the tenant. Set this to TRUE to block anonymous users from joining. Set this to FALSE to allow anonymous users to join meetings.

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

### -EnableQoS

Determines whether Quality of Service Marking for real-time media (audio, video, screen/app sharing) is enabled in the tenant. Set this to TRUE to enable and FALSE to disable

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

{{Fill Force Description}}

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

### -HelpURL

URL to a website where users can obtain assistance on joining the meeting.This would be included in the meeting invite. Please ensure this URL is publicly accessible for invites that go beyond your federation boundaries

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

### -Identity
The only valid input is Global

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
Use this parameter to update a saved configuration instance

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

### -LegalURL
URL to a website containing legal information and meeting disclaimers. This would be included in the meeting invite. Please ensure this URL is publicly accessible for invites that go beyond your federation boundaries

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

### -LogoURL

URL to a logo image. This would be included in the meeting invite. Please ensure this URL is publicly accessible for invites that go beyond your federation boundaries

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

### -DisableAppInteractionForAnonymousUsers
Determines if anonymous users can interact with apps in meetings. Set to TRUE to disable App interaction.
Possible values:

- True
- False

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

### -Tenant

Internal Microsoft use

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

### -FeedbackSurveyForAnonymousUsers
Determines if anonymous participants receive surveys to provide feedback about their meeting experience. Set to Disabled to disable anonymous meeting participants to receive surveys. Set to Enabled to allow anonymous meeting participants to receive surveys.
Possible values:

- Enabled
- Disabled

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -LimitPresenterRolePermissions
When set to True, users within the Tenant will have their presenter role capabilities limited.
When set to False, the presenter role capabilities will not be impacted and will remain as is.

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
