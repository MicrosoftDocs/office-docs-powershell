---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsappsetuppolicy
applicable: Microsoft Teams
title: Set-CsTeamsAppSetupPolicy
schema: 2.0.0
---

# Set-CsTeamsAppSetupPolicy

## SYNOPSIS
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.

Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: <https://learn.microsoft.com/MicrosoftTeams/teams-app-setup-policies>.

## SYNTAX

### Identity (Default)
```powershell
Set-CsTeamsAppSetupPolicy [[-Identity] <XdsIdentity>]
 [-AllowSideLoading <Boolean>]
 [-AllowUserPinning <Boolean>]
 [-AppPresetList <Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPreset[]>]
 [-Confirm]
 [-Description <String>]
 [-Force]
 [-PinnedAppBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp[]>]
 [-PinnedCallingBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedCallingBarApp[]>]
 [-PinnedMessageBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedMessageBarApp[]>]
 [-AppPresetMeetingList <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPresetMeeting]>]
 [-AdditionalCustomizationApps <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AdditionalCustomizationApp]>]
 [-Tenant <System.Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```powershell
Set-CsTeamsAppSetupPolicy [-Instance <PSObject>]
 [-AllowSideLoading <Boolean>]
 [-AllowUserPinning <Boolean>]
 [-AppPresetList <Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPreset[]>]
 [-Confirm]
 [-Description <String>]
 [-Force]
 [-PinnedAppBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp[]>]
 [-PinnedCallingBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedCallingBarApp[]>]
 [-PinnedMessageBarApps <Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedMessageBarApp[]>]
 [-AppPresetMeetingList <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPresetMeeting]>]
 [-AdditionalCustomizationApps <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AdditionalCustomizationApp]>]
 [-Tenant <System.Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.

Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: <https://learn.microsoft.com/MicrosoftTeams/teams-app-setup-policies>.

## EXAMPLES

### Example 1

```powershell
# Create new teams app setup policy named "Set-Test".
New-CsTeamsAppSetupPolicy -Identity 'Set-Test'
Set-CsTeamsAppSetupPolicy -Identity 'Set-Test' -AllowUserPinning $true -AllowSideLoading $false
```

Step 1: Create a new Teams app setup policy named "Set-Test".
Step 2: Set AllowUserPinning as true, AllowSideLoading as false.

### Example 2

```powershell
New-CsTeamsAppSetupPolicy -Identity 'Set-Test'
$ActivityApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp -Property @{Id="14d6962d-6eeb-4f48-8890-de55454bb136"}
$ChatApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp -Property @{Id="86fcd49b-61a2-4701-b771-54728cd291fb"}
$TeamsApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp -Property @{Id="2a84919f-59d8-4441-a975-2a8c2643b741"}
$PinnedAppBarApps = @($ActivityApp,$ChatApp,$TeamsApp)
Set-CsTeamsAppSetupPolicy -Identity 'Set-Test' -PinnedAppBarApps $PinnedAppBarApps
```

Step 1: Create new teams app setup policy named "Set-Test".
Step 2: Set ActivityApp, ChatApp, TeamsApp as PinnedAppBarApps.
Step 3: Settings to pin these apps to the app bar in Teams client.

### Example 3

```powershell
New-CsTeamsAppSetupPolicy -Identity 'Set-Test'
$VivaConnectionsApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedMessageBarApp -Property @{Id="d2c6f111-ffad-42a0-b65e-ee00425598aa"}
$PinnedMessageBarApps = @($VivaConnectionsApp)
Set-CsTeamsAppSetupPolicy -Identity 'Set-Test' -PinnedMessageBarApps $PinnedMessageBarApps
```

Step 1: Create new teams app setup policy named "Set-Test".
Step 2: Set VivaConnectionsApp as PinnedAppBarApps.
Step 3: Settings to pin these apps to the messaging extension in Teams client.

### Example 4

```powershell
New-CsTeamsAppSetupPolicy -Identity 'Set-Test'
$VivaConnectionsApp = New-Object -TypeName  Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPreset -Property @{Id="d2c6f111-ffad-42a0-b65e-ee00425598aa"}
$AppPresetList = @($VivaConnectionsApp)
Set-CsTeamsAppSetupPolicy -Identity 'Set-Test' -AppPresetList $AppPresetList
```

Step 1: Create new teams app setup policy named "Set-Test".
Step 2: Set VivaConnectionsApp as AppPresetList
Step 3: Settings to install these apps in your users' personal Teams environment.

## PARAMETERS

### -Identity
Name of app setup policy. If empty, all identities will be used by default.

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
Do not use.

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

### -AllowSideLoading
This is also known as side loading. This setting determines if a user can upload a custom app package in the Teams app. Turning it on lets you create or develop a custom app to be used personally or across your organization without having to submit it to the Teams app store. Uploading a custom app also lets you test an app before you distribute it more widely by only assigning it to a single user or group of users.

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

### -AllowUserPinning
If you turn this on, the user's existing app pins will be added to the list of pinned apps set in this policy. Users can rearrange, add, and remove pins as they choose. If you turn this off, the user's existing app pins will be removed and replaced with the apps defined in this policy.

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

### -AppPresetList
Choose which apps and messaging extensions you want to be installed in your users' personal Teams environment and in meetings they create. Users can install other available apps from the Teams app store.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPreset[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalCustomizationApps
This parameter allows IT admins to create multiple customized versions of their apps and assign these customized versions to users and groups via setup policies. It enables customization of app icons and names for supportive first-party (1P) and third-party (3P) apps, enhancing corporate connections to employees through brand expression and stimulating app awareness and usage.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AdditionalCustomizationApp]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppPresetMeetingList
This parameter is used to manage the list of preset apps that are available during meetings. It allows admins to control which apps are pinned and set the order in which they appear, ensuring that users have quick access to the relevant apps during meetings.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPresetMeeting]
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

### -Description
Description of App setup policy.

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
Do not use.

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

### -PinnedAppBarApps
Pinning an app displays the app in the app bar in Teams client. Admins can pin apps and they can allow users to pin apps. Pinning is used to highlight apps that users need the most and promote ease of access.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinnedCallingBarApps
Determines the list of apps that are pre pinned for a participant in Calls.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedCallingBarApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinnedMessageBarApps
Apps will be pinned in messaging extensions and into the ellipsis menu.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedMessageBarApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Do not use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.Policy.Administration.Cmdlets.Core.AppPreset

### Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedApp

### Microsoft.Teams.Policy.Administration.Cmdlets.Core.PinnedMessageBarApp

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
