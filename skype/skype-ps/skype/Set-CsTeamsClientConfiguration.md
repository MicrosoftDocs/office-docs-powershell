---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Set-CsTeamsClientConfiguration
schema: 2.0.0
---

# Set-CsTeamsClientConfiguration

## SYNOPSIS
The TeamsClientConfiguration allows IT admins to control the settings that can be accessed via Teams clients across their organization.  This configuration includes settings like which third party cloud storage your organization allows, whether or not guest users can access the teams client, and how Surface Hub devices can interact with Skype for Business meetings.  The parameter descriptions below describe what settings are managed by this configuration and how they are enforced. 

## SYNTAX

### Identity (Default)
```
Set-CsTeamsClientConfiguration [-Tenant <System.Guid>] [-AllowEmailIntoChannel <Boolean>]
 [-RestrictedSenderList <String>] [-AllowDropBox <Boolean>] [-AllowBox <Boolean>] [-AllowGoogleDrive <Boolean>]
 [-AllowShareFile <Boolean>] [-AllowOrganizationTab <Boolean>] [-AllowSkypeBusinessInterop <Boolean>]
 [-AllowTBotProactiveMessaging <Boolean>] [-ContentPin <String>] [-AllowResourceAccountSendMessage <Boolean>]
 [-ResourceAccountContentAccess <String>] [-AllowGuestUser <Boolean>]
 [-AllowScopedPeopleSearchandAccess <Boolean>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsTeamsClientConfiguration [-Tenant <System.Guid>] [-AllowEmailIntoChannel <Boolean>]
 [-RestrictedSenderList <String>] [-AllowDropBox <Boolean>] [-AllowBox <Boolean>] [-AllowGoogleDrive <Boolean>]
 [-AllowShareFile <Boolean>] [-AllowOrganizationTab <Boolean>] [-AllowSkypeBusinessInterop <Boolean>]
 [-AllowTBotProactiveMessaging <Boolean>] [-ContentPin <String>] [-AllowResourceAccountSendMessage <Boolean>]
 [-ResourceAccountContentAccess <String>] [-AllowGuestUser <Boolean>]
 [-AllowScopedPeopleSearchandAccess <Boolean>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The TeamsClientConfiguration allows IT admins to control the settings that can be accessed via Teams clients across their organization.  This configuration includes settings like which third party cloud storage your organization allows, whether or not guest users can access the teams client, and whether or not meeting room devices running teams are can display content from user accounts.  The parameter descriptions below describe what settings are managed by this configuration and how they are enforced. 

An organization can have only one effective Teams Client Configuration - these settings will apply across the entire organization for the particular features they control.  

Note that three of these settings (ContentPin, ResourceAccountContentAccess, and AllowResourceAccountSendMessage) control resource account behavior for Surface Hub devices attending Skype for Business meetings, and are not used in Microsoft Teams.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsClientConfiguration -Identity Global -AllowDropBox $false
```

In this example, the client configuration effective for the organization (Global) is being updated to disable the use of DropBox in the organization.  All other settings in the configuration remain the same.

## PARAMETERS

### -AllowBox
Designates whether users are able to leverage Box as a third party storage solution in Microsoft Teams.  If $true, users will be able to add Box in the client and interact with the files stored there.

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

### -AllowDropBox
Designates whether users are able to leverage DropBox as a third party storage solution in Microsoft Teams.  If $true, users will be able to add DropBox in the client and interact with the files stored there.

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

### -AllowEmailIntoChannel
When set to $true, mail hooks are enabled, and users can post messages to a channel by sending an email to the email address of Teams channel.

To find the email address for a channel, click the More options menu for the channel and then select Get email address. 

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

### -AllowGoogleDrive
Designates whether users are able to leverage GoogleDrive as a third party storage solution in Microsoft Teams.  If $true, users will be able to add Google Drive in the client and interact with the files stored there.

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

### -AllowGuestUser
Designates whether or not guest users in your organization will have access to the Teams client.  If $true, guests in your tenant will be able to access the Teams client.  Note that this setting has a core dependency on Guest Access being enabled in your Office 365 tenant.  For more information on this topic, read Authorize Guest Access in Microsoft Teams: https://docs.microsoft.com/en-us/microsoftteams/teams-dependencies

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

### -AllowOrganizationTab
When set to $true, users will be able to see the organizational chart icon other users' contact cards, and when clicked, this icon will display the detailed organizational chart.

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

### -AllowResourceAccountSendMessage
Surface Hub uses a device account to provide email and collaboration services (IM, video, voice). This device account is used as the originating identity (the “from” party) when sending email, IM, and placing calls. As this account is not coming from an individual, identifiable user, it is deemed “anonymous” because it originated from the Surface Hub's device account. If set to $true, these device accounts will be able to send chat messages in Skype for Business Online (does not apply to Microsoft Teams).

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

### -AllowScopedPeopleSearchandAccess
If set to $true, the Exchange address book policy (ABP) will be used to provide customized view of the global address book for each user.  This is only a virtual separation and not a legal separation.

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

### -AllowShareFile
Designates whether users are able to leverage ShareFile as a third party storage solution in Microsoft Teams.  If $true, users will be able to add ShareFile in the client and interact with the files stored there.

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

### -AllowSkypeBusinessInterop
When set to $true, Teams conversations automatically show up in Skype for Business for users that aren't enabled for Teams. 

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

### -AllowTBotProactiveMessaging
Deprecated, do not use.

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

### -ContentPin
This setting applies only to Skype for Business Online (not Microsoft Teams) and defines whether the user must provide a secondary form of authentication to access the meeting content *from a resource device account*.  Meeting content is defined as files that are shared to the "Content Bin" - files that have been attached to the meeting.

Possible Values: NotRequired, RequiredOutsideScheduledMeeting, AlwaysRequired .  Default Value: RequiredOutsideScheduledMeeting

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

### -Force
Bypass any verification checks and non-fatal errors.

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
The only valid input is Global - the tenant wide configuration.
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
You can use this to pass the results from Get-CsTeamsClientConfiguration into the Set-CsTeamsClientConfiguration rather than specifying the "-Identity Global" parameter.

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

### -ResourceAccountContentAccess
If $true, resource accounts for Surface Hub devices calling into Skype for Business meetings will be able to access content uploaded to the Content Bin.  Use with -ContentPIN parameter to designate whether a ContentPIN is required when access content from a device.

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

### -RestrictedSenderList
Senders domains can be further restricted to ensure that only allowed SMTP domains can send emails to the Teams channels.  This is a comma-separated string of the domains you'd like to *allow* to send emails to Teams channels.

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
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
