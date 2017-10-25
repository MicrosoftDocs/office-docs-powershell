---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantCallFlow
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantCallFlow

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantCallFlow cmdlet to create a new call flow.

## SYNTAX

```
New-CsOrganizationalAutoAttendantCallFlow [-Menu <Object>] [-Name <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-Greetings <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantCallFlow cmdlet creates a new call flow for use with the Organizational Auto Attendant (OAA) service. The OAA service uses the call flow to handle inbound calls by playing a greeting (if present), and provide callers with actions through a menu.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts @($menuPrompt) -EnableDialByName 
$callFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
```

This example creates a new call flow that renders the “Default Menu” menu.

### -------------------------- Example 2 --------------------------
```
$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName 
$greeting = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$callFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu -Greetings $greeting
```

This example creates a new call flow that plays a greeting before rendering the “Default Menu” menu.

## PARAMETERS

### -Menu
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.Menu

The Menu parameter identifies the menu to render when the call flow is executed. 

You can create a new menu by using the New-CsOrganizationalAutoAttendantMenu cmdlet.


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

### -Name
PARAMVALUE: String

The Name parameter represents the friendly name for the call flow.


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
PARAMVALUE: $true | $false

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

### -DomainController
PARAMVALUE: Microsoft.Rtc.Management.Deploy.Fqdn

```yaml
Type: Object
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
PARAMVALUE: System.Management.Automation.SwitchParameter

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

### -Greetings
PARAMVALUE: System.Collections.Generic.List

If present, the prompts specified by the Greetings parameter (either TTS or Audio) are played before the call flow’s menu is rendered.

You can create prompts by using the New-CsOrganizationalAutoAttendantPrompt cmdlet.


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
PARAMVALUE: Guid

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallFlow


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendantMenu](New-CsOrganizationalAutoAttendantMenu.md)

[New-CsOrganizationalAutoAttendantPrompt](New-CsOrganizationalAutoAttendantPrompt.md)