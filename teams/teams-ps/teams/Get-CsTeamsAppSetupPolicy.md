---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsappsetuppolicy
applicable: Microsoft Teams
title: Get-CsTeamsAppSetupPolicy
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsTeamsAppSetupPolicy

## SYNOPSIS
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.

Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: <https://learn.microsoft.com/MicrosoftTeams/teams-app-setup-policies>.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsAppSetupPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsAppSetupPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.

Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: <https://learn.microsoft.com/MicrosoftTeams/teams-app-setup-policies>.

## EXAMPLES

### Example 1

```powershell
Get-CsTeamsAppSetupPolicy -Identity Global
```

```Output
Identity             : Global
AppPresetList        : {Id=d2c6f111-ffad-42a0-b65e-ee00425598aa}
PinnedAppBarApps     : {Id=14d6962d-6eeb-4f48-8890-de55454bb136;Order=1, Id=86fcd49b-61a2-4701-b771-54728cd291fb;Order=2, Id=2a84919f-59d8-4441-a975-2a8c2643b741;Order=3, Id=ef56c0de-36fc-4ef8-b417-3d82ba9d073c;Order=4...}
PinnedMessageBarApps : {}
AppPresetMeetingList : {}
Description          :
AllowSideLoading     : True
AllowUserPinning     : True
```
Get all the Teams App Setup Policies.

### Example 2

```powershell
Get-CsTeamsAppSetupPolicy
```

```Output
Identity             : Global
AppPresetList        : {Id=d2c6f111-ffad-42a0-b65e-ee00425598aa}
PinnedAppBarApps     : {Id=14d6962d-6eeb-4f48-8890-de55454bb136;Order=1, Id=86fcd49b-61a2-4701-b771-54728cd291fb;Order=2, Id=2a84919f-59d8-4441-a975-2a8c2643b741;Order=3, Id=ef56c0de-36fc-4ef8-b417-3d82ba9d073c;Order=4...}
PinnedMessageBarApps : {}
AppPresetMeetingList : {}
Description          :
AllowSideLoading     : True
AllowUserPinning     : True

Identity             : Tag:Set-test
AppPresetList        : {Id=d2c6f111-ffad-42a0-b65e-ee00425598aa}
PinnedAppBarApps     : {Id=14d6962d-6eeb-4f48-8890-de55454bb136;Order=1, Id=86fcd49b-61a2-4701-b771-54728cd291fb;Order=2, Id=2a84919f-59d8-4441-a975-2a8c2643b741;Order=3, Id=ef56c0de-36fc-4ef8-b417-3d82ba9d073c;Order=4...}
PinnedMessageBarApps : {}
AppPresetMeetingList : {}
Description          :
AllowSideLoading     : True
AllowUserPinning     : True
```
Get all the Teams App Setup Policies.

## PARAMETERS

### -Filter
Do not use.

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
Name of App setup policy. If empty, all Identities will be used by default.

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

### -LocalStore
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
