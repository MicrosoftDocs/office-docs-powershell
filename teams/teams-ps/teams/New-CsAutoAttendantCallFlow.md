---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csautoattendantcallflow
applicable: Microsoft Teams
title: New-CsAutoAttendantCallFlow
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsAutoAttendantCallFlow

## SYNOPSIS
Use the New-CsAutoAttendantCallFlow cmdlet to create a new call flow.

> [!CAUTION]
> The following configuration parameters will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - -RingResourceAccountDelegates

## SYNTAX

```powershell
New-CsAutoAttendantCallFlow -Name <String> -Menu <Object> [-Greetings <List>] [-Tenant <Guid>] [-ForceListenMenuEnabled] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantCallFlow cmdlet creates a new call flow for use with the Auto Attendant (AA) service. The AA service uses the call flow to handle inbound calls by playing a greeting (if present), and provide callers with actions through a menu.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts @($menuPrompt) -EnableDialByName
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
```

This example creates a new call flow that renders the "Default Menu" menu.

### -------------------------- Example 2 --------------------------
```powershell
$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName
$greeting = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu -Greetings $greeting -ForceListenMenuEnabled
```

This example creates a new call flow that plays a greeting before rendering the "Default Menu" menu with Force listen menu enabled.

## PARAMETERS

### -Name
The Name parameter represents a unique friendly name for the call flow.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Menu
The Menu parameter identifies the menu to render when the call flow is executed.

You can create a new menu by using the [`New-CsAutoAttendantMenu`](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantmenu) cmdlet.

```yaml
Type: System.Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Greetings
If present, the prompts specified by the Greetings parameter (either TTS or Audio) are played before the call flow's menu is rendered.

You can create prompts by using the [`New-CsAutoAttendantPrompt`](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantprompt) cmdlet.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceListenMenuEnabled

If specified, DTMF and speech inputs will not be processed while the greeting or menu prompt is playing. It will enforce callers to listen to all menu options before making a selection.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RingResourceAccountDelegates

If enabled for this call flow, Auto Attendant will ring the delegates assigned to the resource account first. If none of the delegates answer, the call is returned to the Auto Attendant for standard handling.

_Voice applications private preview customers only._

_Saving an auto attendant configuration through Teams admin center will remove this setting._

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallFlow

## NOTES

## RELATED LINKS

[New-CsAutoAttendantMenu](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantmenu)

[New-CsAutoAttendantPrompt](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantprompt)
