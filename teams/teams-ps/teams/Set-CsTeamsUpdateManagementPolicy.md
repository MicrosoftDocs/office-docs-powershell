---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsupdatemanagementpolicy
applicable: Microsoft Teams
title: Set-CsTeamsUpdateManagementPolicy
schema: 2.0.0
author: vargasj-ms
ms.author: vargasj
manager: gnamun
---

# Set-CsTeamsUpdateManagementPolicy

## SYNOPSIS
Use this cmdlet to modify a Teams Update Management policy.

## SYNTAX

```powershell
Set-CsTeamsUpdateManagementPolicy
 [-DisabledInProductMessages <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Description <String>] [-AllowManagedUpdates <Boolean>] [-AllowPreview <Boolean>] [-UpdateDayOfWeek <Int64>]
 [-UpdateTime <String>] [-UpdateTimeOfDay <DateTime>] [-AllowPublicPreview <String>]
 [-AllowPrivatePreview <AllowPrivatePreview>] [-UseNewTeamsClient <String>]
 [-BlockLegacyAuthorization <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Teams Update Management Policy allows admins to specify if a given user is enabled to preview features in Teams.


## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsUpdateManagementPolicy -Identity "Campaign Policy" -DisabledInProductMessages @("91382d07-8b89-444c-bbcb-cfe43133af33")
```

In this example, the policy "Campaign Policy" is modified, disabling the in-product messages with the category "What's New".

## PARAMETERS

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

### -DisabledInProductMessages
List of IDs of the categories of the in-product messages that will be disabled. You can choose one of the categories from this table:

| ID | Campaign Category |
| -- | -- |
| 91382d07-8b89-444c-bbcb-cfe43133af33 | What's New |
| edf2633e-9827-44de-b34c-8b8b9717e84c | Conferences |

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowManagedUpdates

Enables/Disables managed updates for the user.

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

### -AllowPreview

Indicates whether all feature flags are switched on or off. Can be set only when AllowManagedUpdates is set to True.

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

### -AllowPrivatePreview

This setting will allow admins to allow users in their tenant to opt in to Private Preview.
            If it is Disabled, then users will not be able to opt in and the ring switcher UI will be hidden in the Desktop Client.
            If it is Enabled, then users will be able to opt in and the ring switcher UI will be available in the Desktop Client.
            If it is Forced, then users will be switched to Private Preview.

```yaml
Type: AllowPrivatePreview
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPublicPreview

This setting will allow admins to allow users in their tenant to opt in to Public Preview.
            If it is Disabled, then users will not be able to opt in and the ring switcher UI will be hidden in the Desktop Client.
            If it is Enabled, then users will be able to opt in and the ring switcher UI will be available in the Desktop Client.
            If it is FollowOfficePreview, then users will not be able to opt in and instead follow their Office channel, and be switched to Public Preview if their Office channel is CC (Preview). The ring switcher UI will be hidden in the Desktop Client. This is not applicable to the Web Client.
            If it is Forced, then users will be switched to Public Preview.

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

### -BlockLegacyAuthorization

This setting will force Teams clients to enforce session revocation for core Messaging and Calling/Meeting scenarios.
            If turned ON, session revocation will be enforced for calls, chats and meetings for opted-in users.
            If turned OFF, session revocation will not  be enforced for calls, chats and meetings for opted-in users.

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

### -Description

Enables administrators to provide explanatory text about the policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -UpdateDayOfWeek

 Machine local day. 0-6(Sun-Sat) Can be set only when AllowManagedUpdates is set to True.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateTime

Machine local time in HH:MM format. Can be set only when AllowManagedUpdates is set to True.

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

### -UpdateTimeOfDay

Machine local time. Can be set only when AllowManagedUpdates is set to True

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseNewTeamsClient

This setting will enable admins to show or hide which users see the Teams preview toggle on the current Teams client.
            If it is AdminDisabled, then users will not be able to see the Teams preview toggle in the Desktop Client.
            If it is UserChoice, then users will be able to see the Teams preview toggle in the Desktop Client.
            If it is MicrosoftChoice, then Microsoft will configure/ manage whether user sees or does not see this feature if the admin has set nothing.
            If it is NewTeamsAsDefault, then New Teams will be default for users, and they will be able to switch back to Classic Teams via the toggle in the Desktop Client.
            If it is NewTeamsOnly, then New Teams will be the only Teams client installed for users.

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

### -OCDIRedirect
This setting controls whether users are redirected from teams.microsoft.com to the unified domain teams.cloud.microsoft. Possible values are:
- **Microsoft Default**, Microsoft will manage redirection behavior. If no explicit admin configuration is set, users may be redirected automatically.
- **Disabled**, Users will remain on teams.microsoft.com. Use this if your organization's apps are incompatible with the unified domain.
- **Enabled**, Users will be redirected to teams.cloud.microsoft. Use this only if your organization had previously opted out of redirection and now wants to opt back in.
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
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

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
The unique identifier of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS
