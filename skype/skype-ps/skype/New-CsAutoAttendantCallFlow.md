---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsAutoAttendantCallFlow
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsAutoAttendantCallFlow

## SYNOPSIS
Use the New-CsAutoAttendantCallFlow cmdlet to create a new call flow.

## SYNTAX

```powershell
New-CsAutoAttendantCallFlow -Name <String> -Menu <Object> [-Greetings <List>] [-Tenant <Guid>] [<CommonParameters>]
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
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu -Greetings $greeting
```

This example creates a new call flow that plays a greeting before rendering the "Default Menu" menu.

## PARAMETERS

### -Name
The Name parameter represents a unique friendly name for the call flow.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Menu
The Menu parameter identifies the menu to render when the call flow is executed.

You can create a new menu by using the [`New-CsAutoAttendantMenu`](New-CsAutoAttendantMenu.md) cmdlet.


```yaml
Type: System.Object
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Greetings
If present, the prompts specified by the Greetings parameter (either TTS or Audio) are played before the call flow's menu is rendered.

You can create prompts by using the [`New-CsAutoAttendantPrompt`](New-CsAutoAttendantPrompt.md) cmdlet.


```yaml
Type: System.Collections.Generic.List
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

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallFlow


## NOTES

## RELATED LINKS

[New-CsAutoAttendantMenu](New-CsAutoAttendantMenu.md)

[New-CsAutoAttendantPrompt](New-CsAutoAttendantPrompt.md)
