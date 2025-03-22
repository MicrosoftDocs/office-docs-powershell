---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/set-csonlinedialinconferencinguserdefaultnumber
applicable: Microsoft Teams
title: Set-CsOnlineDialInConferencingUserDefaultNumber
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsOnlineDialInConferencingUserDefaultNumber

## SYNOPSIS
Replace the default toll or toll-free number for all users.

> [!IMPORTANT]
>This command is being deprecated and will not be available after July 7, 2024. If you are using this command to bulk update Audio conferencing Toll or Toll free phone numbers for users in your organization you can do that using the following alternative methods.
>	1. Use a custom Teams audio conferencing policy - [Audio Conferencing toll-free number policies - Microsoft Teams | Microsoft Learn](https://learn.microsoft.com/en-us/microsoftteams/audio-conferencing-toll-free-numbers-policy)
>	2. Use Set-CsOnlineDialinConferencingUser - [Set-CsOnlineDialInConferencingUser (MicrosoftTeamsPowerShell) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/teams/set-csonlinedialinconferencinguser?view=teams-ps)
>
>If you need assistance in using any of the above methods to achieve what you previously did with the Set-CsOnlineDialInConferencingUserDefaultNumber command, please open a support case with our customer support team.

## SYNTAX

### BridgeNameParams
```
Set-CsOnlineDialInConferencingUserDefaultNumber [-TenantDomain <String>] [-Tenant <Guid>]
 -BridgeName <String> [-FromNumber <String>] -ToNumber <String> -NumberType <String>
 [-CountryOrRegion <String>] [-AreaOrState <String>] [-CapitalOrMajorCity <String>] [-RescheduleMeetings]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### FilterByUsageLocation
```
Set-CsOnlineDialInConferencingUserDefaultNumber [-TenantDomain <String>] [-Tenant <Guid>]
 [-BridgeName <String>] -BridgeId <Guid> -ToNumber <String> -NumberType <String>
 -CountryOrRegion <String> [-AreaOrState <String>] [-CapitalOrMajorCity <String>] [-RescheduleMeetings]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UniqueBridgeParams
```
Set-CsOnlineDialInConferencingUserDefaultNumber [-TenantDomain <String>] [-Tenant <Guid>]
 -BridgeId <System.Guid> -FromNumber <String> -ToNumber <String> -NumberType <String> [-RescheduleMeetings]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Provide the detailed description here.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingUserDefaultNumber -FromNumber 14255550100 -ToNumber 14255550101 -NumberType Toll -RescheduleMeetings -BridgeId 9884626f-dcfb-49f4-8025-912f5bc68fdc
```

This example replaces the default toll or toll-free number for all users who have the number 14255550100 as a default number to the number 14255550101 and starts the process of rescheduling their meetings.

## PARAMETERS

### -BridgeId
The Bridge Id results from running [Get-CsOnlineDialInConferencingBridge](https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingbridge)
For example "9884626f-dcfb-49f4-8025-912f5bc68fdc". You can either specify BridgeName or BridgeId.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeName
The Bridge Name results from running [Get-CsOnlineDialInConferencingBridge](https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingbridge)
For example "Conference Bridge". You can either specify BridgeName or BridgeId.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
A String representing the Country or Region this Dial In Conferencing Default number belongs to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromNumber
The current default number defined.
$null if no number defined.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberType
The type of number this Dial In Conferencing Default number has.
Valid values are

- Toll
- TollFree

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ToNumber
The new number to assign, without the + sign, for example 14255550101.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AreaOrState
A String representing the Area or State this Dial In Conferencing Default number belongs to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapitalOrMajorCity
A String representing the Capital or Major City this Dial In Conferencing Default number belongs to.

```yaml
Type: String
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
Prompts you for confirmation before executing the command.

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -RescheduleMeetings
Sends e-mail notifications to Meeting attendees with the updated settings.

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

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
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
Describes what would happen if you executed the command without actually executing the command.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
